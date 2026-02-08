# OnCloth - Hoodie Store

A complete, production-ready ecommerce website for selling premium hoodies. Built with pure HTML, CSS, and vanilla JavaScript. Cryptocurrency-only payments via Coinbase Commerce.

**Live Site**: https://oncloth.shop

## 🎯 Features

- **Product Catalog**: 8 premium hoodies with multiple sizes and colors
- **Shopping Cart**: LocalStorage-based cart with quantity management
- **Variant Selection**: Size and color selection with validation
- **Secure Checkout**: Input sanitization, XSS prevention, CSP headers
- **Crypto Payments Only**: Secure cryptocurrency payments via Coinbase Commerce (Bitcoin, Ethereum, USDC, and more)
- **Cloudflare Worker Integration**: Backend payment processing via serverless worker
- **Worldwide Shipping**: Flat-rate shipping ($10 Asia, $20 other regions)
- **Mobile-First Design**: Fully responsive across all devices
- **Guest Checkout**: No user accounts required
- **SEO Optimized**: Proper meta tags and Open Graph tags
- **Email-Based Order Tracking**: Customers receive order confirmation and shipping details via email

## 📁 Project Structure

```
public_html/
├── shop.html               # Homepage / Product catalog
├── product.html            # Individual product page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout form (crypto payment only)
├── success.html            # Order confirmation
├── cancel.html             # Payment cancelled
├── size-guide.html         # Size guide
├── shipping.html           # Shipping information
├── returns.html            # Returns policy
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── index.html              # (Legacy - shop.html is the homepage)
├── css/
│   ├── reset.css           # CSS reset
│   └── main.css            # Main stylesheet
├── js/
│   ├── security.js         # Security utilities
│   ├── utils.js            # Helper functions
│   ├── products.js         # Product catalog
│   ├── cart.js             # Cart management
│   └── checkout.js         # Checkout logic + Cloudflare Worker integration
└── images/                 # Product images (add your own)
```

## 🚀 Deployment to Namecheap Shared Hosting

### Step 1: Upload Files via FTP

1. **Connect to your hosting via FTP**:
   - Host: `ftp.yoursite.com`
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or 22 for SFTP)

2. **Navigate to the public_html directory**

3. **Upload all files**:
   - Upload the contents of the `public_html` folder (not the folder itself)
   - Ensure directory structure is preserved:
     - `/css/` folder with CSS files
     - `/js/` folder with JavaScript files
     - `/images/` folder (initially empty)
   - All HTML files in the root

4. **Set file permissions** (if needed):
   - Directories: 755
   - Files: 644

### Step 2: Add Product Images

1. Create product images (recommended: 600x600px minimum, JPG or PNG)
2. Upload images to the `/images/` folder via FTP
3. Name images according to the product catalog in `products.js`:
   - `classic-black-1.jpg`, `classic-black-2.jpg`, etc.
   - `grey-hoodie-1.jpg`, `grey-hoodie-2.jpg`, etc.
   - (See products.js for full list)

### Step 3: Configure Cloudflare Worker & Coinbase Commerce

#### A. Set Up Cloudflare Worker

The checkout system uses a Cloudflare Worker to handle payment creation securely.

**Worker Endpoint**: `https://create-coinbase-checkout.adheesharavindu001.workers.dev`

This worker:
- Receives order data from the frontend
- Creates a Coinbase Commerce charge
- Returns the checkout URL
- Keeps API keys secure on the backend

**The worker is already configured and deployed.** No changes needed to `checkout.js`.

#### B. Coinbase Commerce Setup

1. **Create Coinbase Commerce account**: https://commerce.coinbase.com
2. **Generate API key** in dashboard
3. **Configure the Cloudflare Worker** with your API key (if using your own worker)
4. **Test payments** using Coinbase Commerce dashboard

#### C. Email Configuration

**Support Email**: support@oncloth.shop  
**Orders Email**: orders@oncloth.shop

These are already configured in the HTML files.

### Step 4: Configure Domain and SSL

1. **Point domain to hosting**:
   - Update nameservers to Namecheap's hosting nameservers
   - Or add A record pointing to your hosting IP

2. **Enable SSL certificate** (Namecheap cPanel):
   - Login to cPanel
   - Go to "SSL/TLS Status"
   - Enable AutoSSL for your domain
   - Wait for certificate installation (5-10 minutes)

