# onCloth - On-Chain Clothing Store

A clean, framework-free ecommerce frontend for on-chain clothing. Built with pure HTML, CSS, and vanilla JavaScript

**Live Demo**: https://adheesharavindu.github.io/OnCloth/shop.html

## 🎯 Features

- **Product Catalog**: 12 sample apparel items with size and color variants
- **Shopping Cart**: LocalStorage-based cart with quantity management
- **Variant Selection**: Size selection with color options (hidden when only one color)
- **Secure Checkout**: Input sanitization, XSS prevention, CSP headers
- **Crypto Checkout Integration**: Connect to your preferred on-chain payment provider
- **Coinbase Commerce Support**: Can be integrated via the checkout endpoint
- **Serverless-Friendly**: Works with any backend endpoint that creates checkout sessions
- **Worldwide Shipping**: Flat-rate shipping ($10 Asia, $20 other regions)
- **Mobile-First Design**: Fully responsive across all devices
- **Guest Checkout**: No user accounts required
- **SEO Optimized**: Proper meta tags and Open Graph tags
- **Email-Based Order Tracking**: Customers receive order confirmation and shipping details via email
- **Cart Highlight**: Cart link glows when items are present
- **Reusable by Design**: Easy to fork and rebrand for any apparel line

## 📁 Project Structure

```
/
├── shop.html               # Homepage / Product catalog
├── product.html            # Individual product page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout form (on-chain payment)
├── success.html            # Order confirmation
├── cancel.html             # Payment cancelled
├── size-guide.html         # Size guide
├── shipping.html           # Shipping information
├── returns.html            # Returns policy
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── index.html              # Legacy (shop.html is the homepage)
├── css/
│   ├── reset.css           # CSS reset
│   └── main.css            # Main stylesheet
├── js/
│   ├── security.js         # Security utilities
│   ├── utils.js            # Helper functions
│   ├── products.js         # Product catalog
│   ├── cart.js             # Cart management
│   └── checkout.js         # Checkout logic + payment endpoint integration
└── images/                 # Product images (optional, see products.js)
```

## 🚀 Deployment (Hosting-Agnostic)

### Step 1: Upload Static Files

1. **Choose a deployment environment** (any static hosting, server, or CDN).
2. **Copy the project root contents** to your web root.
3. **Preserve the folder structure**:
   - `/css/` for styles
   - `/js/` for scripts
   - `/images/` for assets (optional to use)
4. **Verify static file serving** is enabled for HTML, CSS, JS, and images.

### Step 2: Add Product Images (Optional)

1. Product images are already in `/images/`
2. To use them on the site, replace the `generateImage(...)` entries in `js/products.js` with file paths like `images/classic-black-1.jpg`
3. Keep filenames exactly as listed in `/images/`:
   - `classic-black-1.jpg`, `classic-black-2.jpg`, etc.
   - `grey-hoodie-1.jpg`, `grey-hoodie-2.jpg`, etc.
   - (See products.js for full list)

### Step 3: Configure Payments

1. **Set your checkout endpoint** in `js/checkout.js` (the endpoint should return a checkout URL).
2. **Allow your endpoint in CSP** by updating the `connect-src` directive in `checkout.html`.
3. **Configure success and cancel URLs** in your payment provider settings.
4. **Test a small payment** end-to-end.

### Step 4: Update Contact Details

1. Replace support/order emails in the HTML pages.
2. Update any branding text to match your project.

### Step 5: Configure Domain and HTTPS

1. **Point your domain** to your deployment environment.
2. **Enable HTTPS** and verify there are no mixed-content warnings.

### Step 5: Test Your Website

1. **Test all pages**:
   - Navigate through all pages
   - Check responsive design on mobile
   - Verify all links work

2. **Test shopping flow**:
   - Add items to cart
   - Proceed to checkout
   - Fill out shipping form
   - Test an on-chain payment (use a small amount first)
   - Verify success page displays order details

3. **Verify payment integration**:
   - Test with a small payment
   - Verify order data is saved to localStorage
   - Check the success page shows correct order info

## 🔧 Configuration

### Payment Flow

