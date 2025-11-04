import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NODEMAILER_CONFIG, RECIPIENT_EMAIL, SENDER_EMAIL, type EmailRequest } from '../../../lib/config/nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { from_name, from_email, message } = body;

    // Validate required fields
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Nodemailer is configured
    if (!NODEMAILER_CONFIG.auth.user || !NODEMAILER_CONFIG.auth.pass) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please check your environment variables.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: NODEMAILER_CONFIG.host,
      port: NODEMAILER_CONFIG.port,
      secure: NODEMAILER_CONFIG.secure,
      auth: NODEMAILER_CONFIG.auth,
    });

    // Verify transporter configuration
    await transporter.verify();

    // 1. Auto-reply email to customer
    const autoReplyOptions = {
      from: '"Superwow Tech Studio" <' + SENDER_EMAIL + '>',
      to: from_email,
      subject: "We've received your message",
      text: `Hi ${from_name},

Thanks for your message! We've got your request and we'll take care of it as quickly as possible.

Respectfully, 

Superwow Tech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p>Hi ${from_name},</p>
          <p>Thanks for your message! We've got your request and we'll take care of it as quickly as possible.</p>
          <p>Respectfully,</p>
          <p><strong>Superwow Tech</strong></p>
        </div>
      `,
    };

    // 2. Notification email to recipient
    const notificationOptions = {
      from: `"${from_name}" <${SENDER_EMAIL}>`,
      replyTo: from_email,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${from_name}`,
      text: `${message}

This message was sent from you`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 20px;">${message}</div>
          <p style="color: #666; font-size: 14px;">This message was sent from you</p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(autoReplyOptions),
      transporter.sendMail(notificationOptions),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}

