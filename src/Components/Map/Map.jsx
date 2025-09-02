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
import { FaHome, FaMoon, FaSun, FaExpand, FaCompress } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import APARTMENTS from './apartments';

const PLACEHOLDER_IMG = 'https://placehold.co/320x160?text=Apartment';

// أيقونة مع السعر
const createPriceIcon = (price) =>
  L.divIcon({
    html: ReactDOMServer.renderToString(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          backgroundColor: '#f97316',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          padding: '3px 6px',
          borderRadius: '6px',
          marginBottom: 4,
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          whiteSpace: 'nowrap'
        }}>
         ab €{price}
        </div>
        <div style={{
          backgroundColor: '#2563eb',
          width: 36,
          height: 36,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 6px rgba(0,0,0,0.4)'
        }}>
          <FaHome color="white" size={18} />
        </div>
      </div>
    ),
    className: '',
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -55],
  });

function LocateUserButton({ setUserLocation }) {
  const map = useMap();

  const handleClick = () => {
    if (!navigator.geolocation) return alert('Geolocation wird nicht unterstützt');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
        map.flyTo([latitude, longitude], 13, { animate: true });
      },
      () => alert('Standort konnte nicht ermittelt werden')
    );
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 z-[999] bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer"
    >
      📍 Mein Standort
    </button>
  );
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
  zoomEnabled,
  setZoomEnabled,
}) {
  const map = useMap();

  // تابع لتفعيل الزووم عند الضغط على Overlay
  const enableZoom = () => {
    map.scrollWheelZoom.enable();
    setZoomEnabled(true);
  };

  return (
    <>
      <MapClickHandler onMapClick={() => setSelectedApartment(null)} />

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
          const position = [apt.lat, apt.lng];

          return (
            <Marker
              key={apt.id}
              position={position}
              icon={createPriceIcon(apt.price)}
              eventHandlers={{
                click: () => setSelectedApartment(apt),
              }}
            >
              <Popup>
                <div className="w-44 animate-fadeIn">
                  <img
                    src={apt.image || PLACEHOLDER_IMG}
                    alt={apt.name}
                    className="w-full h-24 object-cover rounded-xl shadow-md mb-2"
                    onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
                  />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">{apt.name}</p>
                    <p className="text-gray-600">🏙️ {apt.city}</p>
                    <p>🛏️ {apt.rooms}</p>
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
        <Marker position={userLocation} icon={createPriceIcon('Du')}>
          <Popup>Du bist hier!</Popup>
        </Marker>
      )}

      <LocateUserButton setUserLocation={setUserLocation} />

      {/* Overlay واضح مع زر لتفعيل الزووم */}
      {!zoomEnabled && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[999]">
          <button
            className="logoBG text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition text-lg"
            onClick={enableZoom}
          >
            🔓 Zoom aktivieren
          </button>
        </div>
      )}
    </>
  );
}

const ApartmentMap = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const mapCenter = [53.5, 10.0];

  return (
    <>
      {/* أزرار التحكم */}
      <div className='relative bg-gray-100'>
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="absolute top-20 left-3 z-10 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer"
        >
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-32 left-3 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition-all duration-300"
        >
          {darkMode ? <FaMoon className="text-gray-800 w-5 h-5 animate-fadeIn" /> : <FaSun className="text-yellow-500 w-5 h-5 animate-fadeIn" />}
        </button>
      </div>

      {/* الخريطة */}
      <div className={`${isFullScreen ? 'fixed top-0 left-0 w-full h-full z-[1000]' : 'relative w-full h-full z-0'}`}>
        <MapContainer
          center={mapCenter}
          zoom={6}
          scrollWheelZoom={false}   // افتراضياً معطّل
          className="h-full w-full"
        >
          <MapContent
            selectedApartment={selectedApartment}
            setSelectedApartment={setSelectedApartment}
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            darkMode={darkMode}
            zoomEnabled={zoomEnabled}
            setZoomEnabled={setZoomEnabled}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default ApartmentMap;
