import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CleanCenteredCalendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
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
            className="rounded-lg p-4"
          />
        </div>

        {range.from && range.to && (
          <div className="mt-6 text-center text-lg text-gray-700">
            Von <strong>{format(range.from, "dd.MM.yyyy")}</strong> bis{" "}
            <strong>{format(range.to, "dd.MM.yyyy")}</strong>
          </div>
        )}
      </div>
    </div>
  );
}