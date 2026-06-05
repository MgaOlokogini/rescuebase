"use client";

import Link from "next/link";

export function MobileNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.05)] md:hidden">
      <div className="flex justify-between gap-2">
        <Link href="/dashboard" className="flex-1 rounded-2xl bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-700">Adopt</Link>
        <Link href="/staff-home" className="flex-1 rounded-2xl bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-700">Staff</Link>
      </div>
    </nav>
  );
}
