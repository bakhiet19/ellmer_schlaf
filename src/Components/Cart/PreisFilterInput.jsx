import { useState } from 'react';
function PreisFilterInput({ min = 0, max = 1000, onChange }) {
  const [von, setVon] = useState(min);
  const [bis, setBis] = useState(max);

  const handleChange = () => {
    const vonWert = Math.max(min, Number(von));
    const bisWert = Math.min(max, Number(bis));
    if (vonWert <= bisWert && onChange) {
      onChange([vonWert, bisWert]);
    }
  };

  return (
    <div className="w-full max-w-md mx-autop-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Preisbereich eingeben</h3>
      <div className="flex items-center justify-between space-x-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="von" className="text-sm text-gray-600 mb-1">Von (€)</label>
          <input
            type="number"
            id="von"
            value={von}
            onChange={(e) => setVon(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="bis" className="text-sm text-gray-600 mb-1">Bis (€)</label>
          <input
            type="number"
            id="bis"
            value={bis}
            onChange={(e) => setBis(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>
      <button
        onClick={handleChange}
        className="mt-4 w-full py-2 bg-red-400 text-white font-medium rounded-md hover:bg-red-700 cursor-pointer transition"
      >
        Filtern
      </button>
    </div>
  );
}

export default PreisFilterInput