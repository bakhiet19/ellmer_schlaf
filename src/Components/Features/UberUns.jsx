import { NavLink } from "react-router-dom";

export default function UberUns(){
    return(
        <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
  <h2 className="text-4xl font-bold mb-6 text-rose-600">Über uns</h2>

  <p className="text-lg mb-6">
    Wir sind ein engagiertes Team aus Hamburg, das sich auf die Vermittlung von möblierten Wohnungen für Firmen spezialisiert hat. Unser Ziel ist es, die Suche nach Mitarbeiterunterkünften so einfach und effizient wie möglich zu gestalten.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
    <div>
      <h3 className="text-xl font-semibold mb-2">🏠 Was wir bieten</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Schnelle Vermittlung von Wohnungen</li>
        <li>Direkter Kontakt mit Vermietern</li>
        <li>Transparente Preise & einfache Buchung</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">🎯 Unsere Mission</h3>
      <p>
        Wir glauben, dass jede Firma Zugang zu passenden Unterkünften für ihre Mitarbeiter haben sollte – unkompliziert, zuverlässig und lokal.
      </p>
    </div>
  </div>

  <div className="mt-12 text-center">
    <NavLink to="/kontakt" className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-rose-700 transition">
      Kontakt aufnehmen
    </NavLink>
  </div>
</section>
    )
}