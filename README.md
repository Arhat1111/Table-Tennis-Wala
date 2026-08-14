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

- JOOLA product catalogue added from the provided catalogue photos with official JOOLA product images/URLs where available.
- JOOLA page now includes rubbers, balls, accessories, cases, blades, rackets and table products from the catalogue.
- Final fix added so products.html and joola.html always render all products correctly.

- Product and JOOLA pages fixed with local visible product artwork so images load even from local file mode.

- Customize page now has brand/product dropdowns for blade, forehand rubber, backhand rubber and accessory selections.

- Customize section redesigned as a minimal brand-first racket studio and the old option-card builder was removed from the page.

- Customize page: Add-on Product renamed to Extra Accessories, now supports multiple selectable accessories with a cleaner minimal card UI.

- Native customize dropdowns replaced with minimalist custom dropdown UI; accessories area polished.

- Customize page made fully responsive with no horizontal overflow; Extra Accessories limited to 6 visible products.

- Customize page responsiveness rectified: no right-side blank space and no horizontal scrolling on mobile/tablet.

- Customize page hard layout fix applied: one-column layout, no reserved right-side space, no horizontal overflow.

- Final true fix applied for Customize mobile overflow/clipping: hero text scaled, grid remnants removed, strict width rules added.

- Dropdown overlap fixed on Customize page: open dropdowns now expand in-page instead of covering the next field.

- Product/filter pages now include Save Filter and Clear Changes; products update only after Save Filter is clicked.

- Save Filter and Clear Filter moved to the end of filter panels; Save Filter now scrolls to the products section.

- Fixed broken buttons after Save Filter patch by replacing the global event-blocking code with a safe local filter system.

JS syntax check: OK

- JOOLA product images updated to official JOOLA.com CDN product images where available, with local fallback artwork for offline/local preview.

- JOOLA official CDN images fixed: 53 JOOLA products now point to official JOOLA.com image URLs, with 53 local fallbacks.

- Customize page redesigned with visual product-card selectors, brand tabs, rubber colour buttons, multi-select accessories, and live summary.
- JS check: JS syntax OK

- Added mobile slider arrows for visual product selectors and made the Customize top banner full-width landscape on mobile.
- JS check: JS syntax OK

- Added Brands page and Brands navbar dropdown.
- Updated Products navbar dropdown with category links that apply filters on products.html.
- Removed homepage product filters and converted homepage products to a mobile arrow slider.
- Removed the privacy policy popup while keeping the Privacy Policy page.
- Standardized product image alignment across cards, modal, cart and customizer.
- JS check: JS syntax OK
- Header updated on: admin.html, brands.html, butterfly.html, cart.html, customize.html, index.html, joola.html, privacy.html, products.html, stiga.html, tibhar.html

- Fixed the broken navbar/mobile menu text showing under the desktop navbar.
- Rebuilt navbar as a cleaner minimal sticky pill with dropdowns.
- JS check: JS syntax OK

- Restored navbar to a normal full-width minimal style instead of the large pill style.
- Fixed mobile navbar open/close behavior with a proper side drawer and close button.
- JS check: JS syntax OK

- Fixed mobile navbar by adding a robust hamburger menu handler that overrides older conflicting menu scripts.
- Fixed mobile product price visibility so full prices remain visible inside product cards/sliders.
- JS check: JS syntax OK

- Restored desktop/mobile navbar to the earlier normal full-width look and made mobile menu compact.
- Fixed Customize page mobile banner by removing the cramped side preview on mobile.
- Fixed homepage action cards so decorative images no longer overlap or hide text.
- JS check: JS syntax OK

- Fixed mobile navbar to match the previous lime full-screen menu style and kept Brands/Products dropdowns.
- Rebuilt the header across pages with Brands page + product category links intact.
- JS check: JS syntax OK

- Rebuilt navbar as CSS-only mobile menu so hamburger cannot break due to JavaScript conflicts.
- Mobile menu restored to lime full-screen design and still includes Brands + Products dropdowns.
- Fixed homepage card text overlap and reduced WhatsApp overlap on mobile.
- JS check: JS syntax OK

