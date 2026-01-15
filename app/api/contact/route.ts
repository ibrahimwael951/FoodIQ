import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try { 
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"FOODIQ Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      subject: "New Message from your FOODIQ Website, YAHOOO!!",
      html: `
        <h1><b>Name:</b> ${name}</h1>
        <h2><b>Email:</b> ${email}</h2>
        <h3><b>Message:</b> ${message}</h3>
       
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
