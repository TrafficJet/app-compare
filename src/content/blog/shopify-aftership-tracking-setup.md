---
title: "Shopify AfterShip Tracking Setup Guide (2026)"
slug: "shopify-aftership-tracking-setup"
pubDate: 2026-04-25
description: "Complete guide to installing and configuring AfterShip order tracking on Shopify. Connect carriers, reduce support tickets, and automate shipping notifications."
author: "Alex Morgan"
tags: ["shopify aftership tracking setup"]
seoTitle: "Shopify AfterShip Tracking Setup Guide 2026 | App Compare"
---

# Shopify AfterShip Tracking Setup Guide (2026)

Setting up order tracking on your Shopify store doesn't have to take all day. This guide walks you through every step of installing and configuring AfterShip — from connecting your carriers to building a branded tracking page and automating shipping notifications.

By the end, you'll have a fully working post-purchase tracking system that keeps customers informed and cuts down on support tickets.

## What Is AfterShip and Why Use It with Shopify?

AfterShip is a multi-carrier shipment tracking platform that supports over 1,100 carriers worldwide, including USPS, UPS, FedEx, DHL, and Amazon Logistics. You install it on your Shopify store, and it pulls all your tracking data into one dashboard. Customers get a clean, self-service way to check their order status.

The core problem AfterShip solves is post-purchase anxiety — that gap between checkout and delivery when customers start wondering where their package is. These "Where Is My Order?" (WISMO) inquiries can account for up to 40% of all customer support tickets for e-commerce brands (AfterShip, 2025). Proactive shipping updates and a self-service tracking page cut those tickets significantly.

Key benefits: a branded tracking experience that keeps customers on your site, automated notifications at every delivery milestone, and product recommendation widgets that drive repeat purchases. As of 2026, AfterShip's pricing starts with a free plan (50 shipments/month) and scales through Essentials (~$11/month), Pro (~$119/month), and Enterprise tiers. It works whether you ship 20 orders a month or 20,000.

One limitation worth knowing: AfterShip's tracking accuracy depends entirely on carrier data feeds. If a carrier's API is slow or unreliable — common with smaller regional couriers — AfterShip can't surface updates any faster than the carrier provides them.

**Example:** The DTC skincare brand Blume uses AfterShip to send branded delivery updates to customers, which helped them reduce WISMO support tickets by over 30% after implementation (AfterShip Case Studies, 2025).

## Before You Start: Requirements and Prerequisites

Before installing anything, make sure you have these in place:

- **An active Shopify store** on any plan, including Starter.
- **Admin access** to your Shopify dashboard (you need permissions to install apps and edit notification settings).
- **Active carrier accounts or tracking numbers** — AfterShip pulls tracking data from carriers, so you need to already be generating tracking numbers through your fulfillment workflow.
- **Optional: An email or SMS provider like Klaviyo** if you want advanced notification flows beyond AfterShip's built-in options.

Back up your existing Shopify notification templates before making changes. Go to **Settings > Notifications** in your Shopify admin and copy the HTML of any shipping-related templates you've customized. This gives you a fallback if you need to revert.

## Step 1 — Install AfterShip from the Shopify App Store

