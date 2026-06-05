export function Chart({ title, description, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-slate-50 p-6 ${className}`}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-6 h-40 rounded-3xl bg-white" />
    </div>
  );
}
