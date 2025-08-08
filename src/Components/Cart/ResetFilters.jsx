export default function ResetFilters() {
  const handleReset = () => {
    window.location.reload(); // أو استخدم setState لكل فلتر
  };

  return (
    <button
      onClick={handleReset}
      className="text-sm text-blue-600 underline hover:text-blue-800 transition"
    >
      Alle Filter zurücksetzen
    </button>
  );
}