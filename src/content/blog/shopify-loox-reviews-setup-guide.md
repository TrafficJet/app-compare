---
title: "Shopify Loox Reviews Setup Guide (2026)"
slug: "shopify-loox-reviews-setup-guide"
pubDate: 2026-04-25
description: "Complete Shopify Loox setup guide: install, configure emails, import reviews & optimize widgets for 91% higher add-to-cart rates. Step-by-step walkthrough."
author: "Alex Morgan"
tags: ["shopify loox reviews setup guide"]
seoTitle: "Shopify Loox Reviews Setup Guide 2026 | App Compare"
---

# Shopify Loox Reviews Setup Guide (2026)

Photo reviews sell products. Text alone doesn't work when shoppers want to see how an item actually looks in someone's hands, on their body, or in their home. This guide walks you through every step of installing, configuring, and optimizing Loox on your Shopify store so you can start collecting visual UGC (user-generated content — photos and videos submitted by real customers) and turning social proof into revenue.

*[Screenshot placeholder: Loox dashboard showing the Reviews tab and email settings panel]*

---

## What Is Loox and Why Photo Reviews Drive More Sales

Loox is a photo and video review app built specifically for Shopify. Customers submit star ratings with real photos and short videos. Those then display across your storefront through customizable widgets.

As of 2026, Loox offers three paid tiers: **Beginner ($9.99/month)**, **Growth ($34.99/month)**, and **Unlimited ($299.99/month)**, all with a 14-day free trial. Each tier increases the number of monthly review request emails you can send and adds features like A/B testing, Google Shopping integration, and advanced referral tools. (Source: Loox Pricing Page, 2026)

Why photo reviews specifically? Stores displaying customer photos alongside reviews see add-to-cart rate increases of 91% compared to stores with no reviews at all. (Source: Bazaarvoice Shopper Experience Index, 2025) Visual UGC gives buyers confidence that the product matches its listing. This matters most in categories like apparel, home décor, and accessories — where color, fit, and scale are the whole point.

Loox is a Shopify Built for Shopify partner app. That means it's vetted for performance, security, and deep native integration with your admin. One real limitation: Loox has no permanent free plan. Merchants on tight budgets should check whether their order volume justifies the monthly cost before the trial ends.

---

## How to Install Loox on Your Shopify Store in Under Five Minutes

