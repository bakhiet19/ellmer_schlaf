import { useState } from "react";

export default function KontaktSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nachricht: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulardaten:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-8 text-red-500 text-center">Kontakt</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 🧾 Firmeninfos */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-base text-gray-700 space-y-5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Firmeninformationen</h3>
          <p><strong>Firmenname:</strong> Ellmer Schlaf GmbH</p>
          <p><strong>Adresse:</strong> Musterstraße 12, 20095 Hamburg</p>
          <p><strong>Telefon:</strong> +49 40 123456789</p>
          <p><strong>E-Mail:</strong> kontakt@ellmer-schlaf.de</p>
          <p><strong>Öffnungszeiten:</strong> Montag – Freitag, 09:00 – 17:00 Uhr</p>
          <p className="italic text-gray-600">
            Haben Sie Fragen? Sie können Ihre Nachricht und Kontaktdaten hier hinterlassen – wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        {/* 📩 Kontaktformular */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          {submitted ? (
            <p className="text-green-600 text-base font-medium">
              Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-base">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">Ihr Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">Ihre E-Mail-Adresse</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 text-gray-700">Ihre Telefonnummer</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="nachricht" className="block mb-1 text-gray-700">Ihre Nachricht</label>
                <textarea
                  name="nachricht"
                  id="nachricht"
                  rows="5"
                  value={formData.nachricht}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200 cursor-pointer"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}