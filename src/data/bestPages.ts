import type { CategoryId } from './apps';

export interface BestPageApp {
  appId: string;
  rank: number;
  score: number;
  topReason: string;
  compareLinks: string[];
}

export interface BestPage {
  slug: string;
  category: CategoryId;
  h1: string;
  metaDescription: string;
  intro: string;
  apps: BestPageApp[];
  faq: { q: string; a: string }[];
}

export const BEST_PAGES: BestPage[] = [
  {
    slug: 'email-marketing',
    category: 'email',
    h1: 'Best Shopify Email Marketing Apps 2026',
    metaDescription: 'We ranked the 5 best Shopify email marketing apps by pricing, automation depth, and Shopify integration. Klaviyo, Omnisend, Drip, Privy, and Mailchimp compared.',
    intro: 'Email marketing drives more revenue per dollar than any other channel for Shopify stores. Choosing the right platform determines whether you\'re leaving money on the table or maximizing every customer relationship.',
    apps: [
      {
        appId: 'klaviyo',
        rank: 1,
        score: 9.2,
        topReason: 'Best overall — deepest Shopify integration, predictive CLV scoring, and the largest template library in the category.',
        compareLinks: ['klaviyo-vs-mailchimp', 'klaviyo-vs-omnisend', 'klaviyo-vs-drip', 'klaviyo-vs-privy'],
      },
      {
        appId: 'omnisend',
        rank: 2,
        score: 8.7,
        topReason: 'Best value — email + SMS + push notifications in one platform, cheaper than Klaviyo at same contact count.',
        compareLinks: ['klaviyo-vs-omnisend', 'omnisend-vs-mailchimp', 'omnisend-vs-privy'],
      },
      {
        appId: 'drip',
        rank: 3,
        score: 8.0,
        topReason: 'Best for stores tired of feature gating — all automation, segmentation, and A/B testing on every plan.',
        compareLinks: ['klaviyo-vs-drip', 'drip-vs-mailchimp'],
      },
      {
        appId: 'privy',
        rank: 4,
        score: 7.2,
        topReason: 'Best for list building — unmatched popup and exit-intent tools to grow your email list fast.',
        compareLinks: ['klaviyo-vs-privy', 'omnisend-vs-privy'],
      },
      {
        appId: 'mailchimp',
        rank: 5,
        score: 6.5,
        topReason: 'Best for beginners or stores with existing Mailchimp lists — weakest Shopify-native integration of the group.',
        compareLinks: ['klaviyo-vs-mailchimp', 'omnisend-vs-mailchimp', 'drip-vs-mailchimp'],
      },
    ],
    faq: [
      { q: 'What is the best email marketing app for Shopify?', a: 'Klaviyo is the best overall email marketing app for Shopify, thanks to its native Shopify data sync, predictive CLV scoring, and advanced flow automation. Omnisend is the best value option, adding SMS and push notifications at a lower price.' },
      { q: 'Is Klaviyo free for Shopify?', a: 'Yes, Klaviyo has a free plan for up to 500 contacts and 500 emails/month. Paid plans start at $20/mo for 1,001–1,500 contacts.' },
      { q: 'Should I use Klaviyo or Mailchimp for Shopify?', a: 'Klaviyo for any serious Shopify store. Mailchimp\'s Shopify integration is significantly weaker — it has known sync issues and less ecommerce-specific automation. Mailchimp only makes sense if you already have a large list there.' },
      { q: 'What is the best free email app for Shopify?', a: 'Klaviyo and Omnisend both offer the best free plans. Klaviyo\'s free plan covers 500 contacts and 500 emails/mo; Omnisend\'s free plan covers 500 emails/mo with unlimited contacts.' },
    ],
  },
  {
    slug: 'product-reviews',
    category: 'reviews',
    h1: 'Best Shopify Product Review Apps 2026',
    metaDescription: 'We ranked the 5 best Shopify review apps — Judge.me, Okendo, Loox, Stamped, and Yotpo — on pricing, features, and Google Shopping integration.',
    intro: 'Product reviews increase conversion rates by 15–30% and build the trust needed to compete with Amazon. The right review app makes collecting and displaying social proof effortless.',
    apps: [
      {
        appId: 'judgeme',
        rank: 1,
        score: 9.5,
        topReason: 'Best overall value — highest App Store rating (5.0) with 38,000+ reviews, unlimited review emails, and flat $15/mo pricing.',
        compareLinks: ['yotpo-vs-judgeme', 'judgeme-vs-loox', 'judgeme-vs-okendo'],
      },
      {
        appId: 'okendo',
        rank: 2,
        score: 8.8,
        topReason: 'Best premium design — Yotpo-quality widgets at a fraction of the price, with headless support and Q&A on all plans.',
        compareLinks: ['yotpo-vs-okendo', 'judgeme-vs-okendo', 'loox-vs-okendo', 'okendo-vs-stamped'],
      },
      {
        appId: 'loox',
        rank: 3,
        score: 8.5,
        topReason: 'Best photo review UX — stunning gallery widgets for visually-driven brands, with built-in referral program.',
        compareLinks: ['judgeme-vs-loox', 'yotpo-vs-loox', 'stamped-vs-loox', 'loox-vs-okendo'],
      },
      {
        appId: 'stamped',
        rank: 4,
        score: 8.0,
        topReason: 'Best for NPS surveys — the only mid-market review app with built-in NPS and loyalty features at $23/mo.',
        compareLinks: ['yotpo-vs-stamped', 'stamped-vs-loox', 'okendo-vs-stamped'],
      },
      {
        appId: 'yotpo',
        rank: 5,
        score: 7.8,
        topReason: 'Best enterprise suite — reviews + loyalty + SMS in one platform, but overpriced for stores that just need reviews.',
        compareLinks: ['yotpo-vs-judgeme', 'yotpo-vs-stamped', 'yotpo-vs-loox', 'yotpo-vs-okendo'],
      },
    ],
    faq: [
      { q: 'What is the best Shopify product review app?', a: 'Judge.me is the best overall — it has the highest App Store rating (5.0 with 38,000+ reviews), unlimited review request emails, and a flat $15/mo pricing that doesn\'t scale with order volume.' },
      { q: 'Is Judge.me really free?', a: 'Yes. Judge.me has a completely free plan with unlimited review requests and no order limits. The Awesome plan ($15/mo flat) adds white-label and Google Shopping stars.' },
      { q: 'What is better — Yotpo or Judge.me?', a: 'Judge.me wins for most stores on price and value — unlimited reviews at $15/mo vs Yotpo\'s $79/mo entry. Yotpo only makes sense when you need loyalty and SMS bundled with reviews at enterprise scale.' },
      { q: 'Which review app has Google Shopping integration?', a: 'Judge.me (on the $15/mo Awesome plan), Okendo (all paid plans), Stamped (Basic+), Loox (Scale+), and Yotpo (Starter+) all support Google Shopping review syndication.' },
    ],
  },
  {
    slug: 'customer-support',
    category: 'support',
    h1: 'Best Shopify Customer Support Apps 2026',
    metaDescription: 'We ranked the 4 best Shopify helpdesk apps — Gorgias, Re:amaze, Tidio, and Zendesk — on Shopify integration, pricing, and team size fit.',
    intro: 'The right customer support app can cut ticket resolution time in half and turn support from a cost center into a revenue driver. For Shopify stores, ecommerce-native helpdesks outperform generic tools.',
    apps: [
      {
        appId: 'gorgias',
        rank: 1,
        score: 9.0,
        topReason: 'Best for Shopify teams — purpose-built with Shopify order data in the sidebar, one-click refund/cancel, and ecommerce automation rules.',
        compareLinks: ['gorgias-vs-tidio', 'gorgias-vs-reamaze', 'gorgias-vs-zendesk'],
      },
      {
        appId: 'reamaze',
        rank: 2,
        score: 8.3,
        topReason: 'Best for multi-brand — supports multiple Shopify stores in one inbox with predictable per-agent pricing ($29/staff/mo).',
        compareLinks: ['gorgias-vs-reamaze', 'tidio-vs-reamaze'],
      },
      {
        appId: 'tidio',
        rank: 3,
        score: 8.0,
        topReason: 'Best for small stores — free tier with live chat + Lyro AI chatbot that handles common questions automatically.',
        compareLinks: ['gorgias-vs-tidio', 'tidio-vs-reamaze'],
      },
      {
        appId: 'zendesk',
        rank: 4,
        score: 7.0,
        topReason: 'Best for enterprise — most powerful general helpdesk, but not purpose-built for Shopify and costs more per agent.',
        compareLinks: ['gorgias-vs-zendesk'],
      },
    ],
    faq: [
      { q: 'What is the best customer support app for Shopify?', a: 'Gorgias is the best Shopify support app for teams with dedicated support staff. It shows Shopify order data directly in the helpdesk and lets agents cancel/refund without leaving the inbox. Tidio is better for small stores that need a free chatbot.' },
      { q: 'Is Gorgias worth it for small Shopify stores?', a: 'Only if you have 2+ agents handling 100+ tickets/day. For smaller stores, Tidio (free tier) or Re:amaze ($29/agent/mo) provide better value without ticket-based pricing.' },
      { q: 'Does Shopify have a built-in helpdesk?', a: 'Shopify Inbox is a free basic live chat tool, but it lacks automation, ticketing, and multi-channel support. Most serious stores upgrade to Gorgias, Re:amaze, or Tidio for proper helpdesk functionality.' },
    ],
  },
  {
    slug: 'subscriptions',
    category: 'subscriptions',
    h1: 'Best Shopify Subscription Apps 2026',
    metaDescription: 'We ranked the 3 best Shopify subscription apps — Seal Subscriptions, ReCharge, and Bold Subscriptions — on pricing, transaction fees, and feature depth.',
    intro: 'Subscription apps turn one-time buyers into recurring revenue. The critical difference between apps is transaction fees — which can cost you thousands per month at scale.',
    apps: [
      {
        appId: 'seal_subscriptions',
        rank: 1,
        score: 9.0,
        topReason: 'Best overall — highest rating (4.9), zero transaction fees on all plans, and free up to 150 subscribers.',
        compareLinks: ['seal-subscriptions-vs-recharge', 'seal-subscriptions-vs-bold-subscriptions'],
      },
      {
        appId: 'recharge',
        rank: 2,
        score: 8.2,
        topReason: 'Best ecosystem — market leader with the most third-party integrations, advanced bundles, and subscription analytics.',
        compareLinks: ['seal-subscriptions-vs-recharge', 'recharge-vs-bold-subscriptions'],
      },
      {
        appId: 'bold_subscriptions',
        rank: 3,
        score: 7.0,
        topReason: 'Lower entry cost than ReCharge ($49 vs $99), but has the lowest App Store rating (3.9) of the three.',
        compareLinks: ['recharge-vs-bold-subscriptions', 'seal-subscriptions-vs-bold-subscriptions'],
      },
    ],
    faq: [
      { q: 'What is the best subscription app for Shopify?', a: 'Seal Subscriptions is the best overall — it has the highest App Store rating (4.9), zero transaction fees, and a free plan for up to 150 subscribers. ReCharge is better for enterprise stores needing advanced integrations.' },
      { q: 'Does Seal Subscriptions charge transaction fees?', a: 'No. Seal Subscriptions charges zero transaction fees on all plans — including the free plan. This makes it significantly cheaper than ReCharge (1.25% + 19¢/transaction) at any volume.' },
      { q: 'Is ReCharge still worth it in 2026?', a: 'ReCharge makes sense for established subscription businesses ($50K+/mo MRR) that need advanced analytics, custom bundles, and deep integrations with fulfillment systems. For most stores starting with subscriptions, Seal Subscriptions is the better choice.' },
    ],
  },
  {
    slug: 'loyalty-rewards',
    category: 'loyalty',
    h1: 'Best Shopify Loyalty & Rewards Apps 2026',
    metaDescription: 'We ranked the best Shopify loyalty apps — Smile.io and LoyaltyLion — on ease of setup, pricing, and loyalty program flexibility.',
    intro: 'Loyalty programs increase repeat purchase rates by 20–40% and customer lifetime value significantly. The key is choosing a platform that matches your program complexity and growth stage.',
    apps: [
      {
        appId: 'smile',
        rank: 1,
        score: 8.8,
        topReason: 'Best for most stores — easiest setup, strong free tier (200 orders/mo), and points + referrals + VIP in one.',
        compareLinks: ['smile-vs-loyaltylion'],
      },
      {
        appId: 'loyaltylion',
        rank: 2,
        score: 8.5,
        topReason: 'Best for complex programs — most flexible rules engine, custom events, and generous free tier (800 orders/mo).',
        compareLinks: ['smile-vs-loyaltylion'],
      },
    ],
    faq: [
      { q: 'What is the best loyalty app for Shopify?', a: 'Smile.io is the best loyalty app for most stores — it\'s the most popular, easy to set up, and has a strong free plan for stores under 200 orders/mo. LoyaltyLion is better if you need complex loyalty rules, custom events, or B2B programs.' },
      { q: 'Is Smile.io free?', a: 'Yes, Smile.io has a free plan for stores under 200 monthly orders. It includes a basic points program. Paid plans start at $49/mo for up to 500 orders and add referral programs.' },
      { q: 'Does a loyalty program actually increase sales?', a: 'Yes — loyalty programs typically increase repeat purchase frequency by 20–40%. Stores with loyalty programs see 3–5× higher customer lifetime value from enrolled members vs non-enrolled customers.' },
    ],
  },
  {
    slug: 'analytics',
    category: 'analytics',
    h1: 'Best Shopify Analytics & Attribution Apps 2026',
    metaDescription: 'We compared Triple Whale vs Northbeam — the two leading post-iOS14 attribution tools for Shopify stores. Which is right for your ad spend level?',
    intro: 'Post-iOS14, accurate attribution is the difference between scaling confidently and wasting ad spend. First-party pixel tools replace broken last-click attribution with multi-touch models that actually reflect reality.',
    apps: [
      {
        appId: 'triplewhale',
        rank: 1,
        score: 8.7,
        topReason: 'Best for $1–10M stores — solid multi-touch attribution, creative analytics, and cohort LTV at a fair price ($129/mo).',
        compareLinks: ['triplewhale-vs-northbeam'],
      },
      {
        appId: 'northbeam',
        rank: 2,
        score: 8.2,
        topReason: 'Best for $10M+ brands — most sophisticated ML attribution models, custom attribution windows, and enterprise features.',
        compareLinks: ['triplewhale-vs-northbeam'],
      },
    ],
    faq: [
      { q: 'What is the best analytics app for Shopify?', a: 'Triple Whale is the best analytics app for most Shopify stores doing $1–10M/yr. For stores spending $100K+/mo on ads, Northbeam\'s more sophisticated ML attribution is worth the higher cost.' },
      { q: 'Do I need a paid attribution tool if I have GA4?', a: 'GA4 uses last-click attribution by default, which severely undercredits top-of-funnel channels (Meta, TikTok) after iOS14. First-party pixel tools like Triple Whale and Northbeam provide significantly more accurate multi-touch attribution.' },
      { q: 'How much does Triple Whale cost?', a: 'Triple Whale starts at $129/mo for stores up to $1M ARR. Growth is $279/mo (up to $5M ARR) and Pro is $499/mo (up to $25M ARR).' },
    ],
  },
  {
    slug: 'upsell',
    category: 'upsell',
    h1: 'Best Shopify Upsell Apps 2026',
    metaDescription: 'We ranked the best Shopify upsell apps — ReConvert and Zipify OneClickUpsell — on ROI, pricing, and use case fit for post-purchase and pre-checkout upsells.',
    intro: 'Upsell apps are one of the highest-ROI investments for Shopify stores — adding $5–25 in revenue per order with zero additional ad spend. The key is matching the right tool to your Shopify plan.',
    apps: [
      {
        appId: 'reconvert',
        rank: 1,
        score: 9.2,
        topReason: 'Best for all stores — highest App Store rating (4.9), best post-purchase ROI, and starts at just $4/mo.',
        compareLinks: ['zipify-vs-reconvert'],
      },
      {
        appId: 'zipify',
        rank: 2,
        score: 8.5,
        topReason: 'Best for Shopify Plus — only app offering true pre-checkout upsells, with A/B testing on entire funnels.',
        compareLinks: ['zipify-vs-reconvert'],
      },
    ],
    faq: [
      { q: 'What is the best upsell app for Shopify?', a: 'ReConvert is the best upsell app for most Shopify stores — it has the highest App Store rating (4.9), starts at $4/mo, and focuses on post-purchase upsell pages that work on all Shopify plans.' },
      { q: 'What is a post-purchase upsell?', a: 'A post-purchase upsell is an offer shown after checkout but before the thank-you page. The customer\'s card is already saved, so they can accept with one click — no re-entering payment details.' },
      { q: 'Does Zipify work on standard Shopify?', a: 'Zipify\'s post-purchase upsells work on all Shopify plans. However, their main differentiator — pre-checkout upsells shown before order confirmation — requires Shopify Plus ($2,300/mo).' },
    ],
  },
];

export function getBestPageBySlug(slug: string): BestPage | undefined {
  return BEST_PAGES.find(p => p.slug === slug);
}
