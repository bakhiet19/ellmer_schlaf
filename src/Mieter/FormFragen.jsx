import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Questions } from "./Questions";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";

const FormFragen = () => {
  const [step, setStep] = useState(0);
  const currentQuestion = Questions[step];
  const totalSteps = Questions.length;

  const schema = z.object({
    phone: z
      .string()
      .min(5)
      .max(20)
      .regex(/^\+?\d[\d\s-]{4,}$/, "Bitte gültige Telefonnummer eingeben"),
    city: z.string().min(2),
    postalCode: z.string().min(4),
    peopleCount: z.string().min(1),
    hasPets: z.enum(["Ja", "Nein"]),
    preferredRoom: z.enum(["Einzelzimmer", "Doppelzimmer", "Apartment"]),
  });

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
    mutationFn: (data) => get("/data", data),
    onSuccess: () => toast.success("Daten erfolgreich gesendet!"),
    onError: () => toast.error("Fehler beim Senden der Daten."),
  });

  const onFinalSubmit = (data) => {
    mutation.mutate(data);
  };

  const onNext = async () => {
    const valid = await trigger(currentQuestion.key);
    if (valid) setStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <form onSubmit={handleSubmit(onFinalSubmit)} className="space-y-6">
      {/* السؤال الحالي */}
      <div className="space-y-3">
        <label className="block text-lg font-medium text-gray-800">
          {currentQuestion.question}
        </label>

        {/* أنواع الإدخال */}
        {currentQuestion.type === "select" ? (
          <select
            {...register(currentQuestion.key)}
            defaultValue={getValues(currentQuestion.key) || ""}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="">Bitte wählen</option>
            {currentQuestion.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : currentQuestion.type === "boolean" ? (
          <div className="flex gap-6">
            {currentQuestion.options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-gray-700"
              >
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
            key={currentQuestion.key} // مهم لإعادة التهيئة
            type={currentQuestion.type}
            placeholder={currentQuestion.placeholder}
            {...register(currentQuestion.key)}
            className={`w-full px-5 py-3 border ${
              errors[currentQuestion.key] ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder:text-gray-400`}
          />
        )}

        {/* رسالة الخطأ */}
        {errors[currentQuestion.key] && (
          <p className="text-sm text-red-500 mt-1">
            {errors[currentQuestion.key]?.message}
          </p>
        )}
      </div>

      {/* الأزرار */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
        >
          <FaArrowLeft /> Zurück
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition"
          >
            Weiter <FaArrowRight />
          </button>
        ) : (
          <button
            type="submit"
            disabled={mutation.isLoading}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg transition ${
              mutation.isLoading
                ? "bg-rose-300 cursor-not-allowed text-white"
                : "bg-rose-500 hover:bg-red-600 text-white"
            }`}
          >
            {mutation.isLoading ? (
              "Wird gesendet..."
            ) : (
              <>
                Absenden <FaArrowRight />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default FormFragen;
