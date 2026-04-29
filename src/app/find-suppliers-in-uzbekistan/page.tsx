import type { Metadata } from "next";
import { InquiryForm } from "@/components/landing/inquiry-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/find-suppliers-in-uzbekistan" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Find Suppliers in Uzbekistan",
  description: siteConfig.description,
  url: `${siteConfig.url}/find-suppliers-in-uzbekistan`,
};

export default function FindSuppliersPage() {
  return (
    <main className="bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Acquisition MVP</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Find Trusted Suppliers in Uzbekistan</h1>
          <p className="text-lg leading-8 text-zinc-600">
            Source products from Uzbekistan faster. Send us your requirement and we’ll help you connect with relevant suppliers.
          </p>
          <a href="#inquiry-form" className="inline-flex rounded-full bg-zinc-950 px-6 py-3 text-white">Send Your Requirement</a>
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Why Source from Uzbekistan</h2>
          </div>
          <ul className="space-y-4 text-zinc-600">
            <li>Growing export-oriented manufacturing base</li>
            <li>Access to textile, agriculture, food, industrial, and consumer goods suppliers</li>
            <li>Competitive regional sourcing opportunity</li>
            <li>Direct connection to suppliers and exporters</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6"><h3 className="font-semibold">1. Send your product requirement</h3><p className="mt-2 text-zinc-600">Tell us what product or supplier you are looking for.</p></div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6"><h3 className="font-semibold">2. We review your request</h3><p className="mt-2 text-zinc-600">We identify relevant supplier categories and potential matches.</p></div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6"><h3 className="font-semibold">3. You receive the next step</h3><p className="mt-2 text-zinc-600">We follow up with relevant supplier options or contact direction.</p></div>
          </div>
        </div>
      </section>

      <section id="inquiry-form" className="border-t border-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Send Your Requirement</h2>
            <p className="text-zinc-600">We’ll use your request to identify relevant suppliers and follow up by email.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Built for Serious B2B Sourcing</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            MadeInUzbekistan.org is focused on helping buyers discover suppliers in Uzbekistan across export-oriented categories. This page is designed for real sourcing inquiries, not general browsing.
          </p>
        </div>
      </section>
    </main>
  );
}
