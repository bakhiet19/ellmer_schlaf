import { useState } from 'react';

function PreisFilterInput({ min = 0, max = 1000, onChange }) {
  const [von, setVon] = useState(min);
  const [bis, setBis] = useState(max);



  return (
    <div>
      <label className="block text-sm font-medium logoText mb-2">Preis (€)</label>
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Von"
          value={von}
          onChange={(e) => setVon(e.target.value)}
          className="w-1/2 px-3 py-2 border rounded-md focus:outline-none"
        />
        <input
          type="number"
          placeholder="Bis"
          value={bis}
          onChange={(e) => setBis(e.target.value)}
          className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
        />
      </div>
      
    </div>
  );
}

export default PreisFilterInput;