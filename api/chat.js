/**
 * Portfolio AI chat: Vercel serverless function.
 *
 * Proxies chat requests to Google's Gemini API so the API key never reaches the
 * browser. Shares its guardrails + Gemini call with the local dev server via
 * ./_beepie.js.
 *
 * Required env vars (set in the Vercel project):
 *   GEMINI_API_KEY    your Google AI (Gemini) API key
 * Optional env vars:
 *   GEMINI_MODEL      defaults to "gemini-2.0-flash"
 *   ALLOWED_ORIGINS   comma-separated allowlist for CORS (defaults to "*")
 */
import { getBeepieReply } from './_beepie.js';

function setCors(req, res) {
  const allowed = (process.env.ALLOWED_ORIGINS || '*')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = req.headers.origin;
  if (allowed.includes('*')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin && allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const result = await getBeepieReply({ messages: body.messages, context: body.context });
    if (result.error) {
      return res.status(result.status).json({ error: result.error });
    }
    return res.status(200).json({ reply: result.reply });
  } catch (err) {
    console.error('chat handler error', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
