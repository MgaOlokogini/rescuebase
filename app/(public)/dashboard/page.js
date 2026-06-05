export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/40">
          <h1 className="text-3xl font-semibold text-slate-900">Adopter dashboard</h1>
          <p className="mt-3 text-slate-600">Browse adoptable animals, explore care history, and start your adoption inquiry.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">Pet search</div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">Featured matches</div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">Foster opportunities</div>
        </section>
      </div>
    </div>
  );
}