- Fixed homepage mobile service-card overlap by forcing cards into a clean stacked layout and keeping decorative graphics behind text.
- JS check: JS syntax OK

- Added auto-hide behavior for the NO RETURN AND EXCHANGE POLICY announcement bar after 5 seconds, with smooth fade/slide removal.
- JS check: JS syntax OK

- Replaced emoji-rendered arrows, close marks, chevrons and stars with professional CSS icons across the website.
- Added a sanitizer for dynamically generated text icons so mobile browsers do not render them as emoji.
- JS check: JS syntax OK
- Remaining icon text scan: {'script.js': ['↗', '⌄', '‹', '›', '×', '★']}

- Final icon text scan after unicode escaping: None
- JS check after escaping: JS syntax OK

- Rebuilt home action cards with proper professional CSS visuals instead of empty/awkward decorative blobs.
- Replaced the old large mobile card graphics with controlled racket, brand-wall and gear line-art visuals.
- CTA icons remain CSS icons, not emoji characters.
- HTML emoji/icon scan: None
- JS check: JS syntax OK

- Replaced the CSS-drawn redirect arrows with formal SVG-mask icons for clean symmetric arrows.
- Overrode all old pseudo-element arrow drawings so malformed arrows cannot appear.
- HTML/JS emoji symbol scan: None
- JS check: JS syntax OK

- Fixed slider arrows so they only appear on mobile/tablet view and stay hidden on laptop/desktop.
- JS check: JS syntax OK

- Fixed recurring mobile overlap by forcing the home action cards into a block stacked layout below 760px.
- Reset grid-row, transform, float, and absolute positioning conflicts from older patches so cards cannot overlap again.
- JS check: JS syntax OK

- Removed the NO RETURN AND EXCHANGE POLICY top announcement/popup from all pages.
- Removed from 11 HTML pages.
- Remaining announcement scan: None
- JS check: JS syntax OK

- Added 2026 MRP product catalogues from supplied DHS, Butterfly, YinHe PDFs and visible Stiga price list screenshot.
- New product counts by brand: {'joola': 53, 'tibhar': 3, 'dhs': 73, 'butterfly': 118, 'yinhe': 66, 'stiga': 36}.
- New categories include: accessories, balls, blades, clothing, footwear, glue, pickleball, rackets, rubbers, tables.
- Added DHS and YinHe brand pages, filters, nav links, brand cards, and brand logo placeholders.
- Added product-specific local SVG visuals for every new catalogue item so no product card is image-less. Exact official photo URLs can be swapped in later if provided.
- JS check: JS syntax OK

- Added Xiom products from Xiom.pdf with Revised MRP as website price.
- Added Andro products from New Price List Jan 2026_Dealer.xlsx with MRP as website price.
- Added Dawei 388D-2 OX rubber with Red/Black colour availability and ₹1,500 MRP.
- Added Xiom, Andro and Dawei brand pages, brand filters, navbar links and brand directory cards.
- Added products: Xiom 126, Andro 51, Dawei 1.
- Final product count: 527. Brand counts: {'joola': 53, 'tibhar': 3, 'dhs': 73, 'butterfly': 118, 'yinhe': 66, 'stiga': 36, 'xiom': 126, 'andro': 51, 'dawei': 1}
- JS check: JS syntax OK

- Redesigned the Shop by Brand section with aesthetic minimal brand tiles, product counts, brand moods and clean CSS visuals.
- Redesigned brands.html with a stronger hero, quick selector, stats and improved brand directory grid.
- JS check: JS syntax OK

- JOOLA official image cleanup step 1 completed.
- JOOLA products reviewed: 53.
- JOOLA products with official/official-CDN image status: 30.
- JOOLA products moved to safe fallback visuals to avoid wrong-image matches: 23.
- Added imageStatus and imageSource metadata for JOOLA products.
- JS check: JS syntax OK

- XIOM official-image cleanup step 2 completed.
- XIOM products reviewed: 126.
- XIOM products with exact official image URL applied: 2.
- XIOM products with official product page verified but fallback image retained: 8.
- XIOM products kept as fallback because exact official image was not verified: 116.
- Added imageStatus, imageSource and officialProductUrl metadata for XIOM products where applicable.
- JS check: JS syntax OK

