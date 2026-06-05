export function Table({ children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>
      <table className="min-w-full divide-y divide-slate-200">{children}</table>
    </div>
  );
}
