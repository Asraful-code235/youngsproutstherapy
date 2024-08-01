import { transporter } from "@/app/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  data: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body.data;

    const notifyEmail = process.env.ADMIN_EMAIL_ADDRESS;

    if (notifyEmail) {
      await transporter.sendMail({
        from: `"Young sprouts Therapy" <${process.env.EMAIL_ADDRESS}>`,
        to: notifyEmail,
        subject: `You have received an email`,
        text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
        `,
      });

      return NextResponse.json({ status: 200, message: "Email sent" });
    } else {
      return NextResponse.json({
        status: 400,
        message: "No admin email address provided",
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
