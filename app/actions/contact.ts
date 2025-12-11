"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.API_RESEND_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate input
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "derekoware47@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again."
    };
  }
}
