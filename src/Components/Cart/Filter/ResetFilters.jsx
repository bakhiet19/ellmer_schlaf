export default function ResetFilters() {
  const handleReset = () => {
    window.location.reload(); // أو استخدم setState لكل فلتر
  };

  return (
    <button
      onClick={handleReset}
      className="text-sm logoText underline hoverLogo transition cursor-pointer"
    >
      Alle Filter zurücksetzen
    </button>
  );
}