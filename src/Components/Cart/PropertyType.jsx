import {
  FaThLarge,
  FaHome,
  FaBuilding,
  FaDoorOpen,
  FaWarehouse,
} from "react-icons/fa";
import { Controller, useFormContext } from "react-hook-form";

const types = [
  { label: "Alle Typen", icon: <FaThLarge /> },
  { label: "Wohnung", icon: <FaBuilding /> },
  { label: "Haus", icon: <FaHome /> },
  { label: "Studio", icon: <FaDoorOpen /> },
  { label: "Gewerbe", icon: <FaWarehouse /> },
];

export default function PropertyType() {
  const { control, watch } = useFormContext();
  const selectedType = watch("typ") || "Alle Typen";

  return (
    <div className="mb-2 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        🏠 Typ
      </label>
      <div className="relative">
        <Controller
          name="typ"
          control={control}
          defaultValue="Alle Typen"
          render={({ field }) => (
            <select
              {...field}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 appearance-none"
            >
              {types.map((type) => (
                <option key={type.label} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
          )}
        />

        {/* أيقونة على يمين السلكت */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
          {types.find((t) => t.label === selectedType)?.icon || <FaThLarge />}
        </div>
      </div>
    </div>
  );
}