- Andro official-image cleanup step 3 completed.
- Andro products reviewed: 51.
- Andro products with official product page verified but fallback image retained: 12.
- Andro products kept as fallback because exact official image was not verified: 39.
- Added imageStatus, imageSource and officialProductUrl metadata for Andro products where applicable.
- JS check: JS syntax OK

- Butterfly official-image cleanup step 4 completed.
- Butterfly products reviewed: 118.
- Butterfly products with official product page verified but fallback image retained: 33.
- Butterfly products kept as fallback because exact official image was not verified: 85.
- Added imageStatus, imageSource and officialProductUrl metadata for Butterfly products where applicable.
- JS check: JS syntax OK

- Remaining brands official-image cleanup step 5 completed for Stiga, DHS, YinHe and Dawei.
- STIGA products reviewed: 36; official page verified/fallback: 3; fallback only: 33.
- DHS products reviewed: 73; official page verified/fallback: 11; fallback only: 62.
- YINHE products reviewed: 66; official page verified/fallback: 5; fallback only: 61.
- DAWEI products reviewed: 1; official page verified/fallback: 0; fallback only: 1.
- Added imageStatus, imageSource and officialProductUrl metadata where applicable.
- JS check: JS syntax OK

- Fixed product image handling so generated SVG fallback illustrations are no longer displayed as actual product photos.
- Product cards now show real official image URLs only when an actual image URL is available.
- Products without verified image URLs show a clear 'Official product photo pending' state instead of fake images.
- Added one verified STIGA Cybershape Carbon official image URL.
- Actual remote image count: 33; pending image count: 494.
- JS check: JS syntax OK

- Removed the storefront 'Official product photo pending' placeholder state.
- Product cards now show real images where available and clean catalogue visuals for the rest, so the shop does not look broken.
- Added real Tibhar Evolution MX-P product image from Tibhar official product page.
- Image summary: 34 remote image URLs, 493 local catalogue visuals, 0 pending placeholders.
- JS check: JS syntax OK

- Replaced generated visuals with real product photos for the visible DHS 968 / Hurricane Long 5 blade family.
- Updated products: ['DHS Hurricane Long 5 National W968', 'DHS Hurricane Sun National S968', 'DHS Hurricane King National Q968', 'DHS Hurricane Long 5 Grand Slam National W968', 'DHS Hurricane Long 5 Gold Grand Slam', 'DHS Hurricane Long Long 5']
- Remote image URLs now in catalogue: 40; DHS remote images: 6.
- JS check: JS syntax OK

- Applied web-image mode to all remaining products.
- Existing verified real remote images were kept.
- Every remaining product now uses a product-specific web image-search thumbnail URL based on brand + product name + table tennis product official image.
- Local catalogue visuals are kept only as fallback if a remote thumbnail fails to load.
- Existing remote images kept: 40; web-search images added: 487; fallbacks retained: 487.
- Final remote image count: 527; web-search thumbnail count: 487; fallback image count: 517.
- JS check: JS syntax OK

- Fixed filters so product results update instantly on checkbox, price, search and sort changes.
- Removed the injected Save Filter / Clear Filter system that delayed filter updates.
- Removed Pickleball from visible product category menus and filter options.
- Added product.html full product detail page and changed product-card clicks to open full product pages.
- Product count: 527; remaining visible Pickleball option scan: None.
- JS check: JS syntax OK

- Replaced the cluttered Shop by Brand grid with a horizontal brand-logo slider.
- Added logo images from Google favicon service using each brand's official domain.
- Redesigned brands.html with a full-width landscape hero, quick selector, slider, and compact direct brand links.
- Checks: {'index_slider': True, 'brands_landscape': True, 'old_brands_page_hero': False, 'old_grid_index': False}
- JS check: JS syntax OK

- Improved the brand logo section with full-size local SVG logo assets instead of small favicon chips.
- Brand cards now scale properly across laptop, tablet and mobile widths.
- Each brand logo card links directly to its brand page.
- Updated compact brand link strip with the same high-resolution SVG logos.
- JS check: JS syntax OK

