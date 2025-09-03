import Footer from "../Components/Footer";
import Head from "../Components/Head";
import Navbar from "../Components/Navbar/Navbar";

// src/pages/Datenschutz.jsx
export default function Datenschutz() {
  return (
   <div>
    <Navbar />
     <div className="min-h-screen bg-gray-50 py-10 px-6 text-gray-800 mt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
        <Head>Datenschutzerklärung</Head>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Einleitung</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten Ihre Daten
            gemäß der Datenschutzgrundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG-neu).
            Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Verantwortlicher</h2>
          <p><strong>Ellmer Group Deutschland GmbH</strong></p>
          <p>Am Neumarkt 30, Oslo-Haus, 22041 Hamburg</p>
          <p>Telefon: +49 (0) 40 244 24 17 00</p>
          <p>Fax: +49 (0) 40 244 24 17 01</p>
          <p>E-Mail: info@ellmer-group.de</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Datenschutzbeauftragter</h2>
          <p>
            Unser betrieblicher Datenschutzbeauftragter (TÜV®) ist erreichbar unter:
          </p>
          <p>Ellmer Group Deutschland GmbH</p>
          <p>Am Neumarkt 30, Oslo-Haus, 22041 Hamburg</p>
          <p>Telefon: +49 (0) 40 244241700</p>
          <p>Fax: +49 (0) 40 244241701</p>
          <p>E-Mail: datenschutz@ellmer-group.de</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Verarbeitung auf der Webseite</h2>
          <p>
            Beim Besuch unserer Webseite werden personenbezogene Daten wie IP-Adresse, Browsertyp,
            Betriebssystem und besuchte Seiten verarbeitet. Diese Daten dienen der technischen
            Bereitstellung, Sicherheit und Verbesserung unseres Angebots.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kontaktformular & E-Mail</h2>
          <p>
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir Ihre
            Angaben ausschließlich zur Bearbeitung Ihres Anliegens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies</h2>
          <p>
            Unsere Webseite verwendet Cookies zur Verbesserung der Benutzerfreundlichkeit und zur
            Analyse. Sie können die Speicherung von Cookies in Ihrem Browser deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich dazu an unseren
            Datenschutzbeauftragten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Externe Links</h2>
          <p>
            Für Inhalte externer Links übernehmen wir keine Haftung. Für den Inhalt der verlinkten
            Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </div>
    <Footer />
   </div>
  );
}