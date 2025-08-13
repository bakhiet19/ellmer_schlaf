import { useState } from "react";

export default function RoomFilter() {
  const [rooms, setRooms] = useState('');

  return (
    <div>
      <label className="block text-sm font-medium logoText mb-2">Zimmeranzahl</label>
      <select
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none"
      >
        <option value="">Alle</option>
        <option value="1">1 Zimmer</option>
        <option value="2">2 Zimmer</option>
        <option value="3">3 Zimmer</option>
        <option value="4">4 Zimmer</option>
        <option value="5">5+ Zimmer</option>
      </select>
    </div>
  );
}