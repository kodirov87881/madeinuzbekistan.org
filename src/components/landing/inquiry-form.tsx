"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { initialInquiryFormState, submitInquiry } from "@/app/find-suppliers-in-uzbekistan/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded-full bg-zinc-950 px-5 py-3 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit Inquiry"}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;

  return <p className="text-sm text-red-600">{errors[0]}</p>;
}

export function InquiryForm() {
  const [state, formAction] = useActionState(submitInquiry, initialInquiryFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 rounded-2xl border border-zinc-200 p-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-zinc-700" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-zinc-950"
          defaultValue={state.values?.name ?? ""}
          id="name"
          name="name"
          placeholder="Your name"
        />
        <FieldError errors={state.fieldErrors?.name} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-zinc-700" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-zinc-950"
          defaultValue={state.values?.email ?? ""}
          id="email"
          name="email"
          placeholder="you@company.com"
          type="email"
        />
        <FieldError errors={state.fieldErrors?.email} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-zinc-700" htmlFor="productNeed">
          Product Need
        </label>
        <textarea
          className="min-h-36 w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none ring-0 transition focus:border-zinc-950"
          defaultValue={state.values?.productNeed ?? ""}
          id="productNeed"
          name="productNeed"
          placeholder="Example: We are looking for a cotton textile supplier in Uzbekistan."
        />
        <FieldError errors={state.fieldErrors?.productNeed} />
      </div>

      {state.message ? (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ${
            state.success ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </div>
      ) : null}

      <SubmitButton />
    </form>
  );
}
