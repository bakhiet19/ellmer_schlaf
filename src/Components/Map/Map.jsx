import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import APARTMENTS from './apartments';

// إعداد أيقونات leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// زر تحديد الموقع
function LocateUserButton({ setUserLocation }) {
  const map = useMap();
  const handleClick = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
        map.flyTo([latitude, longitude], 13, { animate: true });
      },
      () => alert('Unable to retrieve location')
    );
  };
  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 z-[999] bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
    >
      📍 Mein Standort
    </button>
  );
}

const ApartmentMap = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapCenter = [53.5, 10.0];

  function MapClickHandler({ onMapClick }) {
    useMapEvent({
      click: () => onMapClick(),
    });
    return null;
  }

  return (
    <div className="relative w-full h-[500px] z-0">
      <MapContainer center={mapCenter} zoom={6} scrollWheelZoom className="h-full w-full">
        <MapClickHandler onMapClick={() => setSelectedApartment(null)} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap" />

        {APARTMENTS.map((apt) => (
          <Marker
            key={apt.id}
            position={[apt.lat, apt.lng]}
            eventHandlers={{
              click: () => setSelectedApartment(apt),
            }}
            icon={L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -35],
            })}
          >
            <Popup>
              <div className="text-sm">
                <strong>{apt.name}</strong>
                <br />
                Stadt: {apt.city}
                <br />
                Zimmer: {apt.rooms} | Preis: {apt.price}€
              </div>
            </Popup>
          </Marker>
        ))}

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Du bist hier!</Popup>
          </Marker>
        )}

        <LocateUserButton setUserLocation={setUserLocation} />
      </MapContainer>
    </div>
  );
};

export default ApartmentMap;
