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

## Commands
```bash
npm install
npm run dev
npx prisma generate
```
