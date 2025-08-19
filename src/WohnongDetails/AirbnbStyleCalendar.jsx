import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, isBefore, startOfToday } from "date-fns";
import { de } from "date-fns/locale";
import "react-day-picker/dist/style.css";

const AirbnbStyleCalendar = () => {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  // مثال على أسعار الأيام (ممكن تربطها بقاعدة بيانات)
  const prices = {
    "2025-08-16": "120€",
    "2025-08-17": "135€",
    "2025-08-18": "110€",
    "2025-08-19": "140€",
    "2025-08-20": "125€"
  };

  // منع الأيام قبل اليوم
  const disabledDays = [
    {
      before: startOfToday()
    }
  ];

  // تخصيص محتوى كل يوم
  const renderDay = (date) => {
    const key = format(date, "yyyy-MM-dd");
    const price = prices[key];

    return (
      <div className="relative group">
        <div>{date.getDate()}</div>
        {price && (
          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-black logoTextWhite text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
            {price}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="logoBGWhite p-4  rounded-xl shadow-xl w-full">
        <h2 className="text-md mb-2 text-left">Wähle deine Reisedaten</h2>

        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          showOutsideDays
          locale={de}
          disabled={disabledDays}
          renderDay={renderDay}
          className="flex flex-wrap justify-center items-center w-full"
        />

        {range.from && range.to && (
          <div className="mt-6 text-center logoText text-lg">
            Von: <strong>{format(range.from, "dd.MM.yyyy", { locale: de })}</strong> bis: <strong>{format(range.to, "dd.MM.yyyy", { locale: de })}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirbnbStyleCalendar;