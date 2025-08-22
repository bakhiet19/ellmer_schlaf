import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import APARTMENTS from './apartments';

// إعداد أيقونات leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


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
<div className="logoBGWhite w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12 lg:pb-16 rounded-3xl shadow-2xl ">
  <div className="max-w-6xl mx-auto pt-6">
    <div className="grid grid-cols-1 gap-6">
      {/* 🗺️ Map Section */}
      <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-xl logoBGWhite z-0">
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

