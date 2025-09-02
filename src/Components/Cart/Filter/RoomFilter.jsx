import { Controller, useFormContext } from "react-hook-form";

export default function RoomFilter() {
  const { control } = useFormContext();

  return (
    <div className="mb-2 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        🛏️ Anzahl der Betten
      </label>
      <Controller
        name="anzahl"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select
            {...field}
            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 appearance-none"
          >
            <option value="">Alle</option>
            <option value="1">1 Bett</option>
            <option value="2">2 Betten</option>
            <option value="3">3 Betten</option>
            <option value="4">4 Betten</option>
            <option value="5">5+ Betten</option>
          </select>
        )}
      />
    </div>
  );
}
