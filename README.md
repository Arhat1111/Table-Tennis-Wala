# Table Tennis Wala

Production website for Table Tennis Wala.

## Deploy to Vercel

1. Upload this repository to GitHub.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework Preset: **Other** / static site.
5. Root Directory: leave as repository root.
6. No build command is required.
7. No output directory is required.
8. Deploy.

## Admin

Admin page:

`/admin.html`

The admin uses Supabase Auth and the shared Supabase backend.

## Supabase

This build is already connected to the production Supabase project using the public publishable key.

The website uses:
- `ttw_products`
- `ttw_orders`
- `ttw_site_content`
- `ttw_admins`
- `ttw-products` Storage bucket

Do not place a Supabase secret/service-role key in this repository.

## Product management

The client can update:
- MRP
- Our price
- Images
- Category
- Product details

from the admin panel. Product edits are saved directly to Supabase and then reflected on the storefront.


## Final storefront fixes (20 Oct 2026)

Includes non-overlapping home action cards, explicit add-to-cart confirmation, cart/WhatsApp collision prevention, and an authoritative no-redirect WhatsApp checkout success screen.
