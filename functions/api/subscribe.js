// Cloudflare Pages Function — POST /api/subscribe
// Shared backend: same Airtable base + Resend + Beehiiv as shopify-fee-calc
// source tag identifies this site in Airtable

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function onRequestPost({ request, env }) {
  try {
    const { email, source, newsletter } = await request.json();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ error: 'Invalid email' }, 400);
    }

    const results = await Promise.allSettled([
      saveToAirtable(email, source, newsletter, env),
      newsletter ? addToBeehiiv(email, source, env) : Promise.resolve(),
      sendConfirmationEmail(email, source, newsletter, env),
    ]);

    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length === results.length) {
      console.error('All operations failed:', failed.map(f => f.reason));
      return json({ error: 'Internal error' }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error('subscribe error:', err);
    return json({ error: 'Bad request' }, 400);
  }
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

async function saveToAirtable(email, source, newsletter, env) {
  if (!env.AIRTABLE_API_KEY || !env.AIRTABLE_BASE_ID) return;
  const sourceValue = `${source || 'app-compare'} | newsletter:${newsletter ? 'yes' : 'no'} | ${new Date().toISOString().slice(0, 10)}`;
  const res = await fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/Subscribers`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: { Email: email, Source: sourceValue } }),
    }
  );
  if (!res.ok) throw new Error(`Airtable ${res.status}: ${await res.text()}`);
}

async function addToBeehiiv(email, source, env) {
  if (!env.BEEHIIV_API_KEY || !env.BEEHIIV_PUB_ID) return;
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        custom_fields: [{ name: 'source', value: source || 'app-compare' }],
      }),
    }
  );
  if (!res.ok) throw new Error(`Beehiiv ${res.status}: ${await res.text()}`);
}

async function sendConfirmationEmail(email, source, newsletter, env) {
  if (!env.RESEND_API_KEY) return;

  const html = newsletter
    ? `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
<h2 style="margin:0 0 8px;font-size:20px">You're on the list 🎉</h2>
<p style="color:#555;margin:0 0 16px">Thanks for signing up for <strong>Shopify Profit Weekly</strong>. One actionable tip per week — no fluff.</p>
<p style="color:#555;margin:0 0 16px">While you wait, explore more comparisons on <a href="https://app-compare.com" style="color:#2563eb">app-compare.com</a>:</p>
<ul style="color:#555;padding-left:20px;margin:0 0 24px">
  <li style="margin-bottom:8px"><a href="https://app-compare.com/compare/klaviyo-vs-mailchimp/" style="color:#2563eb">Klaviyo vs Mailchimp</a> — best email marketing app</li>
  <li style="margin-bottom:8px"><a href="https://app-compare.com/compare/yotpo-vs-judgeme/" style="color:#2563eb">Yotpo vs Judge.me</a> — best reviews app</li>
  <li style="margin-bottom:8px"><a href="https://app-compare.com/compare/gorgias-vs-tidio/" style="color:#2563eb">Gorgias vs Tidio</a> — best customer support app</li>
</ul>
<p style="color:#999;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin:0">
  You subscribed via app-compare.com. Unsubscribe any time by replying "unsubscribe".
</p>
</body></html>`
    : `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
<h2 style="margin:0 0 8px;font-size:20px">Got it ✓</h2>
<p style="color:#555;margin:0 0 16px">We'll let you know when we update this comparison or publish new Shopify app reviews. Bookmark <a href="https://app-compare.com" style="color:#2563eb">app-compare.com</a> to return any time.</p>
<p style="color:#999;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin:0">
  You submitted your email via app-compare.com.
</p>
</body></html>`;

  const subject = newsletter
    ? 'Welcome to Shopify Profit Weekly 🎉'
    : 'You\'re set — app-compare.com';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'App Compare <hello@shopify-fee-calc.com>',
      to: email,
      subject,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
