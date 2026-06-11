/**
 * Decap CMS OAuth proxy — Vercel serverless function.
 * Redirects to GitHub OAuth authorize endpoint.
 */
export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `https://${req.headers.host}/api/callback`;
  const scope = 'repo,user';

  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`
  );
}
