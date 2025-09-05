import { motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { getAllApartment } from "./Services/api";

const HeroContactForm = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
      phone: "",
      location: ""
    }
  });

  const [submittedData, setSubmittedData] = useState(null);

  const { mutate } = useMutation({
    mutationFn: (data) => getAllApartment("/kontakt", data),
  });

  function onSubmit(formData) {
    console.log("📩 Kontaktformular:", formData);
    setSubmittedData(formData);
    mutate(formData);
  }

  return (
    <div
      className="relative h-[100vh] max-w-[100vw] bg-cover bg-center flex items-center justify-center px-6 example"
    >
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <h1 className="logoTextWhite text-3xl md:text-4xl font-bold mb-4">
          Finden Sie die perfekte Unterkunft – wir melden uns persönlich!
        </h1>
        <p className="logoTextWhite text-lg mb-8">
          Tragen Sie Ihre Daten ein und wir kontaktieren Sie mit passenden Angeboten.
        </p>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto"
          >
            <input
              {...methods.register("name")}
              type="text"
              placeholder="Ihr Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              {...methods.register("phone")}
              type="tel"
              placeholder="Telefonnummer"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              {...methods.register("location")}
              type="text"
              placeholder="Ort oder Bundesland"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <button
              type="submit"
              className="md:col-span-3 bg-red-600 logoTextWhite py-2 rounded-md hover:bg-red-700 transition w-full cursor-pointer"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </form>
        </FormProvider>
      </motion.div>
    </div>
  );
};

export default HeroContactForm;