import { NavLink } from "react-router-dom";
import Head from "../Components/Sections/Head";

const faqs = [
  {
    question: 'Was passiert nach dem Ausfüllen des Formulars?',
    answer: 'Wir überprüfen Ihre Angaben und kontaktieren Sie innerhalb von 15 Minuten, um Ihnen ein passendes Angebot basierend auf der Verfügbarkeit der Zimmer zu unterbreiten.'
  },
  {
    question: 'Wie wird mit uns Kontakt aufgenommen?',
    answer: 'Per Telefon oder E-Mail nach dem Absenden des Formulars. Wir stehen Ihnen gerne für Rückfragen zur Verfügung.'
  },
  {
    question: 'Kann die Buchung geändert oder storniert werden?',
    answer: 'Ja, Sie können Ihre Buchung bis zu 24 Stunden vor der Anreise kostenlos ändern oder stornieren.'
  },
  {
    question: 'Welche Zahlungsmöglichkeiten gibt es?',
    answer: 'Wir akzeptieren Banküberweisung, Online-Zahlung und Barzahlung bei Ankunft.'
  },
  {
    question: 'Gibt es eine Mindestmietdauer?',
    answer: 'Ja, die Mindestmietdauer beträgt eine Nacht. Längere Aufenthalte sind je nach Bedarf möglich.'
  }
];

export default function Fragen() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Head className="text-2xl font-bold my-4 text-center logoText">Häufig gestellte Fragen</Head>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="logoBGWhite border border-gray-200 rounded-md p-4 shadow-sm">
            <summary className="cursor-pointer text-lg font-medium text-gray-700 hoverLogo transition">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>

      
      <div className="mt-10 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm">
  <p className="logoText text-lg font-semibold mb-2">
    Ihre Frage wurde nicht beantwortet?
  </p>
  <p className="text-gray-600 mb-4">
    Kein Problem – unser Support-Team hilft Ihnen gerne weiter.
  </p>
  <button className="mt-2 px-6 py-2 logoBG logoTextWhite rounded hoverLogoMehr transition cursor-pointer">
         <NavLink to='/contact'> Kontak Aufnehmen</NavLink>
        </button>
</div>

       
      </div>
    </div>
  );
}