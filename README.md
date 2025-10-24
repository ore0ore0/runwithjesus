# Run with Jesus

Private, bilingual running crew site. Next.js 16 (App Router), @vercel/postgres, @vercel/blob, NextAuth email allowlist, next-intl.

## Quick start
1. `npm i`
2. `vercel link && vercel env pull .env`
3. Fill `.env` values (`NEXTAUTH_SECRET`, `EMAIL_SERVER`, `EMAIL_FROM`, `ALLOWLIST_EMAILS`)
4. `npm run dev`
5. In another terminal: `npm run seed`

## Deploy
- Push to GitHub `ore0ore0/runwithjesus` and import in Vercel (Hobby/free).
- Ensure **Postgres** and **Blob** integrations are added.
- Set Env Vars in Project → Settings → Environment Variables.

## Accessibility & Layout
- Neutral palette, high contrast, semantic HTML, focus-visible rings.
- Responsive grid: 1c ≤480, 2c 768–1024, 3c ≥1280 (see `components/GestaltGrid.tsx`).

## Notes on builds & data fetching
Pages that read from Postgres are set to dynamic rendering (`export const dynamic = 'force-dynamic'`) and run on the Node.js runtime.
This avoids Next.js trying to prerender them at build time (which would require `POSTGRES_URL` during `next build`).

For local dev, ensure `.env` has `POSTGRES_URL` (pull from Vercel via `vercel env pull .env`), or run `npm run dev` which fetches at request-time.

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cc29d62 (clean deploy bundle)


### Runtime configuration
This project relies on per-route runtime exports (no `vercel.json`).
- DB/Auth routes: `export const runtime = 'nodejs'`
- Upload routes: `export const runtime = 'edge'`
<<<<<<< HEAD
>>>>>>> 2a033da (clean deploy bundle)
=======
>>>>>>> cc29d62 (clean deploy bundle)
