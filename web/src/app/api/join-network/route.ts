import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import NetworkWelcome from "@/emails/NetworkWelcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, role, building } = body;

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await prisma.networkSignup.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        role: role?.trim() || null,
        building: building?.trim() || null,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("Unique constraint")) {
      return NextResponse.json({ error: "You're already in the network!" }, { status: 409 });
    }
    console.error("Network signup DB error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Maddy at Roving <maddy@roving.money>",
      to: email.trim().toLowerCase(),
      subject: "Come and play in The Rovers' Playground 👋",
      react: NetworkWelcome(),
    });
  } catch (err) {
    console.error("Resend error:", err);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
