import { useState } from "react";
import { useMutation } from "@tanstack/react-query";


  const fields = [
    { name: "name", label: "Ihr Name", type: "text" },
    { name: "email", label: "Ihre E-Mail-Adresse", type: "email" },
    { name: "phone", label: "Ihre Telefonnummer", type: "text" },
    { name: "nachricht", label: "Ihre Nachricht", type: "textarea", rows: 5 },
   
  ];

const ContactFormular = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nachricht: "",
  });

  const [submitted, setSubmitted] = useState(false);

//     const mutation = useMutation({
    
//   })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulardaten:", formData);
    setSubmitted(true);
    // mutation.mutate(formData)
  };



  return (
    <div className="logoBGWhite p-8 rounded-lg shadow-md border border-gray-200">
      {submitted ? (
        <p className="text-green-600 text-base font-medium text-center">
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. <br />
         Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.

        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-base">
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block mb-1 text-gray-700">
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  rows={field.rows || 4}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full logoBG logoTextWhite py-2 rounded-2xl hoverLogoMehr transition duration-200 cursor-pointer"
          >
            Nachricht senden
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactFormular;