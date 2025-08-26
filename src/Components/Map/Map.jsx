import { useState, useRef } from 'react';
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
import { FaHome } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import APARTMENTS from './apartments';

// أيقونات باستخدام React Icons فقط
const createIcon = (color, size = 24) =>
  L.divIcon({
    html: ReactDOMServer.renderToString(
      <FaHome style={{ color, fontSize: size }} />
    ),
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size + 4],
  });

const PLACEHOLDER_IMG = 'https://placehold.co/320x160?text=Apartment';

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
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />

        {APARTMENTS.map((apt) => {
          const isSelected = selectedApartment?.id === apt.id;
          const markerRef = useRef(null);

          return (
            <Marker
              key={apt.id}
              position={[apt.lat, apt.lng]}
              icon={createIcon(isSelected ? '#dc2626' : '#2563eb', isSelected ? 28 : 24)}
              ref={markerRef}
              eventHandlers={{
                click: () => setSelectedApartment(apt),
                popupclose: () => {
                  // إذا كان Marker هو المختار ويغلق الـPopup، نرجع اللون للأزرق
                  if (selectedApartment?.id === apt.id) {
                    setSelectedApartment(null);
                  }
                },
              }}
              zIndexOffset={isSelected ? 1000 : 0}
            >
              <Popup>
                <div className="w-44">
                  <img
                    src={apt.image || PLACEHOLDER_IMG}
                    alt={apt.name}
                    className="w-full h-20 object-cover rounded-md mb-1"
                    onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
                  />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">{apt.name}</p>
                    <p className="text-gray-600">🏙️ {apt.city}</p>
                    <p>🛏️ {apt.rooms} | 💶 {apt.price}€</p>
                    <button className="mt-1 w-full logoBG text-white rounded-md text-xs py-1 hoverLogoWhite">
                      Details
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {userLocation && (
          <Marker position={userLocation} icon={createIcon('#2563eb')}>
            <Popup>Du bist hier!</Popup>
          </Marker>
        )}

        <LocateUserButton setUserLocation={setUserLocation} />
      </MapContainer>
    </div>
  );
};

export default ApartmentMap;
