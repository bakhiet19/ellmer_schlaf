import { useState } from "react";

const cities = ['Alle Städte', 'Hamburg', 'Lübeck', 'Kiel'];

export default function Cities() {
  const [selectedCity, setSelectedCity] = useState('Alle Städte');

  return (
    <div>
      <label className="block text-sm font-medium logoText mb-2">Stadt</label>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none cursor-pointer "
      >
        {cities.map((city) => (
          <option className="cursor-pointer " key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}