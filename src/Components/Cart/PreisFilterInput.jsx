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
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Preis (€)</label>
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Von"
          value={von}
          onChange={(e) => setVon(e.target.value)}
          className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <input
          type="number"
          placeholder="Bis"
          value={bis}
          onChange={(e) => setBis(e.target.value)}
          className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
        />
      </div>
      <button
        onClick={handleChange}
        className="mt-3 w-full py-2 border-2 border-red-500 text-white bg-red-500 font-bold hover:bg-white hover:text-red-500 hover:border-red-500 cursor-pointer rounded-2xl rounded-mdsition"
      >
        Filtern
      </button> 
    </div>
  );
}

export default PreisFilterInput;