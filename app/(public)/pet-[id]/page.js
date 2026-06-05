export default function PetProfilePage({ params }) {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200/60">
        <h1 className="text-3xl font-semibold text-slate-900">Pet profile: {params.id}</h1>
        <p className="mt-4 text-slate-600">This page will display the animal's passport history, care details, and adoption status.</p>
      </div>
    </div>
  );
}
