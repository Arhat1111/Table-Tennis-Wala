-- TABLE TENNIS WALA — ORDER BACKEND FIX
-- Run this in the SAME Supabase project used by the live website:
-- Project ref: jfyhasxdlrdntzmqoppf
--
-- The website/admin use public.ttw_orders (NOT a legacy table named public.orders).

create table if not exists public.ttw_orders (
  site_id text not null,
  order_id text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (site_id, order_id)
);

alter table public.ttw_orders enable row level security;

-- API grants
revoke all on public.ttw_orders from anon, authenticated;
grant insert on public.ttw_orders to anon;
grant select, insert, update, delete on public.ttw_orders to authenticated;

-- The helper should already exist from the main TTW setup, but recreate it safely.
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
grant execute on function public.ttw_is_admin() to anon, authenticated;

drop policy if exists "ttw public create order" on public.ttw_orders;
drop policy if exists "ttw admin manage orders" on public.ttw_orders;

-- Browser checkout may INSERT only TTW orders for this site.
create policy "ttw public create order"
on public.ttw_orders
for insert
to anon
with check (
  site_id = 'tabletenniswala-live'
  and order_id ~ '^TTW-[0-9]+$'
  and jsonb_typeof(data) = 'object'
  and octet_length(data::text) <= 100000
);

-- Authenticated TTW admins can read/manage the shared order list.
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

-- Narrow public order-creation RPC.
-- This is the preferred checkout path used by the final website build.
create or replace function public.ttw_create_order(
  p_site_id text,
  p_order_id text,
  p_data jsonb,
  p_created_at timestamptz default now()
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if p_site_id <> 'tabletenniswala-live' then
    raise exception 'Invalid site id';
  end if;

  if p_order_id is null or p_order_id !~ '^TTW-[0-9]+$' then
    raise exception 'Invalid order id';
  end if;

  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'Invalid order payload';
  end if;

  if octet_length(p_data::text) > 100000 then
    raise exception 'Order payload is too large';
  end if;

  insert into public.ttw_orders (
    site_id,
    order_id,
    data,
    created_at,
    updated_at
  )
  values (
    p_site_id,
    p_order_id,
    p_data,
    coalesce(p_created_at, now()),
    now()
  )
  on conflict (site_id, order_id) do nothing;
end;
$$;

revoke all on function public.ttw_create_order(text, text, jsonb, timestamptz) from public;
grant execute on function public.ttw_create_order(text, text, jsonb, timestamptz) to anon, authenticated;

-- Ensure Realtime contains ttw_orders.
do $$
begin
  alter publication supabase_realtime add table public.ttw_orders;
exception
  when duplicate_object then null;
end $$;

-- Helpful verification output:
select
  'ttw_orders ready' as status,
  count(*) as current_order_count
from public.ttw_orders
where site_id = 'tabletenniswala-live';
