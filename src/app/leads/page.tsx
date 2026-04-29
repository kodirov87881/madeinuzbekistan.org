import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getLeads() {
  if (!process.env.DATABASE_URL) {
    return { configured: false as const, leads: [] };
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return { configured: true as const, leads };
  } catch (error) {
    console.error("Failed to load leads", error);
    return { configured: true as const, leads: [] };
  }
}

export default async function LeadsPage() {
  const { configured, leads } = await getLeads();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Internal MVP</p>
        <h1 className="text-3xl font-semibold tracking-tight">Leads inbox</h1>
        <p className="text-zinc-600">
          This is the first minimal internal view for acquisition inquiries from the landing page.
        </p>
      </div>

      {!configured ? (
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
          DATABASE_URL is not configured yet. Add it before testing persistence.
        </div>
      ) : null}

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-zinc-50">
            <tr className="text-left text-sm text-zinc-500">
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Product Need</th>
              <th className="px-4 py-3 font-medium">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white text-sm">
            {leads.length ? (
              leads.map((lead) => (
                <tr key={lead.id} className="align-top">
                  <td className="px-4 py-3 text-zinc-500">{lead.createdAt.toISOString().slice(0, 10)}</td>
                  <td className="px-4 py-3 font-medium text-zinc-900">{lead.name}</td>
                  <td className="px-4 py-3 text-zinc-700">{lead.email}</td>
                  <td className="px-4 py-3 text-zinc-700">{lead.productNeed}</td>
                  <td className="px-4 py-3 text-zinc-500">{lead.source}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-6 text-zinc-500" colSpan={5}>
                  No leads yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
