-- TABLE TENNIS WALA — FINAL DIRECT ORDER SETUP
-- Run this ONCE in the Table Tennis Wala Supabase project:
-- Project ref: jfyhasxdlrdntzmqoppf
--
-- No RPC functions are used by the website after this update.
-- Checkout directly INSERTs into ttw_orders.
-- Admin directly SELECTs from ttw_orders.

create table if not exists public.ttw_orders (
  site_id text not null,
  order_id text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (site_id, order_id)
);

alter table public.ttw_orders enable row level security;

-- Ensure the admin helper is correct.
create or replace function public.ttw_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.ttw_admins a
    where a.user_id = auth.uid()
  );
$$;

revoke all on function public.ttw_is_admin() from public;
grant execute on function public.ttw_is_admin() to authenticated;

-- Make sure the current TTW admin is registered.
insert into public.ttw_admins (user_id, email)
select id, email
from auth.users
where lower(email) = lower('arhat.j.h.1111@gmail.com')
on conflict (user_id)
do update set email = excluded.email;

-- Table API grants.
revoke all on public.ttw_orders from anon, authenticated;

-- Both anon and authenticated visitors may INSERT an order.
-- This matters because a browser that has previously visited /admin.html may
-- still have an authenticated Supabase session while shopping.
grant insert on public.ttw_orders to anon, authenticated;

-- Authenticated admin can read/manage the order list.
grant select, update, delete on public.ttw_orders to authenticated;

-- Replace all order policies with the final direct policies.
drop policy if exists "ttw public create order" on public.ttw_orders;
drop policy if exists "ttw checkout create order" on public.ttw_orders;
drop policy if exists "ttw admin manage orders" on public.ttw_orders;
drop policy if exists "ttw admin read orders" on public.ttw_orders;

create policy "ttw checkout create order"
on public.ttw_orders
for insert
to anon, authenticated
with check (
  site_id = 'tabletenniswala-live'
  and order_id ~ '^TTW-[0-9]+$'
  and jsonb_typeof(data) = 'object'
  and octet_length(data::text) <= 100000
);

create policy "ttw admin read orders"
on public.ttw_orders
for select
to authenticated
using (
  site_id = 'tabletenniswala-live'
  and public.ttw_is_admin()
);

create policy "ttw admin manage orders"
on public.ttw_orders
for update
to authenticated
using (
  site_id = 'tabletenniswala-live'
  and public.ttw_is_admin()
)
with check (
  site_id = 'tabletenniswala-live'
  and public.ttw_is_admin()
);

create policy "ttw admin delete orders"
on public.ttw_orders
for delete
to authenticated
using (
  site_id = 'tabletenniswala-live'
  and public.ttw_is_admin()
);

-- Realtime is optional for manual Refresh but useful for automatic admin updates.
do $$
begin
  alter publication supabase_realtime add table public.ttw_orders;
exception
  when duplicate_object then null;
end $$;

-- Verification: should show ADMIN READY for the admin account.
select
  u.email,
  case when a.user_id = u.id then 'ADMIN READY' else 'NOT MAPPED' end as admin_status
from auth.users u
left join public.ttw_admins a on a.user_id = u.id
where lower(u.email) = lower('arhat.j.h.1111@gmail.com');

-- Verification: shows existing TTW orders.
select
  order_id,
  created_at,
  data->'customer'->>'fullName' as customer_name,
  data->>'amount' as total
from public.ttw_orders
where site_id = 'tabletenniswala-live'
order by created_at desc;