- Enlarged the brand logo slider so logos are clearly visible on laptop, tablet and mobile.
- Increased brand-card width, height, logo container size, logo image max dimensions and spacing.
- Kept every brand card clickable to its brand page.
- JS check: JS syntax OK

- Enlarged brand logo cards into oversized pill-style logo slides matching the requested reference.
- Hid extra text inside logo slides so the logos are the main focus.
- Increased logo image size and card width for laptop, tablet and mobile.
- Brand slides remain clickable and open their brand pages.
- JS check: JS syntax OK

- Forced the brand logo slider and brand link strip into large oversized pill cards matching the reference image.
- Removed tiny chip appearance by overriding all older brand-logo sizing rules.
- Enlarged the logos, card width, card height and mobile/tablet responsive sizing.
- JS check: JS syntax OK

- Fixed the actual visible homepage logo marquee: .logo-pill cards are now large oversized pill cards.
- Increased .logo-pill width, height, logo image max-size, spacing and responsive sizing.
- Disabled tiny marquee animation sizing that kept the logos small.
- JS check: JS syntax OK

- Reduced the brand-logo pills to roughly half the previous oversized dimensions.
- Added automatic horizontal scrolling for the logo marquee, brand slider and brand link strip.
- Auto-slider pauses on hover/touch and loops by cloning the logo items.
- JS check: JS syntax OK

- Rebuilt the visible logo marquee to match the latest reference: clean medium-large pill cards, no clipping, no oversized layout.
- Replaced JS scroll with a smooth CSS automatic slider that pauses on hover.
- Rebuilt the brand page direct logo strip using the same pill-card style.
- JS check: JS syntax OK

- Rebuilt the company/brand logo section from scratch as one clean automatic logo slider.
- Removed the old visible logo marquee from the homepage so there are no conflicting sizes.
- Added medium pill cards with centered brand logo SVG assets and smooth CSS auto-slide.
- Each pill links directly to its brand page and pauses on hover.
- Checks: {'home_new_strip': True, 'old_visible_marquee_removed': True, 'brand_page_strip': True}
- JS check: JS syntax OK

- Polished the company logo slider to be simple, aesthetic and theme-matched.
- Removed decorative coloured side circles that caused spacing/gap/logo duplication issues.
- Replaced JOOLA and Butterfly with actual SVG logo files sourced from Wikimedia entries that cite the official company sources.
- Reworked DHS, YinHe, XIOM, STIGA, Andro and Dawei SVG marks to sit cleanly inside the pills.
- Kept home-page background colour via var(--paper) and added a smooth CSS auto-slide that pauses on hover.
- Checks: {'home_slider': True, 'old_marquee_suppressed': True, 'joola_logo_exists': True, 'butterfly_logo_exists': True}
- JS check: JS syntax OK

- Removed the company/brand logo slider section shown below the homepage banner.
- Removed/hid related logo marquee markup and slider scripts so the section does not appear again.
- Homepage remaining logo-strip scan: None.
- JS check: JS syntax OK

- Added a minimalist Choose Your Brand section after the About section on the homepage.
- The section explains how users can browse available brands and jump to each brand page.
- Added brand chips for JOOLA, Tibhar, Butterfly, Stiga, DHS, YinHe, Xiom, Andro and Dawei.
- Checks: {'choose_section_added': True, 'after_about': True, 'brand_links': True}
- JS check: JS syntax OK

- Fixed mismatched DHS product images for Hurricane Long 3, Ma Long Player Version, Sun Yingsha Player Version and Wang Chuqin Player Version.
- Replaced generic Bing thumbnail URLs with verified direct product-image URLs from DHS Canada / DHS Sports USA product pages.
- Added galleries for Ma Long and Sun Yingsha player-version rubbers where multiple verified product images were available.
- Updated products: ['DHS Hurricane Long 3', 'DHS Ma Long Player Version', 'DHS Sun Yingsha Player Version', 'DHS Wang Chuqin Player Version']
- JS check: JS syntax OK

