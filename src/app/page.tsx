import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">MadeInUzbekistan.org</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          B2B export directory foundation is ready.
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          We are starting with a high-intent acquisition flow for importers looking for suppliers in Uzbekistan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/find-suppliers-in-uzbekistan" className="rounded-full bg-zinc-950 px-6 py-3 text-white">
            Open acquisition MVP
          </Link>
          <Link href="/leads" className="rounded-full border border-zinc-300 px-6 py-3 text-zinc-900">
            View leads placeholder
          </Link>
        </div>
      </div>
    </main>
  );
}
