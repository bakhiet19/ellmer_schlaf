import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


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
<div className="logoBGWhite w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12 lg:pb-16 rounded-3xl shadow-2xl z-0">
  <div className="max-w-6xl mx-auto pt-6">
    <div className="grid grid-cols-1 gap-6">
      {/* 🗺️ Map Section */}
      <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-xl bg-white">
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
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  </div>
</div>
  );
};

export default ApartmentMap;

