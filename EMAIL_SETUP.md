# Table Tennis Wala — automatic email setup

WhatsApp orders work immediately, but automatic emails cannot be sent by a static website unless an email service is configured.

## What you need

Create an EmailJS account and add:

1. An email service.
2. An owner order template.
3. A customer confirmation template.

Then paste the values into `script.js`:

```js
const EMAILJS_CONFIG = {
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  ownerTemplateId: "YOUR_OWNER_ORDER_TEMPLATE_ID",
  customerTemplateId: "YOUR_CUSTOMER_CONFIRMATION_TEMPLATE_ID",
  ownerEmail: "your-order-email@example.com"
};
```

## Template variables

Use these variable names in both EmailJS templates:

- `to_email`
- `store_email`
- `owner_email`
- `customer_name`
- `customer_email`
- `customer_phone`
- `customer_address`
- `customer_notes`
- `order_id`
- `order_total`
- `payment_id`
- `payment_mode`
- `payment_status`
- `order_channel`
- `order_items`
- `order_date`
- `message`

## Important

The Admin → Order email setup form saves credentials in browser localStorage. That is useful for local testing, but it does not automatically publish the credentials to every customer’s browser. For a live static website, put the EmailJS values directly into `script.js` before hosting, or use a backend email service.
