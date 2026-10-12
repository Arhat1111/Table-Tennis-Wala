-- TTW catalogue cleanup / XIOM image maintenance — 12 Oct 2026
-- Optional manual backup. The website performs the same cleanup after an admin
-- logs in, but you may run this once if you want the duplicate row removed now.

delete from public.ttw_products
where site_id = 'tabletenniswala-live'
  and id in (
    select id from (
      select
        id,
        row_number() over (
          partition by lower(coalesce(data->>'brand','')),
                       lower(regexp_replace(trim(coalesce(data->>'name','')), '\s+', ' ', 'g'))
          order by updated_at asc, id asc
        ) as rn
      from public.ttw_products
      where site_id = 'tabletenniswala-live'
    ) ranked
    where rn > 1
  );
