# EmailJS Setup Guide

To enable order confirmation emails, follow these steps:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or any other email provider)
4. Connect your email account (nothingtousewebsite@gmail.com)
5. Note the **Service ID** (e.g., `service_abc123`)

## 3. Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** Order Confirmation

**Subject:** New Order from {{customer_name}}

**Content:**
```
Hello Admin,

You have received a new order!

CUSTOMER DETAILS:
Name: {{customer_name}}
Email: {{customer_email}}
Address: {{customer_address}}

ORDER DETAILS:
{{order_details}}

TOTAL: {{order_total}}

---
This email was sent from LuxeDeco E-commerce Store
```

4. Note the **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `your_public_key_here`)

## 5. Update the Code

Open `src/components/OrderConfirmationForm.jsx` and replace these values on lines 54-56:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Example Configuration

```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'your_public_key_here';
```

## 6. Test Your Setup

1. Add products to cart
2. Go to checkout
3. Fill in the order form
4. Submit the order
5. Check nothingtousewebsite@gmail.com for the confirmation email

## Email Template Variables

The following variables are automatically populated:

- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{customer_address}}` - Delivery address
- `{{order_total}}` - Total order amount
- `{{order_items}}` - Simple list of items
- `{{order_details}}` - Detailed breakdown with quantities and prices

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Rate limit: 1 email per second
- Perfect for development and small projects

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all EmailJS credentials are correct
3. Make sure you've connected and verified your Gmail account in EmailJS
4. Check EmailJS dashboard for service status

## Notes

- Email sending happens asynchronously and won't block the order confirmation
- Even if email fails, the order will still be processed
- CORS is automatically handled by EmailJS
- No backend server required!
