import { FaUsers, FaAward, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import KontaktSidebar from "../Components/Sidebar";
import OfficeMap from "../Components/OfficeMap";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-full font-sans text-gray-800 bg-gray-50 mt-20">
        {/* Header */}
        <header className="py-20 px-6 text-center shadow-lg relative overflow-hidden logoBG logoTextWhite">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Über uns</h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            Lernen Sie das Team und unsere Philosophie hinter ELLMER rooms kennen.
          </p>
        </header>

        {/* Our Story Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl mt-[-40px] relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Unsere Geschichte</h2>
          <p className="text-lg mb-4 leading-relaxed text-gray-700 text-center">
            ELLMER rooms wurde gegründet, um Menschen deutschlandweit komfortable und bezahlbare Unterkünfte zu bieten.
            Unser Ziel ist es, Geschäftsreisenden, Monteuren und Urlaubern gleichermaßen einen unkomplizierten und zuverlässigen Service zu bieten.
          </p>
          <p className="text-lg mb-4 leading-relaxed text-gray-700 text-center">
            Mit über 6.000 Unterkünften und mehr als 18.000 zufriedenen Kunden sind wir stolz auf das Vertrauen, das uns unsere Gäste schenken.
            Unser Team arbeitet täglich daran, Ihren Aufenthalt so angenehm wie möglich zu gestalten.
          </p>
        </section>

        {/* Team Image */}
        <section className="py-8 px-6 text-center">
          <img
            src="https://images.pexels.com/photos/3182766/pexels-photo-3182766.jpeg"
            alt="Unser Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Values Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Unsere Werte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform">
              <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-red-100 text-red-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teamgeist</h3>
              <p className="text-gray-600">Wir arbeiten eng zusammen, um den besten Service für unsere Kunden zu gewährleisten.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform">
              <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-red-100 text-red-600 text-3xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualität</h3>
              <p className="text-gray-600">Wir legen großen Wert auf hochwertige Unterkünfte und exzellenten Service.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform">
              <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-red-100 text-red-600 text-3xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verfügbarkeit</h3>
              <p className="text-gray-600">Wir sind deutschlandweit präsent und helfen Ihnen, die perfekte Unterkunft zu finden.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Bereit, Ihre Unterkunft zu finden?</h2>
          <NavLink
            to="/mieter"
            className="inline-block bg-red-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition transform"
          >
            Unterkunft finden
          </NavLink>
          <p className="mt-4 text-sm text-gray-500">Jetzt Fragebogen ausfüllen und passende Wohnung entdecken</p>
        </section>
      </div>
      <KontaktSidebar />
      <OfficeMap />
      <Footer />
    </div>
  );
};

export default About;
