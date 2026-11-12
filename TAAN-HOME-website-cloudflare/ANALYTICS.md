# TAAN HOME analytics
Dashboard: https://taanhome.com/admin/analytics (username: admin).
Not live until the configuration below is complete. No historical backfill.

## One-time Cloudflare setup
1. Run `npx wrangler d1 create taan-analytics`.
2. Add the returned database UUID to wrangler.jsonc:
```json
"d1_databases": [{"binding":"ANALYTICS_DB","database_name":"taan-analytics","database_id":"<returned UUID>","migrations_dir":"migrations/analytics"}]
```
Preserve all existing bindings.
3. Run `npx wrangler d1 migrations apply taan-analytics --remote`.
4. Run `npx wrangler secret put ANALYTICS_ADMIN_PASSWORD` and enter a random ASCII password of at least 20 characters. Never commit the password.
5. Deploy using the existing Cloudflare build/deploy workflow. Add a Cloudflare rate limiting rule for POST /api/analytics/event (for example 120 requests/minute/IP, adjusted for shared networks).
6. Accept cookies on the website, visit a collection and click LINE. Sign in to /admin/analytics and verify pageviews and click destinations. Decline cookies and verify that no /api/analytics/event requests are sent.

## Measurement
Existing consent controls gate first-party analytics; Do Not Track is respected. Session IDs exist only in sessionStorage and identify tabs, not unique people. No IP, form values, full referrer URLs or outbound URL parameters are stored. Only page path, click destination/action, referrer hostname and event timestamp are collected. Referrer is document-level, so source reporting is approximate. Browser/ad-blocker restrictions and visitors declining consent reduce counts. Browser submissions can be spoofed; this is directional analytics, not billing data.
Data older than 90 days is deleted on the next successful ingestion. Day grouping uses Bangkok time. Dashboard and report API are protected on the server with Basic authentication over HTTPS, no-store and noindex; credentials never appear in frontend code. Missing configuration fails closed.
