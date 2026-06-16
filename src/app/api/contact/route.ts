import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { user_name, user_email, message } = await req.json();

    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
      replyTo: user_email,
      to: "attaulbari080@gmail.com",
      subject: `New Message from ${user_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #60a5fa;">New Contact Message</h2>
          <hr style="border: 1px solid #1a1a1a;" />
          <p><strong>Name:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #111; padding: 16px; border-radius: 8px; color: #d4d4d4;">${message}</p>
          <hr style="border: 1px solid #1a1a1a;" />
          <p style="color: #a3a3a3; font-size: 12px;">Sent from your portfolio contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error";
    console.error("Contact form error:", errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
