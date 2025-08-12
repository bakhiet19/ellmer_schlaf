import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import Api from "../Services/api";

const Questions = [
  { key: "phone", question: "Wie lautet Ihre Telefonnummer?", type: "text", placeholder: "z. B. +49 152 1234567" },
  { key: "city", question: "In welcher Stadt möchten Sie buchen?", type: "text", placeholder: "z.B. Hamburg" },
  { key: "postalCode", question: "Wie lautet die Postleitzahl?", type: "number", placeholder: "z.B. 20095" },
  { key: "peopleCount", question: "Wie viele Personen reisen?", type: "number", placeholder: "z.B. 3" },
  { key: "hasPets", question: "Reisen Sie mit Haustieren?", type: "boolean", options: ["Ja", "Nein"] },
  { key: "preferredRoom", question: "Welche Zimmerart bevorzugen Sie?", type: "select", options: ["Einzelzimmer", "Doppelzimmer", "Apartment"] },
];

const schema = z.object({
  phone: z.string().min(5).max(20).regex(/^\+?\d[\d\s-]{4,}$/, "Bitte gültige Telefonnummer eingeben"),
  city: z.string().min(2),
  postalCode: z.string().min(4),
  peopleCount: z.string().min(1),
  hasPets: z.enum(["Ja", "Nein"]),
  preferredRoom: z.enum(["Einzelzimmer", "Doppelzimmer", "Apartment"]),
});

export default function QuestionStep() {
  const [step, setStep] = useState(0);
  const currentQuestion = Questions[step];
  const totalSteps = Questions.length;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: (data) => Api("/data", data),
    onSuccess: () => toast.success("Daten erfolgreich gesendet!"),
    onError: () => toast.error("Fehler beim Senden der Daten."),
  });

  const onNext = async () => {
    const valid = await trigger(currentQuestion.key);
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const onBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const onFinalSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center px-4 questions">
       
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-2xl min-h-[300px] bg-white rounded-2xl shadow-xl p-10 space-y-6">
         <p className="text-black text-center text-xl font-semibold mb-6">
         Finden Sie die passende Unterkunft für Ihr Team – beantworten Sie ein paar kurze Fragen und erhalten Sie in wenigen Minuten ein maßgeschneidertes Angebot!
        </p>
        {/* Fortschrittsbalken */}
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Schritt {step + 1} von {totalSteps}</span>
            <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${((step + 1) / totalSteps) * 100}%` }}></div>
          </div>
        </div>

        {/* Frage */}
        <form onSubmit={handleSubmit(onFinalSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">{currentQuestion.question}</label>

            {currentQuestion.type === "select" ? (
              <select
                {...register(currentQuestion.key)}
                defaultValue={getValues(currentQuestion.key) || ""}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="">Bitte wählen</option>
                {currentQuestion.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : currentQuestion.type === "boolean" ? (
              <div className="flex gap-4">
                {currentQuestion.options.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-gray-700">
                    <input
                      type="radio"
                      value={option}
                      {...register(currentQuestion.key)}
                      defaultChecked={getValues(currentQuestion.key) === option}
                      className="accent-rose-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                key={currentQuestion.key}  // هذي مهمة جدًا لإعادة التهيئة عند تغيير السؤال
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                {...register(currentQuestion.key)}
                className={`w-full px-5 py-3 border ${
                    errors[currentQuestion.key] ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder:text-gray-400`}
                />

            )}

            {errors[currentQuestion.key] && (
              <p className="text-red-500 text-sm mt-1">{errors[currentQuestion.key]?.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onBack}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
            >
              <FaArrowLeft /> Zurück
            </button>

            {step < totalSteps - 1 ? (
              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-2 px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition cursor-pointer"
              >
                Weiter <FaArrowRight />
              </button>
            ) : (
              <button
                type="submit"
                disabled={mutation.isLoading}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg transition ${
                  mutation.isLoading ? "bg-rose-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                {mutation.isLoading ? "Wird gesendet..." : <>Absenden <FaArrowRight /></>}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
