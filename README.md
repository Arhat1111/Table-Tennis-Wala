# Table Tennis Wala Ecommerce Website

This website includes a complete static ecommerce frontend for a table tennis store.

## Included pages

- `index.html` — public homepage
- `joola.html` — JOOLA product page
- `tibhar.html` — Tibhar product page
- `butterfly.html` — Butterfly product page
- `stiga.html` — Stiga product page
- `customize.html` — custom racket builder with varied pricing and rubber colours
- `cart.html` — cart and checkout page with customer details form and Razorpay checkout workflow
- `admin.html` — hidden/direct admin product upload panel with login

## Main updates

- Brand name changed to **Table Tennis Wala**
- Admin panel removed from public navigation
- Admin page requires login
- Product cards open a product detail popup
- Rubber products show colour choices before adding to cart
- Cart drawer connects to a full checkout page
- Checkout page collects name, email, phone, address, city, state, pincode and notes
- Razorpay checkout integration is included
- Order details are saved locally after payment/demo payment
- Email workflow is prepared through EmailJS or backend integration

## Admin login

Open `admin.html` directly.

Demo credentials:

- Username: `admin`
- Password: `ttwala123`

## Razorpay setup

Open `script.js` and replace:

```js
const RAZORPAY_KEY_ID = "rzp_test_REPLACE_WITH_YOUR_KEY_ID";
```

with your actual Razorpay Test or Live Key ID.

For a production store, use a backend to create Razorpay order IDs and verify payment signatures.

## Email setup

The static site includes EmailJS placeholders in `script.js`:

```js
const EMAILJS_CONFIG = {
  publicKey: "",
  serviceId: "",
  ownerTemplateId: "",
  customerTemplateId: ""
};
```

Fill these values to send automatic emails to the store owner and customer after payment.

Without EmailJS/backend configuration, the order success message includes a `mailto:` button to send the order details to the store email manually.

## Important static-site note

Product uploads and order records use browser `localStorage`, which works on the same device/browser. For a real live client website, connect the same UI to Firebase, Supabase, Shopify, WooCommerce, Google Sheets API or a custom backend.


## Latest update
- Homepage Top Picks now has filters for brand, category, price, rating, search and sorting.
- Navbar now has a Products dropdown with All Products, JOOLA, Tibhar, Butterfly and Stiga.
- Added `products.html` as the complete product catalogue page.


Latest changes:
- Homepage product section now shows a limited two-row preview with a View more products button linking to products.html.
- Mobile navbar now includes a Products dropdown with All Products, JOOLA, Tibhar, Butterfly and Stiga links.

- Scrolling clickable brand logo section added after homepage banner.

- Updated homepage logo marquee to image-only clickable brand logos.
- Product popup rubber colour selection is now limited to Red and Black.

- `about.html` — About us page added.
- Customize page now includes optional add-on products such as edge tape, racket case, cleaner, ball pack and grip tape.

- About Us section added on the homepage below the brand logo slider; no separate about page is used.


## Final included features

- Full responsive ecommerce website
- Table Tennis Wala branding
- Homepage banner
- Brand logo slider
- Minimal About section on homepage
- Products dropdown in desktop and mobile navbar
- Complete products page
- Separate JOOLA, Tibhar, Butterfly and Stiga pages
- Product filters
- Product popups
- Rubber red/black colour choice
- Custom racket builder
- Add-on products in customize section
- Cart page with customer details form
- Razorpay placeholder integration
- Admin panel with login
- Product upload/edit/delete panel using browser localStorage
- Top strip changed to: NO RETURN AND EXCHANGE POLICY
- Privacy Policy page
- Privacy policy popup on website open
- Floating WhatsApp free consultation button

Admin login:
Username: admin
Password: ttwala123

Replace the Razorpay key and WhatsApp number before publishing.

- Final polished privacy policy page added with consistent navbar and footer across all pages.

- Privacy policy popup is shown only on the homepage.

- Customize page rubber colour selection moved into the forehand/backhand rubber sections as red/black filters.

- Mobile Products dropdown text size fixed and dropdown made functional/clear.

- Mobile navbar font sizes made consistent and Products dropdown redesigned with a minimalist aesthetic.

- Mobile navbar font size reduced slightly for cleaner spacing.
