"use server";

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
    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // For now, we'll just log it
    console.log("Contact form submission:", { name, email, message });

    // Example with Resend (uncomment and configure):
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'derekoware47@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    // });

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again."
    };
  }
}
