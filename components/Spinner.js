export default function Spinner({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-500">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
