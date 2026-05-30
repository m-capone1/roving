import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import WaitlistConfirmation from "@/emails/WaitlistConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name, email, userType, country,
    companyName, companySize,
    reasons, aiAgentUsage, wantedFeatures, priorities,
    businessWorkflows, businessBlockers, earlyAccessInterest,
    tags, marketingConsent,
  } = body;

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await prisma.waitlistEntry.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        userType: userType ?? null,
        country: country?.trim() || null,
        companyName: companyName?.trim() || null,
        companySize: companySize || null,
        reasons: Array.isArray(reasons) ? reasons : [],
        aiAgentUsage: aiAgentUsage || null,
        wantedFeatures: Array.isArray(wantedFeatures) ? wantedFeatures : [],
        priorities: Array.isArray(priorities) ? priorities : [],
        businessWorkflows: Array.isArray(businessWorkflows) ? businessWorkflows : [],
        businessBlockers: Array.isArray(businessBlockers) ? businessBlockers : [],
        earlyAccessInterest: earlyAccessInterest || null,
        tags: Array.isArray(tags) ? tags : [],
        marketingConsent: marketingConsent === true,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("Unique constraint")) {
      return NextResponse.json({ error: "This email is already on the waitlist." }, { status: 409 });
    }
    console.error("Waitlist DB error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Maddy at Roving <maddy@roving.money>",
      to: email.trim().toLowerCase(),
      subject: "Welcome to Roving",
      react: WaitlistConfirmation({ name: name.trim() }),
    });
  } catch (err) {
    console.error("Resend error:", err);
    try {
      await resend.emails.send({
        from: "Maddy at Roving <maddy@roving.money>",
        to: "maddy@roving.money",
        subject: "⚠️ Waitlist confirmation email failed",
        text: `A waitlist confirmation email failed to send.\n\nRecipient: ${email.trim().toLowerCase()}\nName: ${name.trim()}\n\nError: ${err instanceof Error ? err.message : String(err)}`,
      });
    } catch (notifyErr) {
      console.error("Failed to send failure notification:", notifyErr);
    }
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