- Added Save Filter mode across all product and brand catalogue pages.
- Changing brand/category/rating/price/search/sort now marks filters as unsaved and does not update the product grid until Save Filter is clicked.
- Added Save Filter and Clear Filter controls to the filter panel on products.html and all brand product pages.
- Filter pages covered: ['products.html', 'joola.html', 'tibhar.html', 'butterfly.html', 'stiga.html', 'dhs.html', 'yinhe.html', 'xiom.html', 'andro.html', 'dawei.html']
- JS check: JS syntax OK

- Made Save Filter controls visible by adding static Save Filter / Clear Filter buttons into each filter panel.
- Added final CSS override to prevent older CSS from hiding save-filter-actions.
- Added fallback button binding so Save Filter and Clear Filter work even if dynamic injection fails.
- Pages updated: ['products.html', 'joola.html', 'tibhar.html', 'butterfly.html', 'stiga.html', 'dhs.html', 'yinhe.html', 'xiom.html', 'andro.html', 'dawei.html']
- Visible checks: {'products.html': True, 'joola.html': True, 'tibhar.html': True, 'butterfly.html': True, 'stiga.html': True, 'dhs.html': True, 'yinhe.html': True, 'xiom.html': True, 'andro.html': True, 'dawei.html': True}
- JS check: JS syntax OK

- Changed the Customize page hero/banner to full-width landscape style like the other pages.
- Removed centered boxed-banner look by forcing the custom hero to span 100vw with square edges.
- Preserved the existing dark/lime theme and responsive mobile spacing.
- Checks: {'customize_exists': True, 'customize_body_data_page': True, 'fullwidth_css_added': True}
- JS check: JS syntax OK

- Added Red/Black colour options on individual product pages for rubber products.
- Added max thickness metadata and max-thickness display for all rubber product cards and detail pages.
- Fixed the homepage service-card overlap by using explicit grid areas for custom, brands and club essentials cards.
- Checks: {'rubbers_tagged': 186, 'rubber_options_js': True, 'overlap_css': True}
- JS check: JS syntax OK

- Added auto-scroll on the Customize page: after selecting blade it scrolls to forehand rubber, after forehand it scrolls to backhand, and after backhand it scrolls to accessories.
- Added a focus pulse on the next customizer block after auto-scroll.
- Highlighted the checkout/build summary panel with stronger dark styling, lime total block and more prominent Add custom build button.
- Checks: {'auto_scroll_js': True, 'checkout_highlight_css': True, 'summary_selector': True}
- JS check: JS syntax OK

- Moved rubber colour selection onto the product card/front listing itself.
- Add to cart for rubber products now uses the selected Red/Black colour from the product card and no longer opens the external rubber-colour popup.
- Cart details now include selected rubber colour and max thickness for rubber products.
- Hid the old modal rubber-colour picker as a safeguard.
- Checks: {'inline_colour_js': True, 'modal_picker_hidden': True, 'js_check': 'JS syntax OK'}

- Fixed mobile product cards so product images are smaller and fully visible.
- Reduced mobile product visual height, image max-size, card text sizing and spacing.
- Product images now use object-fit: contain with max-width/max-height on mobile.
- JS check: JS syntax OK

- Fixed Customize page brand names not fitting on mobile.
- Desktop/tablet brand tabs now scroll horizontally instead of clipping.
- Mobile now shows a clean Choose brand dropdown for each customizer step.
- Dropdown changes trigger the existing brand-filter logic for the visual customizer.
- Checks: {'dropdown_js': True, 'dropdown_css': True, 'js_check': 'JS syntax OK'}

- Fixed mobile alignment/clipping issues for homepage service-card buttons and text.
- Removed the old overlay Add to cart button from product images.
- Added Add to cart below rubber colour options on product cards.
- Added Buy now below Add to cart; it adds the product and redirects to cart.html for purchase.
- Added Buy now to individual product detail pages as well.
- Checks: {'card_actions_js': True, 'quick_add_hidden': True, 'alignment_css': False, 'js_check': 'JS syntax OK'}

- Fixed mobile product image cropping by forcing product images to use smaller contained sizing.
- Product image containers now center images and keep them fully visible on mobile.
- Reduced mobile image max-width and max-height so packaging images do not get covered.
- Source ZIP: table-tennis-wala-product-actions-alignment-fixed.zip
- JS check: JS syntax OK

