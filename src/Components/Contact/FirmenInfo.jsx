import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const FirmenInfo = () => {
  const info = [
    {
      label: "Firmenname",
      value: "Ellmer Schlaf GmbH",
      icon: <FaBuilding className="text-gray-700" />,
    },
    {
      label: "Adresse",
      value: "Ellmer Schlaf GmbH, Musterstraße 12, 20095 Hamburg",
      link: "https://www.google.com/maps?q=Ellmer+Schlaf+GmbH,+Musterstraße+12,+20095+Hamburg,+Deutschland",
      icon: <FaMapMarkerAlt className="text-gray-700" />,
    },
    {
      label: "Telefon",
      value: "+49 40 123456789",
      link: "tel:+4940123456789",
      icon: <FaPhoneAlt className="text-gray-700" />,
    },
    {
      label: "E-Mail",
      value: "kontakt@ellmer-schlaf.de",
      link: "mailto:kontakt@ellmer-schlaf.de",
      icon: <FaEnvelope className="text-gray-700" />,
    },
    {
      label: "Öffnungszeiten",
      value: "Montag – Freitag, 09:00 – 17:00 Uhr",
      icon: <FaClock className="text-gray-700" />,
    },
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md text-base text-gray-700 max-w-xl mx-auto space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Firmeninformationen</h3>

      <div className="space-y-4 divide-y divide-gray-200">
        {info.map(({ label, value, link, icon }) => (
          <div key={label} className="flex items-start space-x-3 pt-2">
            <div className="mt-1">{icon}</div>
            <p>
              <strong className="text-gray-800">{label}:</strong>{" "}
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logoText hover:underline"
                >
                  {value}
                </a>
              ) : (
                <span className="text-gray-700">{value}</span>
              )}
            </p>
          </div>
        ))}
      </div>

      <p className="italic text-gray-600 mt-6">
        Haben Sie Fragen? Sie können Ihre Nachricht und Kontaktdaten hier hinterlassen – wir melden uns schnellstmöglich bei Ihnen.
      </p>
    </div>
  );
};

export default FirmenInfo;