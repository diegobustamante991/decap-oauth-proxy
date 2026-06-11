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
