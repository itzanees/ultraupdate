import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs";

// Simple in-memory rate limiter
const hits = new Map<string, number>();
const WINDOW_MS = 30_000;

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(req: Request) {
  try {
    // Origin check
    const origin = req.headers.get("origin") ?? "";
    const host = req.headers.get("host") ?? "";
    if (origin && !origin.includes(host)) {
      return NextResponse.json(
        { success: false, message: "Invalid origin." },
        { status: 403 }
      );
    }

    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const now = Date.now();
    const last = hits.get(ip) ?? 0;
    if (now - last < WINDOW_MS) {
      return NextResponse.json(
        {
          success: false,
          message: "Please wait a moment before submitting again.",
        },
        { status: 429 }
      );
    }

    const body: Payload = await req.json();

    // Honeypot — silently accept to fool bots
    if (body.website) {
      return NextResponse.json({ success: true, message: "Thank you." });
    }

    // Validate
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "Website Enquiry").trim();
    const message = (body.message ?? "").trim();

    const errors: string[] = [];
    if (!name || name.length > 100)
      errors.push("Please provide a valid name.");
    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 150
    )
      errors.push("Please provide a valid email address.");
    if (phone && !/^[0-9+()\-\s]{6,25}$/.test(phone))
      errors.push("Please provide a valid phone number.");
    if (!message || message.length > 3000)
      errors.push("Message must be between 1 and 3000 characters.");

    if (errors.length) {
      return NextResponse.json(
        { success: false, message: errors.join(" ") },
        { status: 422 }
      );
    }

    // Save to database (best-effort — don't fail the request if DB is down)
    try {
      await prisma.enquiry.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject,
          message,
          ipAddress: ip,
          userAgent: req.headers.get("user-agent") ?? null,
          status: "NEW",
        },
      });
    } catch (dbErr) {
      console.error("Failed to save enquiry to DB:", dbErr);
      // Continue — we still want to notify by email/WhatsApp
    }

    // TODO: Send email notification (Resend / SMTP) — see Phase 7
    // TODO: Send WhatsApp notification (CallMeBot / Cloud API) — see Phase 7

    hits.set(ip, now);
    for (const [key, ts] of hits) {
      if (now - ts > 60_000) hits.delete(key);
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your enquiry has been received — we will be in touch within 24 hours.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}