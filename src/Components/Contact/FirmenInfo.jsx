import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import OfficeMap from "../OfficeMap";

const FirmenInfo = () => {
  const info = [
    {
      label: "Firmenname",
      value: "Ellmer Schlaf GmbH",
      icon: <FaBuilding className="text-gray-700" />,
    },
    {
      label: "Adresse",
      value: "Ellmer Group Deutschland GmbH Gerhofstraße 18, 20354 Hamburg",
      link: "https://www.google.com/maps?q=Ellmer+Schlaf+GmbH,+Gerhofstraße+18,+20354+Hamburg,+Deutschland",
      icon: <FaMapMarkerAlt className="text-gray-700" />,
    },
    {
      label: "Telefon",
      value: "+49 (0)40 244241700",
      link: "tel:+4940123456789",
      icon: <FaPhoneAlt className="text-gray-700" />,
    },
    {
      label: "E-Mail",
      value: "info@ellmer-rooms.de",
      link: "info@ellmer-rooms.de",
      icon: <FaEnvelope className="text-gray-700" />,
    },
    {
      label: "Öffnungszeiten",
      value: "Montag – Freitag, 09:00 – 18:00 Uhr",
      icon: <FaClock className="text-gray-700" />,
    },
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md text-base text-gray-700 max-w-xl mx-auto space-y-6">
     


      <p className="italic text-gray-600 mt-6">
       Haben Sie Fragen oder
möchten eine Buchung
vornehmen? Dann freuen wir
uns auf Ihre Nachricht! Sie
erreichen uns jederzeit
telefonisch oder per E-Mail.
Schreiben Sie uns einfach –
wir melden uns garantiert
innerhalb von 24 Stunden bei
Ihnen zurück.
      </p>

 <h3 className="text-xl font-semibold logoText mb-2">Firmeninformationen</h3>
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
        {/* <OfficeMap /> */}
      </div>

      
    </div>
  );
};

export default FirmenInfo;