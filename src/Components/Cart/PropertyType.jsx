import { useState } from "react";

const types = ['Alle Typen', 'Wohnung', 'Haus', 'Studio', 'Gewerbe'];

export default function PropertyType() {
  const [selectedType, setSelectedType] = useState('Alle Typen');

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Typ</label>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}