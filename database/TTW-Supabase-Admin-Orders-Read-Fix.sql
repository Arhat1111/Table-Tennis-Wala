-- TABLE TENNIS WALA — ADMIN ORDER READ FIX
-- Run in the Table Tennis Wala Supabase project:
-- https://jfyhasxdlrdntzmqoppf.supabase.co
--
-- Purpose:
-- 1) Ensure the current TTW admin account is mapped to ttw_admins.
-- 2) Keep RLS on ttw_orders.
-- 3) Add a secure admin-only RPC for reading orders.
--    This avoids RLS silently returning an empty array in the admin UI.

-- Ensure the admin table exists.
create table if not exists public.ttw_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

-- Re-register the admin account already used for Table Tennis Wala.
-- Safe to run repeatedly.
insert into public.ttw_admins (user_id, email)
select id, email
from auth.users
where lower(email) = lower('arhat.j.h.1111@gmail.com')
on conflict (user_id)
do update set email = excluded.email;

-- Admin helper.
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

-- Keep order-table RLS explicit.
alter table public.ttw_orders enable row level security;

drop policy if exists "ttw admin manage orders" on public.ttw_orders;

create policy "ttw admin manage orders"
on public.ttw_orders
for all
to authenticated
using (
  public.ttw_is_admin()
  and site_id = 'tabletenniswala-live'
)
with check (
  public.ttw_is_admin()
  and site_id = 'tabletenniswala-live'
);

-- Secure order reader.
-- SECURITY DEFINER bypasses table RLS internally, but the function first checks
-- that auth.uid() belongs to public.ttw_admins.
create or replace function public.ttw_admin_list_orders(
  p_site_id text default 'tabletenniswala-live'
)
returns table (
  order_id text,
  data jsonb,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'Admin order read denied: no authenticated Supabase session';
  end if;

  if not exists (
    select 1
    from public.ttw_admins a
    where a.user_id = auth.uid()
  ) then
    raise exception 'Admin order read denied: this Supabase user is not registered in ttw_admins';
  end if;

  if p_site_id <> 'tabletenniswala-live' then
    raise exception 'Admin order read denied: invalid site id';
  end if;

  return query
  select
    o.order_id,
    o.data,
    o.created_at,
    o.updated_at
  from public.ttw_orders o
  where o.site_id = p_site_id
  order by o.created_at asc;
end;
$$;

revoke all on function public.ttw_admin_list_orders(text) from public;
grant execute on function public.ttw_admin_list_orders(text) to authenticated;

-- Verification 1: confirm the Auth user and admin mapping have the same UUID.
select
  u.id as auth_user_id,
  u.email as auth_email,
  a.user_id as admin_user_id,
  a.email as admin_email,
  case when a.user_id = u.id then 'ADMIN READY' else 'NOT MAPPED' end as status
from auth.users u
left join public.ttw_admins a on a.user_id = u.id
where lower(u.email) = lower('arhat.j.h.1111@gmail.com');

-- Verification 2: confirm orders exist in the shared table.
select
  order_id,
  created_at,
  data->>'status' as status,
  data->'customer'->>'fullName' as customer_name,
  data->>'amount' as amount
from public.ttw_orders
where site_id = 'tabletenniswala-live'
order by created_at desc;
