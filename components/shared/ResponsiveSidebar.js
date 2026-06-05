export function ResponsiveSidebar({ children }) {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-slate-50 p-6 md:block">
      <div className="space-y-4">{children}</div>
    </aside>
  );
}