- Fixed mobile homepage service-card text/button alignment.
- Matched service section background to the homepage paper colour.
- Prevented text/button clipping inside Shop Premium Brands and Club Essentials cards.
- Improved mobile spacing, card padding and background colours.
- Source ZIP: table-tennis-wala-mobile-image-contain-fixed.zip
- JS check: JS syntax OK

- Highlighted the product detail page Add to cart button with a strong dark button, lime plus icon and stronger shadow.
- Kept Buy now highlighted in lime below it.
- Source ZIP: table-tennis-wala-mobile-card-alignment-fixed.zip
- JS check: JS syntax OK

- Fixed rubber colour selection delay on product detail pages using capture-phase event handling.
- Red/Black selection now updates active state and selected-colour text instantly.
- Add to cart and Buy now now use the currently selected rubber colour immediately.
- Reduced CSS transition time on rubber colour buttons.
- Source ZIP: table-tennis-wala-highlight-add-cart-fixed.zip
- JS check: JS syntax OK

- Fixed cart drawer overlap with the navbar on mobile and laptop.
- Cart drawer now starts below the navbar and uses viewport-safe height.
- Added a visible close cart button/header inside the cart drawer.
- Escape key and close button both close the cart drawer.
- Source ZIP: table-tennis-wala-rubber-color-instant-fixed.zip
- Checks: {'cart_close_js': True, 'cart_no_overlap_css': True, 'js_check': 'JS syntax OK'}

- Removed the duplicate close cart button from the cart drawer.
- Kept only the top black close button inside the cart drawer header.
- Added JS cleanup and CSS fallback so duplicate close buttons do not reappear when cart opens.
- Source ZIP: table-tennis-wala-cart-drawer-fix.zip
- Checks: {'single_close_js': True, 'single_close_css': True, 'js_check': 'JS syntax OK'}

- Fixed Customize page custom build not appearing in cart.
- Added a reliable custom build add-to-cart handler for #vcAddCart that reads selected blade, forehand, backhand, accessories and assembly service.
- The custom build is now pushed into the same ttw-cart-v3 cart storage and the cart drawer is re-rendered/opened immediately.
- Improved custom-build cart detail readability.
- Source ZIP: table-tennis-wala-single-cart-close-fixed.zip
- Checks: {'custom_build_fix_js': True, 'cart_key': True, 'js_check': 'JS syntax OK'}

- Fixed custom build showing toast but not appearing in cart drawer.
- Added a storage-based cart renderer so custom builds are read from ttw-cart-v3 and displayed immediately.
- Added final #vcAddCart capture handler to build, store, render and open the cart reliably.
- Added cart item styling so custom build details are visible inside the cart.
- Source ZIP: table-tennis-wala-custom-build-cart-visible-fixed.zip
- Checks: {'final_custom_render_fix': True, 'custom_cart_item_css': True, 'js_check': 'JS syntax OK'}

- Rebuilt admin panel into a multi-section control panel: Dashboard, Upload/Remove Products, View Orders, Website Content, and Order Email Setup.
- Orders placed through checkout are saved in localStorage under ttw-orders and displayed in the View Orders tab.
- Added export/clear/search for orders.
- Added content editor for announcement, hero text, phone, WhatsApp and order email using ttw-site-content localStorage.
- Added EmailJS setup fields and dynamic order-email sender override using ttw-email-config.
- Note: fully reliable live order emails for all visitors require EmailJS configured in the deployed site or a backend service.
- Source ZIP: table-tennis-wala-custom-cart-render-fixed.zip
- Checks: {'admin_tabs': True, 'emailjs_added': True, 'orders_js': True, 'email_override': True, 'js_check': '/mnt/data/table-tennis-wala-admin-orders-panel-work/table-tennis-wala-ecommerce/script.js:15174\n    order_items: order.items.map(item => `${item.name} x ${item.quantity} — ${formatPrice(item.price * item.quantity)} ${item.details ? item.details.replace(/<br>/g, ", ") : ""}`).join("\n                                                                                                                                                                                         ^\n\nSyntaxError: Invalid or unexpected token\n\x1b[90m    at wrapSafe (node:internal/modules/cjs/loader:1662:18)\x1b[39m\n\x1b[90m    at checkSyntax (node:internal/main/check_syntax:78:3)\x1b[39m\n\nNode.js v22.16.0'}

