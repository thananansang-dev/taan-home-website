# TAAN HOME — Cloudflare deployment

This project is prepared for Cloudflare Workers.

## First deployment

1. Authenticate Wrangler without sharing credentials in chat:

   ```sh
   npx wrangler login
   ```

2. Add the Meta Conversion API token as an encrypted Worker secret:

   ```sh
   npx wrangler secret put META_CAPI_ACCESS_TOKEN
   ```

3. Deploy:

   ```sh
   npm run deploy:cloudflare
   ```

`META_PIXEL_ID` already falls back to `1084027037571279` in the application.
It may optionally be configured as a normal Cloudflare environment variable.

## Custom domain

After the Worker is live, open the Worker in Cloudflare Dashboard and use
Settings > Domains & Routes > Add > Custom Domain. Keep the existing site live
until the custom domain reports Active.

## Security

Never commit `.env`, `.dev.vars`, Cloudflare API tokens, or the Meta access
token. They are ignored by this repository and must be stored as Cloudflare
secrets.