3. **Domain is already configured**:
   - Site: https://oncloth.shop
   - All URLs already updated in HTML files

### Step 5: Test Your Website

1. **Test all pages**:
   - Navigate through all pages
   - Check responsive design on mobile
   - Verify all links work

2. **Test shopping flow**:
   - Add items to cart
   - Proceed to checkout
   - Fill out shipping form
   - Test crypto payment (use small amount first)
   - Verify success page displays order details

3. **Verify payment integration**:
   - Test with small cryptocurrency payment
   - Confirm funds arrive in Coinbase Commerce
   - Verify order data is saved to localStorage
   - Check success page shows correct order info

## 🔧 Configuration

### Payment Flow

The site uses a **crypto-only** checkout flow:
1. Customer fills out shipping information
2. Clicks "Pay with Crypto" button
3. Frontend calls Cloudflare Worker with order data
4. Worker creates Coinbase Commerce charge
5. Customer is redirected to Coinbase Commerce checkout
6. Customer completes payment (Bitcoin, Ethereum, USDC, etc.)
7. Redirected to success.html with order confirmation

### Email Configuration

Emails are already configured:
- **Support**: support@oncloth.shop (general inquiries, returns, shipping questions)
- **Orders**: orders@oncloth.shop (order-specific questions)

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

- **Content Security Policy (CSP)**: Prevents XSS attacks, configured for Cloudflare Worker + Coinbase Commerce
- **Input Sanitization**: All user inputs are sanitized
- **Output Escaping**: All dynamic content is escaped
- **LocalStorage Validation**: Cart data is validated before use
- **No Inline Scripts**: All JavaScript in external files
- **HTTPS Only**: SSL certificate required for production
- **Payment Security**: No payment data stored on frontend; all handled by Coinbase Commerce
- **Backend Payment Processing**: Cloudflare Worker keeps API keys secure

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
3. Upload updated `products.js` via FTP

### Updating Content

1. Edit HTML files locally
2. Upload modified files via FTP
3. Clear browser cache if needed

### Monitoring Orders

1. **Coinbase Commerce Dashboard**: View all cryptocurrency payments and order details
2. **Email Notifications**: Receive payment confirmations at your configured email
3. **Customer Data**: Stored in localStorage on success page (customer should screenshot/save)
4. **Order Tracking**: Maintain spreadsheet or use order management system

## 📊 Order Fulfillment Workflow

1. **Receive Payment Notification**: Email from Coinbase Commerce
2. **Verify Order Details**: Check payment in Coinbase Commerce dashboard
3. **Retrieve Customer Info**: Customer saves order details from success page
4. **Package Hoodie**: Prepare item with correct size/color
5. **Ship Order**: Use preferred courier service
6. **Send Tracking**: Email customer at orders@oncloth.shop with tracking number
7. **Update Records**: Mark order as fulfilled in your system

## 🐛 Troubleshooting

### Cart Not Saving
- Check browser localStorage is enabled
- Clear browser cache and cookies
- Verify browser is not in private/incognito mode

### Payment Not Working
- Verify Cloudflare Worker endpoint is accessible
- Check SSL certificate is installed and valid
- Test with small payment first
- Check browser console for errors
- Ensure Coinbase Commerce account is active

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

- **Customer Support**: support@oncloth.shop
- **Order Questions**: orders@oncloth.shop
- **Website**: https://oncloth.shop

## 📄 License

This is a complete production system. Customize as needed for your business.

## ✅ Pre-Launch Checklist

- [x] Upload all files to public_html
- [x] Add product images
- [x] Configure Coinbase Commerce + Cloudflare Worker
- [x] Enable SSL certificate
- [x] Update all email addresses (support@oncloth.shop, orders@oncloth.shop)
- [x] Update domain references (oncloth.shop)
- [x] Set shop.html as homepage
- [x] Remove card payment options
- [ ] Test all pages
- [ ] Test shopping flow
- [ ] Test crypto payment with small amount
- [ ] Verify mobile responsiveness
- [ ] Review legal pages (privacy, terms)
- [ ] Set up order notification emails in Coinbase Commerce

## 🚀 Go Live!

Once all checklist items are complete, your hoodie store is ready to accept real orders!