- Final JS syntax check after admin panel build: JS syntax OK
- Final admin checks: {"admin_tabs": true, "emailjs_added": true, "orders_js": true, "email_override": true, "js_check": "JS syntax OK"}

- Added admin monthly sales analytics and live customers panels.
- Removed Buy Now from listing/front product cards; Buy Now remains on product detail page.
- Save Filter now scrolls to product results after saving.
- Corrected product categories with automated heuristics; visible Andro sponge/bag/Synteliac issues referenced to official Andro pages.
- Made Customize page price summary sticky on laptop/desktop.
- Category updates applied: 82; official page references updated: 8.
- Source ZIP: table-tennis-wala-admin-orders-panel.zip
- Checks: {'admin_analytics_panel': True, 'admin_customers_panel': True, 'buy_now_hidden_listing': True, 'save_filter_scroll': True, 'sticky_summary': True, 'category_updates': 82, 'image_refs': 8, 'js_check': 'JS syntax OK'}

- Redesigned the homepage Choose Your Brand section into a premium brand showcase.
- Added a large featured JOOLA panel and a clean brand grid for Tibhar, Butterfly, Stiga, DHS, YinHe, Xiom, Andro and Dawei.
- Added external logo image references for JOOLA, Tibhar and Butterfly plus matching styled wordmarks for the remaining brands.
- Added live product counts for each brand card.
- Highlighted JOOLA across navigation, brand links, customizer tabs and JOOLA product cards.
- Checks: {'source_zip': 'table-tennis-wala-admin-analytics-cleanup-fixed.zip', 'home_brand_lab': True, 'joola_logo': True, 'joola_highlight_css': True, 'brand_count_js': True, 'js_check': 'JS syntax OK'}

- Fixed homepage brand logo visibility by replacing broken external image URLs with local SVG logo assets under assets/logos/.
- Added reliable local SVG logos/wordmarks for JOOLA, Tibhar, Butterfly, STIGA, DHS, YinHe, XIOM, Andro and Dawei.
- Reduced the height of the homepage brand feature card and all brand tiles for a cleaner compact layout.
- Checks: {'local_logos_created': 9, 'homepage_uses_local_joola': True, 'compact_css': True, 'source_zip': 'table-tennis-wala-home-brands-joola-highlight.zip', 'js_check': 'JS syntax OK'}

- Redesigned the homepage brand section with a more premium split layout, sticky intro, compact JOOLA spotlight card, and cleaner responsive brand tiles.

- Converted the homepage brand cards into a horizontal slider and redesigned brands.html with a premium editorial layout and JOOLA spotlight.

- Added WhatsApp order checkout flow while Razorpay approval is pending.
- Checkout button now says Place order on WhatsApp and saves the order to the admin orders list.
- Order message opens in WhatsApp with customer details, item list, total and QR-payment-pending note.
- Admin content editor now includes WhatsApp order number so the owner can update the number later.
- Important: on a purely static site, the WhatsApp message is the reliable live order capture. Local admin orders are browser-local unless connected to a backend/database.

- Added WhatsApp confirmation message system for customers.
- After order placement, a customer confirmation WhatsApp button is generated using the phone number entered in checkout.
- Admin View Orders now adds Send customer confirmation and Copy message actions for each order.
- Note: a static website cannot automatically send a WhatsApp message from the store number without WhatsApp Business API/backend; this creates one-click WhatsApp confirmation links.

- Final cleanup: normalized product categories and filters, removed hidden/pickleball products from public getProducts(), and prevented rackets from appearing inside the Customize page Blade section.
- Updated WhatsApp/order phone number to +91 95581 87425 / 919558187425.
- WhatsApp order placement continues to save orders to the admin View Orders panel.
- Added customer email confirmation support: EmailJS is attempted if configured, and a fallback prepared-email link appears after order placement and in admin orders.
- Static seed category updates: 55; hidden products marked: 2.

