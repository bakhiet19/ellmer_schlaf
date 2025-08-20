
const Rechnung = () => {
  return (
    <div className="logoBGWhite rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Gesamtkosten</h3>
            <ul className="text-gray-700 space-y-2">
              <li>💵 Preis pro Nacht: <strong>€85</strong></li>
              <li>🧼 Reinigungsgebühr: <strong>€20</strong></li>
              <li>🧾 Servicegebühr: <strong>€15</strong></li>
              <li>📆 Nächte: <strong>3</strong></li>
            </ul>
            <hr className="my-4" />
            <p className="text-lg font-bold text-gray-900">Gesamt: €340</p>
          </div>
  );
};

export default Rechnung;