Open your Shopify admin and go to the [Shopify App Store](https://apps.shopify.com). Search for **"AfterShip Order Tracking"** — it's the app by AfterShip with millions of installs and a 4.7-star average rating (Shopify App Store, as of 2026).

Click **Add app**, then review the permissions AfterShip requests. These include access to your orders, customers, and shipping data — standard for any tracking app, but worth reviewing so you understand what data you're sharing. Approve them to proceed.

After installation, AfterShip automatically creates an account using your Shopify store's email address. You'll land on the AfterShip dashboard inside your Shopify admin. The left-hand navigation includes tabs for Shipments, Tracking Page, Notifications, and Analytics.

📸 *Screenshot opportunity: Capture the AfterShip dashboard right after installation so you can reference the default layout.*

The **free plan covers up to 50 shipments per month** with basic tracking page and email notification features. If your store ships more than that, you'll need to upgrade — but start on the free tier to test everything before committing. Many merchants find it's enough to validate the workflow before investing in a paid tier.

## Step 2 — Connect Your Carriers and Import Existing Shipments

From the AfterShip dashboard, navigate to **Carriers > Add Carrier**. You'll see a searchable list of 1,100+ supported carriers. Add the carriers you use most — common choices for US-based Shopify stores include USPS, UPS, FedEx, and DHL.

**Turn on the auto-detect carrier feature.** This matters. When enabled, AfterShip automatically identifies the carrier based on the tracking number format. That eliminates manual carrier selection for each shipment. Find this toggle under **Settings > Carrier Detection**. Auto-detection works reliably for major carriers, though it can occasionally misidentify tracking numbers from smaller regional couriers that share similar number formats.

For historical orders, you have two options. AfterShip can automatically pull recent shipments from your Shopify orders, or you can import tracking numbers via CSV upload. The auto-import pulls any orders with tracking numbers added in the last 30 days.

After connecting, **verify the setup with a test tracking number**. Grab a real tracking number from a recent order, enter it in the AfterShip dashboard, and confirm the status updates correctly. If a carrier requires an API key for real-time accuracy — some regional carriers do — AfterShip will prompt you to enter it during setup.

**Example:** If you fulfill through ShipStation or ShipBob, those platforms automatically push tracking numbers to Shopify, and AfterShip picks them up from there — no extra configuration needed. This three-layer sync (ShipStation → Shopify → AfterShip) typically takes under five minutes per shipment.

📹 *GIF opportunity: Record a short screen capture of the auto-detect carrier feature identifying a USPS tracking number automatically.*

## Step 3 — Build a Branded Tracking Page That Drives Revenue

Instead of sending customers to the USPS or FedEx website, AfterShip keeps them on a tracking page that looks like your store — and gives you a chance to cross-sell.

Go to **AfterShip > Tracking Page > Customize**. Here's what to configure:

1. **Store logo and brand colors.** Upload your logo and set your hex color codes so the tracking page matches your site.
2. **Custom domain.** On paid plans, you can use a subdomain like `track.yourstore.com` instead of the default `yourstore.aftership.com`. To set this up, add a **CNAME record** (a DNS entry that maps one domain name to another) in your DNS settings pointing your subdomain to `cname.aftership.com`. If you use Cloudflare or another DNS provider, adding the record takes about 60 seconds — but propagation can take up to 48 hours.
3. **Product recommendations.** Enable upsell widgets on the tracking page. AfterShip lets you display recommended products, which turns a status-check into a shopping opportunity.
4. **Language settings.** If you sell internationally, set up multiple language preferences so the tracking page displays in the customer's language.

**Preview your page on both desktop and mobile** before publishing. More than 70% of tracking page visits come from mobile devices (AfterShip, 2025). Make sure your logo isn't cut off and the layout reads clearly on smaller screens.

📸 *Screenshot opportunity: Show a side-by-side of the default AfterShip tracking page versus a fully branded version with custom colors, logo, and product recommendations.*

**Example:** The pet supply brand BarkBox uses a custom-branded AfterShip tracking page with product suggestions. Customers checking their shipment status see treats and toy recommendations, driving incremental revenue from a page that would otherwise be a dead end. This aligns with research from the Baymard Institute (2024) showing that contextual product recommendations — surfaced at moments of high engagement — convert at significantly higher rates than generic homepage suggestions.

## Step 4 — Configure Automated Shipping Notifications

Go to the **Notifications** tab in your AfterShip dashboard. This is where you set up the emails and SMS messages customers receive at each stage of delivery.

AfterShip supports these delivery triggers:

- **In Transit** — Package picked up by carrier
- **Out for Delivery** — Package on the delivery truck
- **Delivered** — Package delivered
- **Exception** — Carrier flagged a problem (damaged, wrong address, customs hold)
- **Failed Attempt** — Delivery attempted but unsuccessful

For each trigger, you can customize the email using AfterShip's built-in drag-and-drop editor. Use dynamic variables like `{{customer_name}}`, `{{tracking_number}}`, and `{{estimated_delivery_date}}` to personalize every message.

For **SMS notifications**, you can either use AfterShip's built-in SMS feature (available on paid plans) or connect Klaviyo to trigger SMS flows based on shipment events. The Klaviyo route gives you more control over segmentation and message timing — see our [Shopify Klaviyo integration guide](/shopify-klaviyo-integration-guide) for details. The tradeoff: Klaviyo adds another monthly cost and requires more setup, so AfterShip's native SMS is typically sufficient for stores under 5,000 monthly shipments.

### ⚠️ Critical Step: Disable Shopify's Default Shipping Emails

If you skip this, your customers will receive **duplicate notifications** — one from Shopify and one from AfterShip. Go to **Shopify Admin > Settings > Notifications** and disable these templates:

- Shipment out for delivery
- Shipment delivered

Leave "Shipping confirmation" enabled if you want Shopify to send the initial fulfillment email, or disable it too if AfterShip handles your "In Transit" notification.

📸 *Screenshot opportunity: Show the Shopify Notifications settings page with the specific emails to disable highlighted.*

**Pro tip:** A/B test your notification subject lines. A subject line like "Your order is out for delivery, {{customer_name}}!" typically outperforms generic lines like "Shipping update" by 15–20% in open rates (AfterShip, 2025). Merchants who personalize subject lines with the customer's name and a specific status tend to see their highest engagement on "Out for Delivery" emails.

## Step 5 — Connect AfterShip to Your Existing Tech Stack

AfterShip becomes more useful when connected to the rest of your tools. Here are the highest-impact integrations:

**Klaviyo:** Connect AfterShip to Klaviyo, and shipment status changes appear as events in your Klaviyo account. You can trigger post-delivery review request emails, cross-sell flows, or win-back campaigns based on delivery confirmation. Timing is where this integration earns its keep — sending a review request 3 days after delivery performs far better than sending it at a random interval. According to Klaviyo's own benchmarks (2025), post-delivery review request emails generate 2–3x higher response rates than those sent at fulfillment.

📸 *Screenshot opportunity: Show the AfterShip + Klaviyo event feed in Klaviyo, displaying shipment triggers like "Delivered" and "In Transit."*

**Shopify Flow:** Use Shopify Flow (available on Shopify Basic plans and above) to automate internal actions. For example, create a flow that auto-tags an order as "delivered" when AfterShip confirms delivery, or flags orders with an "exception" status for your support team to review.

**Gorgias or Zendesk:** Both helpdesk platforms integrate with AfterShip to surface tracking data directly inside support tickets. When a customer contacts you about an order, your agent sees the live tracking status without switching tabs. This typically shaves 30–60 seconds off each WISMO interaction.

**AfterShip Protection:** This optional add-on lets you offer shipping insurance at checkout. If a package is lost or damaged, AfterShip handles the claim process. Merchants typically charge customers a small fee while AfterShip covers the cost of claims (AfterShip, 2026). One tradeoff: adding an insurance upsell at checkout introduces friction, so test whether it affects your conversion rate before rolling it out store-wide.

**AfterShip Returns:** For a complete post-purchase loop, connect [AfterShip Returns](/aftership-returns-shopify-setup) to manage return labels, refunds, and exchanges from one platform.

## Step 6 — Test Your Full Setup Before Going Live

Don't go live without testing. Place a test order on your store (or use a real tracking number from a recent shipment) and walk through the full customer experience.

**Your testing checklist:**

- [ ] Tracking page loads correctly and displays your branding on both desktop and mobile.
- [ ] Carrier detection correctly identifies your top 3 carriers.
- [ ] Notification emails arrive in your inbox (not spam). Send test emails from the AfterShip Notifications tab.
- [ ] SMS notifications arrive if you've enabled them.
- [ ] Shopify's default shipping emails are disabled (no duplicates).
- [ ] Product recommendations appear on the tracking page.
- [ ] Custom domain resolves to your branded tracking page (if configured).

After testing, check the **AfterShip Analytics dashboard**. You'll see delivery performance metrics including on-time delivery rates, average transit times by carrier, and exception rates. These numbers help you spot underperforming carriers over time.

**Example:** One mid-size apparel merchant discovered through AfterShip analytics that their regional carrier had a 12% exception rate compared to 2% for UPS. They shifted volume to UPS for orders over $50 and saw customer complaints drop within two weeks. Merchants who review this data monthly tend to catch carrier performance issues before they become customer experience problems.

## Common AfterShip Setup Problems and How to Fix Them

Even straightforward setups can hit snags. Here are the most common issues and their fixes:

**Duplicate shipping emails:** This is the #1 complaint. It happens when you activate AfterShip notifications but forget to disable Shopify's built-in shipping emails. Fix it in **Shopify Admin > Settings > Notifications**.

**Tracking not updating:** Usually caused by a carrier API rate limit or an unsupported carrier variant. Enable auto-detect carrier in AfterShip settings. If you're using a regional carrier, check whether it requires an API key for real-time updates.

**Custom domain not resolving:** After adding the CNAME record, DNS propagation can take up to 48 hours. If it still doesn't work after that, verify you entered the CNAME value as `cname.aftership.com` (not a URL with `https://`). Also check that your DNS provider isn't proxying the record — in Cloudflare, set the record to "DNS only" mode (the grey cloud icon).

**Notifications not sending:** Check two things — your AfterShip plan's shipment limit (free plan caps at 50/month) and whether your sender email is verified in AfterShip's email settings. Unverified sender addresses block all outgoing notifications.

**Shipments not auto-importing:** Go to AfterShip's app settings in Shopify and re-authorize the connection. Shopify updates occasionally reset app permissions, breaking the data sync. This is a known issue across many Shopify apps, not specific to AfterShip.

## AfterShip Pricing in 2026: Choosing the Right Plan

Here's a breakdown of AfterShip's 2026 pricing tiers (AfterShip, as of 2026):

| Plan | Monthly Cost | Shipments/Month | Key Features |
|------|-------------|-----------------|--------------|
| **Free** | $0 | 50 | Basic tracking page, email notifications |
| **Essentials** | ~$11 | 100 | Custom domain, SMS add-on, basic analytics |
| **Pro** | ~$119 | 2,000 | Advanced analytics, AI delivery date estimates, multilingual pages |
| **Enterprise** | Custom | Unlimited | Dedicated account manager, SLA guarantees, custom integrations |

**Our recommendation based on store size:** If your store generates under $500K/year in revenue, the Free or Essentials plan typically covers most needs. Stores scaling past 2,000 shipments/month or needing AI-powered estimated delivery dates should evaluate Pro. Enterprise makes sense for high-volume brands that need guaranteed uptime SLAs and custom API access.

The jump from Essentials ($11/month) to Pro ($119/month) is steep. The Pro plan's value comes primarily from AI delivery estimates and advanced analytics. If you don't need those features, Essentials offers strong value for smaller operations.

Pricing may change — always verify current rates on [AfterShip's official pricing page](https://www.aftership.com/pricing).

## Frequently Asked Questions

### Is AfterShip free to use with Shopify?
Yes. AfterShip offers a free plan that covers up to 50 shipments per month, as of 2026. Paid plans start around $11/month and give you higher shipment volumes, custom domains, and advanced analytics.

### Will AfterShip send duplicate shipping emails to my customers?
It will if you don't turn off Shopify's default shipping notifications. Go to **Shopify Admin > Settings > Notifications** and disable the "Shipment out for delivery" and "Shipment delivered" emails before activating AfterShip notifications.

### How long does AfterShip take to set up on Shopify?
Basic setup — install, carrier connection, and notification activation — takes about 15–30 minutes. Adding a custom tracking domain and fully designing a branded page may take an additional hour.

### Does AfterShip support international carriers?
Yes. AfterShip supports over 1,100 carriers globally, including DHL, Royal Mail, Australia Post, Japan Post, and many regional couriers. Use the auto-detect feature for carriers you're not sure about.

### Can I use AfterShip tracking with Klaviyo on Shopify?
Yes. AfterShip integrates directly with Klaviyo. Shipment status events (like "Delivered") appear as Klaviyo events, letting you trigger post-purchase flows, review requests, and upsell campaigns automatically. Check our [Klaviyo integration guide](/shopify-klaviyo-integration-guide) for the full walkthrough.

### What happens when a shipment shows an "Exception" status in AfterShip?
An exception means the carrier flagged an issue — a damaged package, address problem, or customs hold. Set up an Exception notification in AfterShip to alert customers immediately and reduce inbound support tickets. Not all exceptions are critical — some resolve automatically within 24 hours — so monitoring the AfterShip dashboard daily helps you prioritize which ones need action.

### Can I add a tracking page to my Shopify store without a custom domain?
Yes. AfterShip provides a default tracking page at `yourstore.aftership.com`. Custom domains (e.g., `track.yourstore.com`) are available on paid plans and require a simple CNAME DNS update.

---

**Next steps:** Once your AfterShip tracking is live, check out our guides on [customizing Shopify email notifications](/shopify-email-notifications-customize) and [building a complete post-purchase experience](/shopify-post-purchase-experience) to keep customers coming back.