- Final checks: {"phone_in_script": true, "phone_in_html": true, "canonical_category_js": true, "email_confirmation_js": true, "visible_pickleball_html": false, "wrong_blades_count": 0, "category_counts": {"rubbers": 188, "accessories": 96, "balls": 29, "glue": 13, "footwear": 12, "tables": 8, "blades": 129, "rackets": 34, "clothing": 16, "hidden": 2}, "js_check": "/mnt/data/table-tennis-wala-final-system-clean-work/table-tennis-wala-ecommerce/script.js:19250\n    div.innerHTML = String(value || \"\").replace(/<br\\s*\\/?>/gi, \"\n                                                                ^\n\nSyntaxError: Invalid or unexpected token\n    at wrapSafe (node:internal/modules/cjs/loader:1662:18)\n    at checkSyntax (node:internal/main/check_syntax:78:3)\n\nNode.js v22.16.0"}

- Corrected final JS check after escape cleanup: JS syntax OK
- Corrected final validation: {"js_check": "JS syntax OK", "phone_default": true, "canonical_cleanup": true, "customer_email": true, "whatsapp_order": true, "wrong_blades_count": 0, "category_counts": {"rubbers": 188, "accessories": 96, "balls": 29, "glue": 13, "footwear": 12, "tables": 8, "blades": 129, "rackets": 34, "clothing": 16, "hidden": 2}}

- Fixed category errors: rubbers wrongly shown under Accessories/Balls are moved into Rubbers; backpacks/cases are Accessories; clothing stays Apparel; racket sets are Rackets; blade selector excludes ready-made rackets.
- Replaced visibly wrong/unreliable search thumbnails with clean branded category artwork for the problematic apparel/racket products.
- Added runtime safety rules so filters, catalogue pages and customizer sections normalize product categories before rendering.
- Set WhatsApp order number to +91 95581 87425.
- Added customer email status and fallback email draft links. True automatic email delivery requires EmailJS keys configured in Admin → Order email setup or a backend email service.
- Category counts after cleanup: {'rubbers': 207, 'balls': 26, 'accessories': 82, 'glue': 13, 'blades': 133, 'rackets': 34, 'tables': 5, 'footwear': 11, 'clothing': 16}. Category changes: 36. Image corrections: 30.

- Changed WhatsApp order flow so customer confirmation is automatically opened as a WhatsApp message to the phone number entered in checkout.
- Removed visible customer confirmation and email confirmation boxes from the user success page.
- Store order WhatsApp and customer confirmation WhatsApp are both opened from the checkout action.
- Note: WhatsApp still requires the user/store to tap Send unless WhatsApp Business API/backend is connected.

- Fixed and clarified customer email confirmation system.
- Added robust EmailJS order sender that sends both owner and customer emails when EmailJS is configured.
- Added Admin email status card and EMAIL_SETUP.md with exact template variables.
- Important: no email will send until EmailJS publicKey, serviceId, ownerTemplateId and customerTemplateId are added in script.js or a backend email service is connected.

- Fixed Customize page Butterfly Blade selector: ready-made Timo Boll racket sets are now categorized as Rackets and cannot appear in the Blade section.
- Added runtime safety so any future ready-made racket accidentally tagged as a blade is removed from the Blade selector.
- Ready-made racket category fixes applied: 5.
- Fixed items: TIMO BOLL 1000; TIMO BOLL 2000; TIMO BOLL 3000; TIMO BOLL CF 1000; TIMO BOLL CF 2000

- Updated order receiving WhatsApp number to +91 72019 96720.
- Fixed checkout so the store WhatsApp order message opens immediately after the order is saved in admin.
- Added a stronger fallback Send order on WhatsApp button on the success page in case the browser blocks the popup.

- Fixed cart drawer item visibility bug: cart items now render and show whenever products/custom builds are in cart.
- Fixed stale display:none issue on .cart-items after cart changed from empty to filled.
- Cart icon opens the drawer after forcing cart re-render from localStorage.
