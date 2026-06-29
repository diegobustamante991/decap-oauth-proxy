# Decap CMS OAuth Proxy

A tiny serverless OAuth proxy that lets Decap CMS authenticate with GitHub when your site is hosted outside Netlify (e.g., AWS Amplify).

## Deploy to Vercel (one click)

1. Push this folder to a new GitHub repo (or use a subfolder deploy)
2. Import to Vercel: https://vercel.com/new
3. Set environment variables:
   - `GITHUB_CLIENT_ID` = `Ov23lioulV8YRpVgvI86`
   - `GITHUB_CLIENT_SECRET` = (your OAuth App secret)
4. Deploy

## After deploying

1. Copy your Vercel deployment URL (e.g. `https://decap-oauth-proxy.vercel.app`)
2. Update your GitHub OAuth App's **callback URL** to: `https://YOUR-VERCEL-URL/callback`
3. Update `config.yml` in your portfolio to set `base_url` to your Vercel URL

## How it works

- `/auth` → Redirects user to GitHub's OAuth authorization page
- `/callback` → Receives the code from GitHub, exchanges it for a token, and sends it back to the CMS admin window via postMessage

---

# Portfolio AI Chat (Gemini)

`/chat` is a serverless endpoint that powers the portfolio's AI assistant. It
proxies requests to Google's Gemini API so the API key stays server-side, and it
enforces a strict system prompt + knowledge base so the assistant only discusses
Diego's work.

## Environment variables (Vercel project settings)

- `GEMINI_API_KEY` (required): your Google AI / Gemini API key.
- `GEMINI_MODEL` (optional): defaults to `gemini-2.0-flash`.
- `ALLOWED_ORIGINS` (optional): comma-separated CORS allowlist, e.g.
  `https://www.diegoezbustamante.com,https://diegoezbustamante.com,https://www.bustamantediego.com,https://bustamantediego.com,https://main.d18cnyl62ajl8.amplifyapp.com,http://localhost:5173`.
  Defaults to `*`. Set it to lock the endpoint to your own site.

## Files

- `api/chat.js` — the endpoint (validation, CORS, guardrails, Gemini call).
- `api/_knowledge.js` — the assistant's only source of facts. Edit this to update
  what it knows; redeploy this proxy (no frontend rebuild needed).

## Frontend wiring

In the portfolio's Amplify env vars (App settings → Environment variables), set
`VITE_CHAT_ENDPOINT` to `https://YOUR-VERCEL-URL/chat`. The chat widget renders
only when that variable is present.

## How it works

- `/chat` → accepts `POST { messages: [{ role, content }] }`, prepends the system
  prompt + knowledge base, calls Gemini, returns `{ reply }`.

## Test locally / after deploy

```bash
curl -s -X POST https://YOUR-VERCEL-URL/chat \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","content":"What did Diego do at AT&T?"}]}'
```

You should get a JSON `{ "reply": "..." }` about Diego's AT&T work. Ask something
off-topic (e.g. "write me a poem") and it should politely decline.
