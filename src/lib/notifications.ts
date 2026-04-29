import { Resend } from "resend";

export type LeadNotificationInput = {
  id: string;
  name: string;
  email: string;
  productNeed: string;
  source: string;
  createdAt: Date;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function sendLeadNotification(input: LeadNotificationInput) {
  const resend = getResendClient();
  const to = process.env.LEADS_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!resend || !to) {
    return {
      sent: false as const,
      reason: "missing-config",
    };
  }

  await resend.emails.send({
    from,
    to,
    subject: `New supplier inquiry from ${input.name}`,
    text: [
      "A new inquiry was submitted on MadeInUzbekistan.org.",
      "",
      `Lead ID: ${input.id}`,
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Source: ${input.source}`,
      `Created: ${input.createdAt.toISOString()}`,
      "",
      "Product Need:",
      input.productNeed,
    ].join("\n"),
  });

  return {
    sent: true as const,
  };
}
