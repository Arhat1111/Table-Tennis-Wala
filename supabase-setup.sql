-- TABLE TENNIS WALA — SUPABASE BACKEND
-- Run this once in Supabase Dashboard > SQL Editor.
-- Then create the owner's Auth user and add that user to ttw_admins (instructions below).

create table if not exists public.ttw_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.ttw_products (
  site_id text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (site_id, id)
);

create table if not exists public.ttw_orders (
  site_id text not null,
  order_id text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (site_id, order_id)
);

create table if not exists public.ttw_site_content (
  site_id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Helper used by RLS policies. Only explicitly registered owners are admins.
create or replace function public.ttw_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.ttw_admins a
    where a.user_id = auth.uid()
  );
$$;

revoke all on public.ttw_admins from anon, authenticated;
grant execute on function public.ttw_is_admin() to anon, authenticated;

-- Data API grants: least privilege first, then RLS decides allowed rows/actions.
revoke all on public.ttw_products from anon, authenticated;
revoke all on public.ttw_orders from anon, authenticated;
revoke all on public.ttw_site_content from anon, authenticated;

grant select on public.ttw_products to anon, authenticated;
grant select on public.ttw_site_content to anon, authenticated;
grant insert on public.ttw_orders to anon;

grant select, insert, update, delete on public.ttw_products to authenticated;
grant select, insert, update, delete on public.ttw_orders to authenticated;
grant select, insert, update, delete on public.ttw_site_content to authenticated;

alter table public.ttw_products enable row level security;
alter table public.ttw_orders enable row level security;
alter table public.ttw_site_content enable row level security;

-- Drop/recreate policies so this setup script is safe to re-run.
drop policy if exists "ttw public read products" on public.ttw_products;
drop policy if exists "ttw admin manage products" on public.ttw_products;
drop policy if exists "ttw public create order" on public.ttw_orders;
drop policy if exists "ttw admin manage orders" on public.ttw_orders;
drop policy if exists "ttw public read content" on public.ttw_site_content;
drop policy if exists "ttw admin manage content" on public.ttw_site_content;

create policy "ttw public read products"
on public.ttw_products for select
to anon, authenticated
using (site_id = 'tabletenniswala-live');

create policy "ttw admin manage products"
on public.ttw_products for all
to authenticated
using (public.ttw_is_admin() and site_id = 'tabletenniswala-live')
with check (public.ttw_is_admin() and site_id = 'tabletenniswala-live');

-- Public storefront can CREATE an order, but cannot read/update/delete the shared order list.
create policy "ttw public create order"
on public.ttw_orders for insert
to anon
with check (
  site_id = 'tabletenniswala-live'
  and order_id like 'TTW-%'
  and jsonb_typeof(data) = 'object'
);

create policy "ttw admin manage orders"
on public.ttw_orders for all
to authenticated
using (public.ttw_is_admin() and site_id = 'tabletenniswala-live')
with check (public.ttw_is_admin() and site_id = 'tabletenniswala-live');

create policy "ttw public read content"
on public.ttw_site_content for select
to anon, authenticated
using (site_id = 'tabletenniswala-live');

create policy "ttw admin manage content"
on public.ttw_site_content for all
to authenticated
using (public.ttw_is_admin() and site_id = 'tabletenniswala-live')
with check (public.ttw_is_admin() and site_id = 'tabletenniswala-live');

-- Product image bucket. Public viewing is allowed; only a registered admin can upload/change files.
insert into storage.buckets (id, name, public)
values ('ttw-products', 'ttw-products', true)
on conflict (id) do update set public = true;

drop policy if exists "ttw admin upload product images" on storage.objects;
drop policy if exists "ttw admin update product images" on storage.objects;
drop policy if exists "ttw admin delete product images" on storage.objects;

create policy "ttw admin upload product images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'ttw-products' and public.ttw_is_admin());

create policy "ttw admin update product images"
on storage.objects for update
to authenticated
using (bucket_id = 'ttw-products' and public.ttw_is_admin())
with check (bucket_id = 'ttw-products' and public.ttw_is_admin());

create policy "ttw admin delete product images"
on storage.objects for delete
to authenticated
using (bucket_id = 'ttw-products' and public.ttw_is_admin());

-- Realtime: adding tables to the publication allows the website/admin to receive live changes.
do $$
begin
  alter publication supabase_realtime add table public.ttw_products;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.ttw_orders;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.ttw_site_content;
exception when duplicate_object then null;
end $$;

-- --------------------------------------------------------------------------
-- AFTER RUNNING THIS FILE:
-- 1) Supabase Dashboard > Authentication > Users > Add user.
-- 2) Create the business owner's email/password account.
-- 3) Replace OWNER_EMAIL_HERE below and run ONLY this INSERT once:
--
-- insert into public.ttw_admins (user_id, email)
-- select id, email from auth.users where lower(email) = lower('OWNER_EMAIL_HERE')
-- on conflict (user_id) do update set email = excluded.email;
-- --------------------------------------------------------------------------
