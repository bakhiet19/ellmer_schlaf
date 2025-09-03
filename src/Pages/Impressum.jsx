// src/pages/Impressum.jsx
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdPerson,
  MdWeb,
  MdBusiness,
} from "react-icons/md";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import Head from '../Components/Head';

export default function Impressum() {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-50 py-10 px-6 logoText mt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
        <Head className="">Impressum</Head>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MdBusiness className="text-gray-600" />
              <span>Ellmer Group Deutschland GmbH</span>
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-gray-600" />
              <span>Gerhofstraße 18, 20354 Hamburg</span>
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-gray-600" />
              <span>+49 (0)40 244241700</span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-gray-600" />
              <span>info@ellmer-rooms.de</span>
            </p>
            <p className="flex items-center gap-2">
              <MdWeb className="text-gray-600" />
              <a
                href="https://www.ellmer-rooms.de"
                className="logoText hover:underline"
              >
                www.ellmer-rooms.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Rechtliche Angaben
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Vertretungsberechtigter Geschäftsführer: <strong>Ansgar Ellmer</strong>
            </li>
            <li>Registergericht: Amtsgericht Hamburg HRB 142784</li>
            <li>Umsatzsteuer-ID: DE 308701648</li>
            <li>Steuernummer: 44/717/01683</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Verantwortlich gemäß § 55 Abs. 2 RStV
          </h2>
          <p>Ansgar Ellmer (Anschrift wie oben)</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Allgemeine Hinweise
          </h2>
          <p className="text-gray-700">
            Sämtliche Inhalte dieser Internetseiten werden mit Sorgfalt erstellt
            und regelmäßig überarbeitet. Trotzdem kann keine Gewähr für die
            Richtigkeit und Vollständigkeit der Angaben übernommen werden. Alle
            auf dieser Webseite zur Verfügung gestellten Informationen sind
            unverbindlich. Die Ellmer Invest GmbH behält sich vor, jederzeit
            Änderungen oder Ergänzungen der zur Verfügung gestellten
            Informationen vorzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Haftungshinweis
          </h2>
          <p className="text-gray-700">
            Trotz sorgfältiger, inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte eventuell externer Links. Für den Inhalt
            solcher verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>

        {/* <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            WordPress Theme
          </h2>
          <p>
            Homely von{" "}
            <a
              href="http://rypecreative.com/"
              className="text-blue-600 hover:underline"
            >
              Rype Creative
            </a>
          </p>
        </section> */}


      </div>
    </div>
    <Footer />
    </div>
  );
}