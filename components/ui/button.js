export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
