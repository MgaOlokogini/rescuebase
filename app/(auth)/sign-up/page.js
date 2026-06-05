import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200/60">
        <h1 className="text-3xl font-semibold text-slate-900">Staff registration</h1>
        <p className="mt-3 text-slate-600">Create an account to manage animals, applications, and shelter operations.</p>
        <div className="mt-8 space-y-4">
          <input placeholder="Name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4" />
          <input placeholder="Email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4" />
          <input type="password" placeholder="Password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4" />
          <button className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-white transition hover:bg-slate-700">Create account</button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Already registered? <Link href="/sign-in" className="font-medium text-slate-900">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
