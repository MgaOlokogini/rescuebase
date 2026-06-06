import Link from "next/link";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 flex flex-col gap-6">
      
      {/*Landing Page Header here */}
      <Header role={null} />

      {/* 2. Your Main Card Content */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-slate-200/40">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">RescueBase</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Shelter management built for adopters, staff, and managers.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Organize animal profiles, manage foster workflows, and monitor shelter operations from one modular Next.js App Router experience.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/dashboard" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-slate-300 hover:bg-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Adopter Portal</h2>
            <p className="mt-2 text-slate-600">Browse pets, take the match quiz, and request a foster or adoption.</p>
          </Link>
          <Link href="/staff-home" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-slate-300 hover:bg-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Staff Hub</h2>
            <p className="mt-2 text-slate-600">Quick intake forms, passport history, and pipeline tools for operations teams.</p>
          </Link>
          <Link href="/analytics" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition hover:border-slate-300 hover:bg-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">Manager Dashboard</h2>
            <p className="mt-2 text-slate-600">Review shelter analytics, LOS alerts, and high-risk adoption watchlists.</p>
          </Link>
        </section>
      </div>
    </main>
  );
}
