import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import wohnung1 from '../../assets/wohnung1.jpg';
import { NavLink } from 'react-router-dom';

// إعداد أيقونات leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const APARTMENTS = [
  { id: 1, city: 'Lübeck', name: 'Schöne Wohnung am Fluss', lat: 53.8655, lng: 10.6866 },
  { id: 2, city: 'Hamburg', name: 'Gemütliche Wohnung in Altona', lat: 53.5500, lng: 9.9937 },
  { id: 3, city: 'Berlin', name: 'Stylisches Studio in Mitte', lat: 52.5200, lng: 13.4050 },
  { id: 4, city: 'Kiel', name: 'Helle Wohnung nahe Uni', lat: 54.3233, lng: 10.1228 },
  { id: 5, city: 'Flensburg', name: 'Studio mit Meerblick', lat: 54.7930, lng: 9.4469 },
];

const ApartmentMap = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const mapCenter = [53.5, 10.0];


  function MapClickHandler({ onMapClick }) {
    useMapEvent({
      click: () => {
        onMapClick();
      },
    });
    return null;
  }

  return (
    <div className="bg-gray-50 pb-8 sm:pb-12 lg:pb-16 px-4 lg:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500 m-6 pt-6 sm:pt-4 text-center">
         Wohnungen interaktiv entdecken
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🗺️ Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-0">
          <MapContainer
            center={mapCenter}
            zoom={6}
            scrollWheelZoom={true}
            className="h-[450px] w-full"
          >
            <MapClickHandler onMapClick={() => setSelectedApartment(null)} />
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {APARTMENTS.map((apt) => (
              <Marker
                key={apt.id}
                position={[apt.lat, apt.lng]}
                eventHandlers={{
                  click: () => setSelectedApartment(apt),
                  popupclose: () => setSelectedApartment(null),
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{apt.name}</strong><br />
                    Stadt: {apt.city}
                    {/* <img src={wohnung1} className="w-full h-20 object-cover rounded mt-2" /> */}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* 📋 Info Section */}
       <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6">📋 Wohnungsdetails</h3>

  {selectedApartment ? (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* 🖼️ صورة */}
      <img
        src={wohnung1}
        alt="Wohnung"
        className="rounded-lg w-full lg:w-1/2 h-56 object-cover"
      />

      {/* 📄 معلومات */}
      <div className="text-gray-700 space-y-3 lg:w-1/2">
        <p><strong>🏠 Name:</strong> {selectedApartment.name}</p>
        <p><strong>🌆 Stadt:</strong> {selectedApartment.city}</p>
        <p><strong>📍 Koordinaten:</strong> {selectedApartment.lat}, {selectedApartment.lng}</p>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
          <li>🛒 Supermarkt: 5 Min entfernt</li>
          <li>🏥 Krankenhaus: 10 Min entfernt</li>
          <li>🚉 Bahnhof: 8 Min entfernt</li>
        </ul>

        <NavLink to="/details">
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition text-sm cursor-pointer">
            🔍 Mehr Details anzeigen
          </button>
        </NavLink>
      </div>
    </div>
  ) : (
    <p className="text-gray-500 text-base">
      Klicke auf eine Wohnung auf der Karte, um weitere Informationen zu sehen.
    </p>
  )}
      </div>

      
      </div>
    </div>
  );
};

export default ApartmentMap;