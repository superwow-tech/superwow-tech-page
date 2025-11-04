// Nodemailer Configuration
// You need to set these environment variables in your .env.local file
// For Gmail, you'll need an App Password: https://support.google.com/accounts/answer/185833

export const NODEMAILER_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '', // App Password for Gmail
  },
};

// Email request interface
export interface EmailRequest {
  from_name: string;
  from_email: string;
  message: string;
}

// Default recipient email
export const RECIPIENT_EMAIL = 'sarunas.jaraminas@gmail.com';

// Sender email (usually the same as SMTP_USER)
export const SENDER_EMAIL = process.env.SMTP_USER || RECIPIENT_EMAIL;

