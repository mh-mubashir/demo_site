import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// Server-side only — never exposed to the browser
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  let body: { name?: unknown; email?: unknown; role?: unknown; message?: unknown };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, role, message } = body;

  // Validate required fields
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Full name is required" }, { status: 422 });
  }

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "A valid email address is required" },
      { status: 422 }
    );
  }

  const { error } = await supabase.from("waitlist").insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: typeof role === "string" && role.trim() ? role.trim() : null,
    message: typeof message === "string" && message.trim() ? message.trim() : null,
  });

  if (error) {
    // Unique constraint violation → email already registered
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist!" },
        { status: 409 }
      );
    }
    console.error("Supabase insert error:", error.message);
    return NextResponse.json(
      { error: "Failed to save your entry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
