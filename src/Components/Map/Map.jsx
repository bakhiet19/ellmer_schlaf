import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import { FaHome, FaMoon, FaSun } from 'react-icons/fa'; // ✅ أيقونات الشمس والقمر
import ReactDOMServer from 'react-dom/server';
import APARTMENTS from './apartments';

const PLACEHOLDER_IMG = 'https://placehold.co/320x160?text=Apartment';

/**
 * ✅ أيقونة محسّنة للمباني
 */
const createIcon = (color, size = 34) =>
  L.divIcon({
    html: ReactDOMServer.renderToString(
      <div
        style={{
          backgroundColor: color,
          borderRadius: '50%',
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        }}
      >
        <FaHome style={{ color: 'white', fontSize: size * 0.55 }} />
      </div>
    ),
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size + 4],
  });

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
      className="locate-button absolute top-4 right-4 z-[999] bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer"
    >
      📍 Mein Standort
    </button>
  );
}

function ZoomToSelected({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 14, { animate: true });
    }
  }, [position, map]);
  return null;
}

function MapClickHandler({ onMapClick }) {
  useMapEvent({
    click: () => onMapClick(),
  });
  return null;
}

function MapContent({
  selectedApartment,
  setSelectedApartment,
  userLocation,
  setUserLocation,
  darkMode,
}) {
  return (
    <>
      <MapClickHandler onMapClick={() => setSelectedApartment(null)} />

      {/* ✅ Dark / Light Mode Tile */}
      {darkMode ? (
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap contributors © CARTO"
          subdomains={['a', 'b', 'c', 'd']}
        />
      ) : (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
      )}

      <MarkerClusterGroup>
        {APARTMENTS.map((apt) => {
          const isSelected = selectedApartment?.id === apt.id;
          const position = [apt.lat, apt.lng];

          return (
            <Marker
              key={apt.id}
              position={position}
              icon={createIcon(isSelected ? '#dc2626' : '#2563eb', isSelected ? 38 : 30)}
              zIndexOffset={isSelected ? 1000 : 0}
              eventHandlers={{
                click: () => setSelectedApartment(apt),
                popupclose: () => {
                  if (selectedApartment?.id === apt.id) {
                    setSelectedApartment(null);
                  }
                },
              }}
            >
              {isSelected && <ZoomToSelected position={position} />}
              <Popup>
                <div className="w-44 animate-fadeIn">
                  <img
                    src={apt.image || PLACEHOLDER_IMG}
                    alt={apt.name}
                    className="w-full h-20 object-cover rounded-md mb-1"
                    onError={(e) => {
                      e.currentTarget.src = PLACEHOLDER_IMG;
                    }}
                  />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">{apt.name}</p>
                    <p className="text-gray-600">🏙️ {apt.city}</p>
                    <p>
                      🛏️ {apt.rooms} | 💶 {apt.price}€
                    </p>
                    <button className="mt-1 w-full logoBG text-white rounded-md text-xs py-1 hoverLogoWhite">
                      Details
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>

      {userLocation && (
        <Marker position={userLocation} icon={createIcon('#16a34a')}>
          <Popup>Du bist hier!</Popup>
        </Marker>
      )}

      <LocateUserButton setUserLocation={setUserLocation} />
    </>
  );
}

const ApartmentMap = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // ✅ وضع ليلي
  const mapCenter = [53.5, 10.0];

  return (
    <div className="relative w-full h-full z-0">
      {/* ✅ زر تبديل Light/Dark Mode بأيقونة */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-20 left-2 z-[999] bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition-all duration-300"
      >
        {darkMode ? (
          <FaMoon className="text-gray-800 w-5 h-5 animate-fadeIn" />
        ) : (
          <FaSun className="text-yellow-500 w-5 h-5 animate-fadeIn" />
        )}
      </button>

      <MapContainer
        center={mapCenter}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <MapContent
          selectedApartment={selectedApartment}
          setSelectedApartment={setSelectedApartment}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          darkMode={darkMode}
        />
      </MapContainer>
    </div>
  );
};

export default ApartmentMap;
