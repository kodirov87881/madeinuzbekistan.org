"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { sendLeadNotification } from "@/lib/notifications";
import { prisma } from "@/lib/prisma";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  productNeed: z
    .string()
    .trim()
    .min(10, "Please describe what product or supplier you need.")
    .max(2000, "Please keep the request under 2000 characters."),
});

export type InquiryFormState = {
  success: boolean;
  message: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    productNeed?: string[];
  };
  values?: {
    name?: string;
    email?: string;
    productNeed?: string;
  };
};

export const initialInquiryFormState: InquiryFormState = {
  success: false,
  message: "",
};

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    productNeed: String(formData.get("productNeed") ?? ""),
  };

  const parsed = inquirySchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
      values,
    };
  }

  if (!process.env.DATABASE_URL) {
    return {
      success: false,
      message: "Database is not configured yet. Add DATABASE_URL to continue.",
      values,
    };
  }

  try {
    const lead = await prisma.lead.create({
      data: {
        ...parsed.data,
        source: "find-suppliers-in-uzbekistan",
      },
    });

    try {
      await sendLeadNotification(lead);
    } catch (error) {
      console.error("Failed to send lead notification", error);
    }

    revalidatePath("/leads");

    return {
      success: true,
      message: "Thank you. Your inquiry has been received. We’ll review it and follow up by email.",
      values: {
        name: "",
        email: "",
        productNeed: "",
      },
    };
  } catch (error) {
    console.error("Failed to save inquiry", error);

    return {
      success: false,
      message: "Something went wrong while saving your inquiry. Please try again.",
      values,
    };
  }
}
