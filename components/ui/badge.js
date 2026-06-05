export function Badge({ children, variant = "default" }) {
  const colors = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-emerald-100 text-emerald-900",
    warning: "bg-amber-100 text-amber-900",
    danger: "bg-rose-100 text-rose-900",
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${colors[variant] || colors.default}`}>{children}</span>;
}
