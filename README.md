# MadeInUzbekistan.org

Initial scaffold for a B2B export directory MVP.

## Stack
- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- Postgres
- Resend

## First delivery focus
- `/find-suppliers-in-uzbekistan`
- inquiry capture
- lead persistence
- email notification
- minimal internal leads page

## Environment
Copy `.env.example` to `.env` and fill values.

Required for persistence:
- `DATABASE_URL`

Required for operator email notification:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `LEADS_NOTIFICATION_EMAIL`

Optional but strongly recommended for protecting `/leads`:
- `LEADS_BASIC_AUTH_USERNAME`
- `LEADS_BASIC_AUTH_PASSWORD`

## Internal leads protection
If `LEADS_BASIC_AUTH_USERNAME` and `LEADS_BASIC_AUTH_PASSWORD` are set, `/leads` is protected with HTTP Basic Auth.

## Commands
```bash
npm install
npm run dev
npx prisma generate
```
