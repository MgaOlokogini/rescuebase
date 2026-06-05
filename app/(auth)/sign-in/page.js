import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200/60">
        <h1 className="text-3xl font-semibold text-slate-900">Welcome back</h1>
        <p className="mt-3 text-slate-600">Sign in to access staff workflows and shelter tools.</p>
        <div className="mt-8 space-y-4">
          <input placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4" />
          <input type="password" placeholder="Password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4" />
          <button className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-white transition hover:bg-slate-700">Sign in</button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Need an account? <Link href="/sign-up" className="font-medium text-slate-900">Create one</Link>
        </p>
      </div>
    </div>
  );
}