**Step 1:** Open the [Shopify App Store](https://apps.shopify.com), search for "Loox," and click **Add App**. You'll be redirected to your Shopify admin.

**Step 2:** Approve the requested permissions (access to products, orders, and customers) and confirm the billing terms. Shopify handles all billing through your existing account, so there's no separate payment setup.

**Step 3:** Once installed, the Loox onboarding wizard launches automatically. It walks you through selecting your industry or niche, choosing your email template style, and placing your first review widget.

**Step 4:** Selecting your niche (e.g., apparel, electronics, home goods) lets Loox pre-configure email copy and timing defaults that match typical delivery windows for your product type. Merchants who skip this step often end up with mismatched send timing — for example, a default 3-day delay on a product that takes 10 days to ship.

The full installation takes under five minutes. Loox works with popular Shopify themes including Dawn, Debut, and Sense. It also supports headless Shopify setups through its JavaScript SDK and Storefront API integration.

*[Embed placeholder: 60-second screen-recorded walkthrough video of the full install process]*

---

## Configuring Review Request Emails That Actually Get Responses

Review request emails are the engine of your entire review collection strategy. Get the timing and incentives right, and reviews come in on autopilot.

Navigate to **Loox Dashboard → Emails → Review Request**. Set your send delay based on your product type: **7–14 days after fulfillment** for physical goods (so the customer has time to use the product) and **2–3 days** for digital products. Customize the subject line with your store name and the `{{first_name}}` personalization token — something like "{{first_name}}, how's your new [product]?" tends to outperform generic lines.

Enable the **photo incentive**: offer 10–15% off a future order *only* when the reviewer uploads a photo. This single setting drives more visual UGC than anything else. Then set up a **follow-up reminder email** that fires 5 days after the first request if no review has come in. Always preview and send a test email to yourself before going live.

A common mistake: setting the discount too high. A 30% offer eats into margins fast on low-AOV (average order value) products. Merchants selling items under $25 often do better with a flat $3–$5 discount instead of a percentage.

If you already use Klaviyo or Omnisend, you can connect Loox as a trigger event inside those platforms. This lets you control timing, branding, and segmentation from one place. Go to **Loox → Settings → Integrations** and connect your ESP (email service provider). For more on this, check out our [Shopify email marketing setup guide](/shopify-email-marketing-setup).

*[Screenshot placeholder: Sample review request email with the photo incentive discount callout highlighted]*

---

## Importing Existing Reviews So You Don't Launch With Zero Proof

Launching a product page with zero reviews kills conversions. Baymard Institute research (2024) found that 53% of online shoppers consider user reviews a critical factor before purchasing. If you have existing reviews elsewhere, import them before going live.

Loox supports CSV imports from Shopify's native Product Reviews app. Go to **Loox Dashboard → Reviews → Import**, upload your CSV file, and map the columns. You can also import reviews from Amazon, AliExpress, or other platforms using Loox's built-in import tool — useful if you're moving from dropshipping or multi-channel selling.

Before importing, check for duplicate reviews across sources. Loox flags potential overlaps, but a manual spot-check prevents the same review from showing up twice. Imported reviews without photos will still display as star ratings with text. That's better than nothing.

**Example:** When US-based pet supply brand *BarkBox Essentials* migrated from Shopify's native review app to Loox in early 2025, they imported 2,400+ existing text reviews on day one. Then they used the photo incentive to collect 350 new photo reviews within the first month. (Source: Loox Case Studies, 2025)

One tradeoff: imported Amazon reviews can look out of place on a branded Shopify store. Customers sometimes mention Prime shipping or other Amazon-specific details. Review imported content for relevance before publishing.

---

## Adding Review Widgets to Your Storefront for Maximum Visibility

Loox offers five main widget types: **Product Reviews Widget**, **Star Rating Badge**, **Reviews Carousel**, **Floating Reviews Popup**, and a dedicated **All Reviews Page**. Each serves a different purpose and placement.

To add widgets, open **Shopify Theme Editor → Add Section** (or **Add Block** within a section), then select the Loox widget you want. Recommended placements:

- **Product Reviews Widget** → directly below your product description
- **Reviews Carousel** → homepage hero section or mid-page
- **Star Rating Badges** → collection pages, so shoppers see ratings before clicking into a product

*[Screenshot placeholder: Annotated Shopify Theme Editor with a Loox widget section highlighted]*

Inside the **Loox Widget Editor**, you can customize colors, fonts, layout (grid vs. list), and the number of reviews shown per page. Enable the **Reviews Summary Bar** at the top of product pages — it shows the average star rating and total review count at a glance.

On performance: Loox widgets load asynchronously, so they don't block your page from rendering. The impact on Core Web Vitals is minimal. (Source: Loox Documentation, 2026) That said, merchants running speed-sensitive stores should run Lighthouse scores before and after adding multiple widgets — especially the Floating Reviews Popup, which adds extra DOM elements.

For more placement strategies, read our [Shopify social proof guide](/shopify-social-proof-guide).

*[Visual placeholder: Before/after comparison of a product page without reviews vs. with the Loox photo review widget live]*

---

## Enabling Google Rich Snippets and Shopping Reviews to Boost Search Visibility

Loox automatically injects structured data (JSON-LD — a code format that tells Google about your review data) into your product pages. This allows star ratings to appear in Google search results as rich snippets. No manual code edits needed.

To connect Google Shopping, navigate to **Loox Settings → Integrations → Google** and enable the Google Shopping feed. Google's 2026 policy requires a **minimum of 50 reviews per product** before Shopping star ratings will display in ads and free listings. (Source: Google Merchant Center Help, 2026)

There's a distinction between **seller ratings** (overall store reputation) and **product ratings** (specific to an individual SKU) — Loox feeds data into both. Merchants selling fewer than 50 units per SKU may struggle to hit Google's threshold. In those cases, focusing on seller ratings across all products is a more realistic near-term goal.

After enabling, verify your setup using [Google's Rich Results Test tool](https://search.google.com/test/rich-results). Paste any product page URL and confirm the review markup is detected. For a full walkthrough on product feeds, see our [Shopify Google Shopping setup guide](/shopify-google-shopping-setup).

---

## Using Loox Referrals and Social Sharing to Extend Your Reach

Loox includes a built-in referral program called **Loox Referrals**. After a customer submits a review, they get a unique referral link to share with friends. When someone buys through that link, both the referrer and the new customer can receive a discount.

Enable this in **Loox Dashboard → Referrals**. You set the reward amounts — for example, "Give $10, Get $10." Pair this with your photo review discount so the customer journey looks like: purchase → receive product → submit photo review → earn 15% off next order *plus* a referral link to share.

The **social share widget** lets reviewers post their photo review directly to Instagram or Facebook in one click. These posts create free branded UGC outside your storefront and drive organic traffic back to your product pages.

Merchants selling highly visual products — jewelry, streetwear, home décor — tend to see the strongest referral performance from social sharing. Stores selling commodity items like phone chargers or cleaning supplies typically see lower share rates. In those categories, raising the referral reward can help make up the difference. For broader UGC strategies, check out our [Shopify UGC strategy guide](/shopify-ugc-strategy).

---

## Moderating and Managing Reviews Without Losing Trust

Navigate to **Loox Dashboard → Reviews** to see all pending, published, and unpublished reviews in one place.

Set **auto-publish rules** to save time: auto-publish reviews with 4–5 stars, and flag 1–3 star reviews for manual approval. This isn't about hiding negative reviews. It means you check them first for spam, profanity, or irrelevant content. When a critical review comes in, respond publicly with accountability and a resolution offer — refund, replacement, or direct support contact. Shoppers trust stores that handle complaints openly. A Nielsen study (2023) found that 70% of consumers trust a brand more when they see it respond to negative feedback.

Use the **bulk actions tool** to publish or reject multiple reviews at once. This saves real time after large import batches.

Under **Settings → Compliance**, configure GDPR and CAN-SPAM settings so review request emails include unsubscribe links and proper data handling disclosures for both US and EU customers. Skipping this exposes your store to legal risk, especially if you sell internationally.

---

## Tracking Loox Performance and ROI With Concrete Benchmarks

Open **Loox Analytics** to monitor three key metrics: review request **open rates**, **review submission rates**, and **photo submission rates**.

Healthy benchmarks: a **15–25% open rate** on review request emails and a **5–10% review submission rate**. (Source: Loox Benchmark Report, 2025) If you're below these ranges, test new subject lines, adjust send timing, or raise the photo incentive discount. On the Growth plan and above, use Loox's **built-in A/B split-test feature** to compare subject lines head-to-head.

Cross-reference Loox data with **Shopify Analytics** to see how review volume correlates with conversion rate changes. Set a monthly goal of **20+ new photo reviews** as a baseline — most stores that hit this consistently see measurable lifts in conversion rate. For more conversion tactics, visit our guide on [how to increase your Shopify conversion rate](/how-to-increase-shopify-conversion-rate).

**Mini case study:** US apparel brand *Thread & Supply* reported a 22% increase in product page conversion rate within 90 days of reaching 100 Loox photo reviews across their top 10 SKUs. They traced the lift primarily to the Reviews Carousel on their homepage driving traffic to high-proof product pages. (Source: Loox Case Studies, 2025)

One caveat: correlation isn't causation. Seasonal traffic spikes, ad spend changes, and pricing adjustments all affect conversion rates too. Isolate the impact by comparing pages with and without reviews during the same time period.

---

## Common Loox Setup Mistakes to Avoid

**Sending review requests too early.** If the email arrives before the product does, customers ignore it — or leave a frustrated review. Always tie the delay to your actual delivery timeline, not the order date. Merchants shipping internationally often need 14–21 day delays for overseas orders. You can configure this using Loox's conditional timing rules.

**Using generic email copy.** "Please leave a review" gets deleted. Use the customer's first name, the specific product name, and a friendly tone.

**Forgetting to enable the photo incentive** is another major miss — it's the single biggest factor in generating visual UGC.

**Placing widgets only on the homepage** and ignoring product pages means most shoppers never see your reviews where it matters — at the point of the purchase decision. Also, always test widget display on mobile. Over 60% of Shopify traffic comes from mobile devices as of 2026. (Source: Shopify Commerce Trends, 2026)

Don't ignore negative reviews. Leaving 1–2 star reviews unanswered looks worse than the review itself. Respond publicly, offer a fix, and move on. For a comparison of how other apps handle moderation, see our [Loox vs. Judge.me comparison](/loox-vs-judge-me-comparison).

---

## Frequently Asked Questions

### Is Loox free on Shopify?
Loox offers a 14-day free trial. After that, paid plans start at $9.99/month (Beginner) as of 2026. There is no permanent free tier, but the trial gives you access to all core features so you can evaluate it fully before committing.

### How long does it take for review request emails to start sending?
Emails begin sending as soon as you activate them in the Loox dashboard. The first batch goes out based on your chosen delay (e.g., 7 days after fulfillment), so you may see your first reviews within 1–2 weeks of setup.

### Can I use Loox with a custom or headless Shopify theme?
Yes. Loox provides a JavaScript snippet and API for headless or custom theme setups. For standard Shopify themes, widgets are added directly through the Theme Editor with no coding required.

### Does Loox slow down my Shopify store?
Loox widgets load asynchronously, meaning they don't block your page from rendering. Most stores see minimal impact on Core Web Vitals scores after installing Loox. (Source: Loox Documentation, 2026) Running a Lighthouse test before and after installation is the best way to confirm this for your specific theme.

### How do I get more photo reviews with Loox?
Enable the photo incentive — offer a small discount (10–15% off a future order) only when a customer uploads a photo with their review. This tactic alone can roughly triple photo submission rates compared to requests without an incentive. (Source: Loox Benchmark Report, 2025)

### Can Loox send review requests through Klaviyo?
Yes. Loox integrates with Klaviyo and Omnisend. You can trigger Loox review request events inside your existing Klaviyo flows, which lets you control send timing and branding from a single platform.

### What happens to my reviews if I uninstall Loox?
Your review data is stored in Loox's system. If you uninstall the app, widgets stop displaying on your storefront, but the data isn't deleted immediately. Export your reviews as a CSV before uninstalling to keep a local backup — this ensures you retain your UGC regardless of which platform you use next.

---

## Next Steps

Install Loox from the Shopify App Store, run through the onboarding wizard, and send yourself a test review request email today. Import any existing reviews so your store has social proof from day one, enable the photo incentive, and place widgets on every product page. For a broader view of review app options, browse our [best Shopify review apps](/best-shopify-review-apps) roundup.