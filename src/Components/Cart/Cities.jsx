import { useState } from "react";

const cities = ['Alle Städte', 'Hamburg', 'Lübeck', 'Kiel'];

export default function Cities() {
  const [selectedCity, setSelectedCity] = useState('Alle Städte');

  return (
    <div className="flex gap-4 justify-center mb-8 flex-wrap">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          className={`px-4 py-2 rounded-lg cursor-pointer border border-red-400 ${
            selectedCity === city
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } transition-colors duration-300`}
        >
          {city}
        </button>
      ))}
    </div>
  );
}