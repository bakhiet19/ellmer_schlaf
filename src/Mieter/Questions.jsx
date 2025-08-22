import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import Api, { angebot } from "../Services/api";

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
  city: z.string().min(2 , { message: "Bitte geben Sie eine gültige Stadt ein." }),  
  postalCode: z.string().min(4, { message: "Bitte geben Sie eine gültige Postleitzahl ein." }),
  peopleCount: z.string().min(1),
  hasPets: z.enum(["Ja", "Nein"]),
  preferredRoom: z.enum(["Einzelzimmer", "Doppelzimmer", "Apartment"]),
  agb: z.literal(true, {
    errorMap: () => ({ message: "Bitte bestätigen Sie die AGB." }),
  }),
  datenschutz: z.literal(true, {
    errorMap: () => ({ message: "Bitte bestätigen Sie die Datenverarbeitung." }),
  }),
});

export default function QuestionStep({className}) {
 const [step, setStep] = useState(0);
  const currentQuestion = Questions[step];
  const totalSteps = Questions.length;
  const [showFullForm, setShowFullForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    reset
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: (data) => angebot("/data", data),
    onSuccess: () =>{
       toast.success("Daten erfolgreich gesendet!"),
       reset();              // يرجع القيم
      setStep(0);           // يرجع للخطوة الأولى
      setShowFullForm(false); // يرجع للنموذج المرحلي

      },
    onError: () => toast.error("Fehler beim Senden der Daten."),
  });

  const onNext = async () => {
    const valid = await trigger(currentQuestion.key);
    if (valid) setStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const onFinalSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
    
  };



return (
  <div className={`relative px-6 py-12 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl ${className}`}>
  
  {/* Progress Bar */}
  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
    <div className="logoBG h-2 rounded-full transition-all duration-300" style={{ width: `${(step + 1) / totalSteps * 100}%` }} />
  </div>

  {/* العنوان */}
<div className="text-center mb-8">
  <h2 className="text-2xl sm:text-2xl font-bold logoText leading-tight">
    Unterkunft für Ihr Team – schnell & individuell
  </h2>
  <p className="text-gray-600 mt-2 text-sm sm:text-base">
    Beantworten Sie ein paar Fragen und erhalten Sie ein passendes Angebot.
  </p>
</div>

  {/* النموذج خطوة بخطوة */}
  {!showFullForm ? (
    <form className="space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.key}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="space-y-4"
        >
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
            <div className="flex gap-6">
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
              key={currentQuestion.key}
              type={currentQuestion.type}
              placeholder={currentQuestion.placeholder}
              {...register(currentQuestion.key)}
              className={`w-full px-5 py-3 border ${errors[currentQuestion.key] ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder:text-gray-400`}
            />
          )}

          {errors[currentQuestion.key] && (
            <p className="text-sm logoText mt-1">{errors[currentQuestion.key]?.message}</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Checkboxات في آخر خطوة */}
      {step === totalSteps - 1 && (
        <div className="space-y-4">
          <label className="flex items-start gap-3 text-gray-700">
            <input type="checkbox" {...register("agb")} className="mt-1 accent-rose-500" />
            <span>
              Ja, ich habe die <a href="/agb" className="text-rose-600 underline">AGB</a> gelesen und akzeptiere sie.
            </span>
          </label>
          {errors.agb && <p className="text-sm text-red-500">{errors.agb.message}</p>}

          <label className="flex items-start gap-3 text-gray-700">
            <input type="checkbox" {...register("datenschutz")} className="mt-1 accent-rose-500" />
            <span>
              Ich stimme der Datenverarbeitung zu und wünsche Kontaktaufnahme.
            </span>
          </label>
          {errors.datenschutz && <p className="text-sm text-red-500">{errors.datenschutz.message}</p>}
        </div>
      )}

      {/* أزرار التنقل */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
        >
          <FaArrowLeft /> Vorherige Frage
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition"
          >
            Nächste Frage <FaArrowRight />
          </button>
        ) : (
          <button
            type="button"
            onClick={async () => {
              const isValid = await trigger();
              if (isValid) setShowFullForm(true);
            }}
            className="flex items-center gap-2 px-5 py-2 bg-rose-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Alle Angaben prüfen <FaArrowRight />
          </button>
        )}
      </div>
    </form>
  ) : (
    // النموذج الكامل للمراجعة والتعديل
    <form onSubmit={handleSubmit(onFinalSubmit)} className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Überprüfen Sie Ihre Angaben</h3>

      {Questions.map((q) => (
        <div key={q.key} className="space-y-2">
          <label className="block text-gray-700 font-medium">{q.question}</label>

          {q.type === "select" ? (
            <select
              {...register(q.key)}
              defaultValue={getValues(q.key)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              {q.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : q.type === "boolean" ? (
            <div className="flex gap-4">
              {q.options.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={opt}
                    {...register(q.key)}
                    defaultChecked={getValues(q.key) === opt}
                    className="accent-rose-500"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ) : (
            <input
              type={q.type}
              defaultValue={getValues(q.key)}
              {...register(q.key)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          )}
        </div>
      ))}

      {/* Checkboxات */}
      <div className="space-y-4 pt-4">
        <label className="flex items-start gap-3 text-gray-700">
          <input type="checkbox" {...register("agb")} defaultChecked={getValues("agb")} className="mt-1 accent-rose-500" />
          <span>Ja, ich habe die <a href="/agb" className="text-rose-600 underline">AGB</a> gelesen und akzeptiere sie.</span>
        </label>
        <label className="flex items-start gap-3 text-gray-700">
          <input type="checkbox" {...register("datenschutz")} defaultChecked={getValues("datenschutz")} className="mt-1 accent-rose-500" />
          <span>Ich stimme der Datenverarbeitung zu und wünsche Kontaktaufnahme.</span>
        </label>
      </div>

      {/* زر الإرسال */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={() => setShowFullForm(false)}
          className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Zurück zur Fragen
        </button>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`px-6 py-3 rounded-lg font-medium transition ${
            mutation.isLoading ? "bg-rose-300 cursor-not-allowed text-white" : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          {mutation.isLoading ? "Wird gesendet..." : "Anfrage abschicken"}
        </button>
      </div>
    </form>
  )}
</div>

);
}

export { Questions };
