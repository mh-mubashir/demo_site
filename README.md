# Invoy — Dissolve IT Site

Next.js App Router replica of dissolveit.framer.website, with a real working waitlist form backed by Supabase.

## Deploy in 3 steps

### 1. Create the Supabase table (2 minutes)

1. Go to [supabase.com](https://supabase.com) → create a free project
2. Open **SQL Editor → New query**, paste the contents of `supabase/schema.sql`, and click **Run**
3. Copy your credentials from **Settings → API**:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Deploy to Vercel (2 minutes)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. In **Environment Variables**, add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | `your-service-role-key` |

4. Click **Deploy** — done.

### 3. (Optional) Local dev

```bash
cp .env.local.example .env.local
# fill in the two values above
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Routes

| Route | Description |
|---|---|
| `/` | Home page — all sections |
| `/about-us` | About page placeholder |
| `/contact-us` | Waitlist form → Supabase |
| `/api/contact` | POST handler (server-side) |

## Tech

- Next.js 14 App Router · TypeScript
- Tailwind CSS with custom brand tokens
- DM Sans via `next/font/google`
- Supabase JS client (service role, server-only)