The site uses an **on-chain checkout** flow:
1. Customer fills out shipping information
2. Clicks "Pay with Crypto" button (label text)
3. Frontend calls your checkout endpoint with order data
4. Endpoint creates a payment session with your provider
5. Customer is redirected to the provider checkout
6. Customer completes payment
7. Redirected to success.html with order confirmation

### Email Configuration

Update support and order contact emails in the HTML pages to match your domain.

### Shipping Rates

To modify shipping rates:
1. Open `js/utils.js`
2. Find the `calculateShipping()` function
3. Modify the rates or add/remove regions

### Product Catalog

To add/edit products:
1. Open `js/products.js`
2. Add or modify product objects in the `catalog` array
3. Upload corresponding product images to `/images/` folder

Product object structure:
```javascript
{
    id: 'product-id',
    name: 'Product Name',
    description: 'Product description',
    price: 49.99,
    images: ['images/image1.jpg', 'images/image2.jpg'],
    variants: {
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Color1', 'Color2']
    },
    active: true,
    fabric: 'Fabric composition',
    fit: 'Fit type',
    care: 'Care instructions'
}
```

## 🔒 Security Features

- **Content Security Policy (CSP)**: Meta-tag CSP configured for inline scripts and a configurable checkout endpoint
- **Input Sanitization**: All user inputs are sanitized
- **Output Escaping**: All dynamic content is escaped
- **LocalStorage Validation**: Cart data is validated before use
- **Inline Script Support**: Page-level scripts are inline, CSP allows `unsafe-inline`
- **HTTPS Only**: SSL certificate required for production
- **Payment Security**: No payment data stored on frontend; handled by your payment provider
- **Backend Payment Processing**: Keep API keys on the backend endpoint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Maintenance

### Updating Products

1. Edit `js/products.js`
2. Upload new product images to `/images/`
3. Redeploy your static files

### Updating Content

1. Edit HTML files locally
2. Redeploy updated files
3. Clear browser cache if needed

### Monitoring Orders

1. **Payment Provider Dashboard**: View on-chain payments and order details
2. **Email Notifications**: Receive payment confirmations at your configured email
3. **Customer Data**: Stored in localStorage on success page (customer should screenshot/save)
4. **Order Tracking**: Maintain spreadsheet or use order management system

## 📊 Order Fulfillment Workflow

1. **Receive Payment Notification**: Email from your payment provider
2. **Verify Order Details**: Check payment in provider dashboard
3. **Retrieve Customer Info**: Customer saves order details from success page
4. **Fulfill Apparel**: Prepare items with correct size/color
5. **Ship Order**: Use preferred courier service
6. **Send Tracking**: Email customer with tracking number
7. **Update Records**: Mark order as fulfilled in your system

## 🐛 Troubleshooting

### Cart Not Saving
- Check browser localStorage is enabled
- Clear browser cache and cookies
- Verify browser is not in private/incognito mode

### Payment Not Working
- Verify your checkout endpoint is accessible
- Check SSL certificate is installed and valid
- Test with small payment first
- Check browser console for errors
- Ensure your payment provider account is active

### Images Not Loading
- Verify image paths match product.js references
- Check file permissions (644 for files)
- Ensure images are uploaded to correct `/images/` folder
- Check image file names for typos

### Styling Issues
- Clear browser cache
- Verify CSS files are uploaded correctly
- Check file paths are correct
- Test in different browsers

## 📧 Support & Contact

- **Customer Support**: support@yourdomain.example
- **Order Questions**: orders@yourdomain.example
- **Website**: https://yourdomain.example

## 📄 License

This is a complete production system. Customize as needed for your business.

## ✅ Pre-Launch Checklist

- [x] Upload all files to your web root
- [x] Add or connect product images (optional if using generated placeholders)
- [x] Configure your payment provider endpoint
- [x] Enable SSL certificate
- [x] Update all email addresses (support@yourdomain.example, orders@yourdomain.example)
- [x] Update domain references (yourdomain.example)
- [x] Set shop.html as homepage
- [x] Remove card payment options
- [ ] Test all pages
- [ ] Test shopping flow
- [ ] Test an on-chain payment with a small amount
- [ ] Verify mobile responsiveness
- [ ] Review legal pages (privacy, terms)
- [ ] Set up order notification emails in your payment provider

## 🚀 Go Live!

Once all checklist items are complete, your on-chain clothing store is ready to accept real orders!
