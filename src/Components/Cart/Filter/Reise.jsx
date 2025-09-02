import { FaDoorOpen, FaPlaneArrival } from "react-icons/fa";
import { Controller, useFormContext } from "react-hook-form";

const Reise = () => {
  const { control, watch } = useFormContext();

  // نراقب قيمة checkIn لتحديد الحد الأدنى للـ checkOut
  const checkInDate = watch("checkIn");

  // اليوم الحالي بصيغة YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
      {/* Check-in */}
      <div className="flex flex-col">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FaPlaneArrival className="logoText" />
          Check-in
        </label>
        <Controller
          name="checkIn"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="date"
              min={today} // منع التواريخ القديمة
              className="w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          )}
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FaDoorOpen className="logoText" />
          Check-out
        </label>
        <Controller
          name="checkOut"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="date"
              min={checkInDate || today} // ما يكون قبل check-in
              className="w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          )}
        />
      </div>
    </div>
  );
};

export default Reise;
