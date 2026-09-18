# Table Tennis Wala — Supabase migration setup

This version removes the Firebase dependency and uses Supabase for:

- live checkout orders
- admin order list across devices
- order statuses
- monthly sales/customer analytics (using the shared order list)
- admin-added products
- admin product image storage
- editable website content
- admin authentication
- realtime updates

## 1. Create a Supabase project

Create a Supabase project, then open **Project Settings / API** (or the Connect/API keys section shown by your Supabase dashboard).

Copy:

- Project URL
- Publishable key or legacy `anon` key

Do **not** use the `service_role` key in a website file.

## 2. Add the browser config

Open `supabase-config.js` and fill:

```js
window.TTW_SUPABASE_CONFIG = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_PUBLISHABLE_OR_ANON_KEY",
  siteId: "tabletenniswala-live",
  productBucket: "ttw-products",
  adminEmail: "owner@yourdomain.com"
};
```

`adminEmail` is optional, but it makes the admin login easier by pre-filling the owner's email.

## 3. Create tables + security rules

In Supabase Dashboard > **SQL Editor**:

1. Open `supabase-setup.sql` from this website ZIP.
2. Paste it into a new query.
3. Run it once.

This creates the three website data tables, a public product image bucket, RLS rules, and Realtime publication entries.

The important security behavior is:

- visitors can read public products/content
- visitors can create an order
- visitors cannot read the shared order database
- only an explicitly registered admin can manage products, content, images, and orders

## 4. Create the business-owner admin

In Supabase Dashboard > Authentication > Users, create the owner's email/password user.

Then run this in SQL Editor after replacing the email:

```sql
insert into public.ttw_admins (user_id, email)
select id, email
from auth.users
where lower(email) = lower('OWNER_EMAIL_HERE')
on conflict (user_id) do update set email = excluded.email;
```

Only users registered in `ttw_admins` pass the admin RLS policies.

## 5. Upload the website

Upload the revised website files to the same hosting location as `index.html`.

The old Firebase SDK scripts are no longer used. Every HTML page now loads:

- `supabase-config.js`
- Supabase JS v2
- `script.js`

## 6. Migrate existing browser data

Use the SAME browser/device that previously managed Table Tennis Wala, because it may still contain products/orders/content in localStorage even though Firebase test mode expired.

1. Open `admin.html`.
2. Sign in with the Supabase owner account.
3. At the top of the admin page, find **Supabase backend**.
4. Click **Migrate this browser data**.

This pushes the browser's saved admin products, saved orders, and site content into Supabase.

If old records exist only inside Firestore and are not in this browser, they are not deleted by Firebase test-mode expiry. You would need to temporarily restore authorized Firebase access/export those records, then import them separately.

## 7. Test an order

1. Add a product to cart.
2. Complete the checkout form.
3. The current WhatsApp order message still opens as before.
4. In another browser/device, sign in to `admin.html`.
5. The new order should appear under **View orders**.
6. Change its order status to test live updates.

## Razorpay later

The order storage is already Razorpay-ready: the existing checkout code stores `paymentId`, `paymentMode`, amount, items and customer data in the same Supabase order record.

For production Razorpay, do not verify payments only in browser JavaScript. Use a Supabase Edge Function or other server endpoint to create the Razorpay order and verify the Razorpay signature before marking an order paid. Never put a Razorpay key secret or Supabase `service_role` key in browser code.
