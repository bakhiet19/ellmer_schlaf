import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useState } from "react";

export default function QuestionStep() {


    const Schema = z.object({
        phone : z.string().min(5 , "Telefonnummer ist zu kurz").max(20, "Telefonnummer ist zu lang").regex(/^\+?\d[\d\s-]{4,}$/, "Bitte geben Sie eine gültige Telefonnummer ein"),

    })

    const {register , handleSubmit ,  formState: { errors }} = useForm({resolver : zodResolver(Schema)})
    const mutation = useMutation({
        mutationFn : (data) => {
        },
        onSuccess : () => {
            toast.success
        },
        
    })

    function onSubmit(data){
        mutation.mutate(data)        
    }


  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative">

        {/* Fortschrittsbalken */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Schritt 1 von 5</span>
            <span>20%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 transition-all duration-300" style={{ width: "20%" }}></div>
          </div>
        </div>

        {/* Frage */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-right">
          Wie lautet Ihre Telefonnummer?
        </h2>
        <p className="text-sm text-gray-500 text-right mb-5 leading-relaxed">
          Bitte geben Sie Ihre Telefonnummer ein, damit wir Sie zur Bestätigung Ihrer Buchung kontaktieren können.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Eingabefeld */}
          <input
            {...register('phone')}
            type="tel"
            placeholder="z. B. 0152 1234567"
            className="w-full px-5 py-3 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder:text-gray-400"
          />
            <p className="text-red-500">{errors?.phone?.message}</p>
          {/* Navigations-Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition cursor-pointer"
              onClick={() => {
                // دالة الرجوع للخطوة السابقة
                console.log("Zurück clicked");
              }}
            >
              <FaArrowLeft /> Zurück
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition cursor-pointer"
            >
              Weiter <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
