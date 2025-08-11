import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const phoneSchema = z.object({
  phone: z
    .string()
    .min(5, "Telefonnummer ist zu kurz")
    .max(20, "Telefonnummer ist zu lang")
    .regex(/^\+?\d[\d\s-]{4,}$/, "Bitte geben Sie eine gültige Telefonnummer ein"),
});

export default function QuestionStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(phoneSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log("Sende Daten:", data);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onSuccess: () => {
      toast.success("Telefonnummer erfolgreich gesendet!");
    },
    onError: () => {
      toast.error("Fehler beim Senden der Telefonnummer.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
<div className="relative min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center px-4 questions">
  {/* طبقة تغطية داكنة */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* مربع الأسئلة */}
  <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
    {/* Fortschrittsbalken */}
    <div>
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Schritt 1 von 5</span>
        <span>20%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: "20%" }}></div>
      </div>
    </div>

    {/* Frage */}
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-red-500">Wie lautet Ihre Telefonnummer?</h2>
      <p className="text-sm text-gray-600 leading-relaxed">
        Bitte geben Sie Ihre Telefonnummer ein, damit wir Sie zur Bestätigung Ihrer Buchung kontaktieren können.
      </p>
    </div>

    {/* Formular */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="z. B. +49 152 1234567"
          className={`w-full px-5 py-3 border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder:text-gray-400`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          onClick={() => {
            console.log("Zurück clicked");
          }}
        >
          <FaArrowLeft /> Zurück
        </button>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg transition ${
            mutation.isLoading
              ? "bg-rose-300 cursor-not-allowed"
              : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          {mutation.isLoading ? "Wird gesendet..." : <>Weiter <FaArrowRight /></>}
        </button>
      </div>
    </form>
  </div>
</div>
  );
}