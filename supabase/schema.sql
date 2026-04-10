-- Waitlist table for Invoy early-access sign-ups
-- Run this in: Supabase Dashboard → SQL Editor → New query

CREATE TABLE IF NOT EXISTS waitlist (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL UNIQUE,
  role       text,
  message    text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Optional: enable Row Level Security so only your service role can read/write
-- (Supabase dashboard: Authentication → Policies → Enable RLS on waitlist)
-- ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
