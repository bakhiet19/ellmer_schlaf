
const Spinner = () => {
  return (
    <div class="flex flex-col items-center justify-center h-40">
    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
    <p class="mt-4 text-gray-600 text-sm font-medium">Lade Daten... Bitte warten</p>
</div>
  );
};

export default Spinner;