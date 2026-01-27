import { betterAuth, string } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS
  }
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false
      },
      phone: {
        type: "string",
        required: false
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false
      }
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`
        const info = await transporter.sendMail({
          from: '"Prisma Blog" <prismablog@ph.com>',
          to: user.email,
          subject: "Please verify email",
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

        <!-- Header -->
        <tr>
          <td style="background-color:#4f46e5; padding:20px; text-align:center;">
            <h1 style="color:#ffffff; margin:0; font-size:24px;">
              Prisma Blog
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:30px; color:#333333;">
            <h2 style="margin-top:0;">Verify your email address</h2>

            <p style="font-size:15px; line-height:1.6;">
              Hi ${user.name},<br/><br/>
              Thank you for signing up for <b>Prisma Blog</b>.
              Please confirm your email address by clicking the button below.
            </p>

            <!-- Button -->
            <div style="text-align:center; margin:30px 0;">
              <a href="${verificationUrl}"
                 style="background-color:#4f46e5; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:6px; font-size:16px; display:inline-block;">
                Verify Email
              </a>
            </div>

            <p style="font-size:14px; color:#555555; line-height:1.6;">
              If the button doesn’t work, copy and paste this link into your browser:
            </p>

            <p style="word-break:break-all; font-size:13px; color:#4f46e5;">
              ${verificationUrl}
            </p>

            <p style="font-size:14px; color:#777777; margin-top:30px;">
              If you did not create an account, you can safely ignore this email.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#888888;">
            © 2026 Prisma Blog. All rights reserved.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`
        })

        console.log("Message sent:", info.messageId)
      } catch (error: any) {
        console.log({ error: error });
        throw error;
      }
    },
  },

  socialProviders: {
    google: {
      prompt: "select_account",
      accessType: 'offline',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

});     