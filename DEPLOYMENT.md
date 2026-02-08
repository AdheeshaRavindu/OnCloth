# Deployment Guide (Hosting-Agnostic)

This guide describes how to deploy the onCloth project to any static hosting or server environment.

## Prerequisites

- A deployment environment that can serve static files (HTML/CSS/JS)
- A domain or URL (optional during testing)
- A payment provider endpoint configured in `js/checkout.js`

## Step 1: Prepare the Build

1. Confirm all HTML, CSS, and JS files are present.
2. If you want to use image assets, keep `/images/` in place.
3. Update placeholder domains and emails in the HTML files.

## Step 2: Deploy the Files

1. Upload or sync the project root to your web root.
2. Preserve folder structure:
   - `/css/`
   - `/js/`
   - `/images/`
3. Verify the site loads from your URL.

## Step 3: Configure Payments

1. Set your checkout endpoint in `js/checkout.js`.
2. Add the endpoint to the CSP `connect-src` directive in `checkout.html`.
3. Configure success and cancel URLs with your payment provider.

## Step 4: Test the Site

- Navigate through all pages
- Add an item to the cart
- Complete a test payment
- Confirm the success page shows order details

## Troubleshooting

**Images not loading**
- Check file paths in `js/products.js`
- Verify `/images/` is deployed

**Checkout fails**
- Verify your endpoint is reachable
- Check browser console for errors
- Confirm CSP allows your endpoint

**Styles missing**
- Verify `/css/` is deployed and accessible

---

If you need provider-specific steps, follow your hosting platform's deployment docs and map them to the file structure above.
