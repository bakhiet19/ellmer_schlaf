import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CleanCenteredCalendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  // دالة لإرجاع السعر حسب اليوم
  const getPriceForDate = (date) => {
    const day = date.getDate();
    return 80 + (day % 10); // مثال: سعر متغير
  };

  // نولد تواريخ الشهر الحالي مع الأسعار
  const today = new Date();
  const daysWithPrices = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
    return {
      date,
      label: `${getPriceForDate(date)}€`
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-0">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          🗓️ Wähle deine Reisedaten
        </h2>

        <div className="flex justify-center">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            fromDate={new Date()}
            showOutsideDays
            modifiersClassNames={{
              selected: "bg-blue-500 text-white",
              range_start: "bg-blue-600 text-white",
              range_end: "bg-blue-600 text-white",
              range_middle: "bg-blue-100 text-blue-800"
            }}
            className="rounded-lg p-0"
            footer={
              <div className="mt-4 text-center text-sm text-gray-600">
                {range.from && range.to ? (
                  <>
                    Von <strong>{format(range.from, "dd.MM.yyyy")}</strong> bis{" "}
                    <strong>{format(range.to, "dd.MM.yyyy")}</strong>
                  </>
                ) : (
                  "Bitte wähle ein Datum"
                )}
              </div>
            }
          />
        </div>

        {/* عرض الأسعار بشكل منفصل تحت التقويم */}
        <div className="grid grid-cols-5 gap-2 mt-6 text-sm text-gray-700">
          {daysWithPrices.map(({ date, label }) => (
            <div key={date.toISOString()} className="text-center">
              {format(date, "dd.MM")} – {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}