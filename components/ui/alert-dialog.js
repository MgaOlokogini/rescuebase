export function AlertDialog({ title, message, className = "" }) {
  return (
    <div className={`rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900 ${className}`}>
      {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
}
