export function Card({ title, description, children, className = "" }) {
  return (
    <section className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {title ? <h2 className="text-xl font-semibold text-slate-900">{title}</h2> : null}
      {description ? <p className="mt-2 text-slate-600">{description}</p> : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}
