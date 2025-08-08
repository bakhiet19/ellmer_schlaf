import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// إعداد أيقونات leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// بيانات الشقق
const APARTMENTS = [
  { id: 1, city: 'Lübeck', name: 'Schöne Wohnung am Fluss', lat: 53.8655, lng: 10.6866 },
  { id: 2, city: 'Lübeck', name: 'Modernes Apartment im Zentrum', lat: 53.8700, lng: 10.6850 },
  { id: 3, city: 'Hamburg', name: 'Gemütliche Wohnung in Altona', lat: 53.5500, lng: 9.9937 },
  { id: 4, city: 'Berlin', name: 'Stylisches Studio in Mitte', lat: 52.5200, lng: 13.4050 },
  { id: 5, city: 'Kiel', name: 'Helle Wohnung nahe Uni', lat: 54.3233, lng: 10.1228 },
  { id: 6, city: 'Hannover', name: 'Ruhiges Apartment mit Balkon', lat: 52.3759, lng: 9.7320 },
];

const ApartmentMap = () => {
  const mapCenter = [52.5, 10.5];
  const cities = [...new Set(APARTMENTS.map((apt) => apt.city))];

  return (
    <div className='bg-gray-100' style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <h2 style={{
        marginBottom: '1rem',
        color: '#2c3e50',
        fontSize: '1.8rem',
        fontWeight: '600',
      }}>
        🗺️ Wohnungen auf der Karte
      </h2>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '720px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <div style={{
          backgroundColor: '#eaf4ff',
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#34495e',
          fontSize: '1rem',
        }}>
          <strong>{APARTMENTS.length}</strong> verfügbare Wohnungen in&nbsp;
          <strong>{cities.join(', ')}</strong>
        </div>

        <MapContainer
          center={mapCenter}
          zoom={6}
          style={{
            height: '400px',
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {APARTMENTS.map((apt) => (
            <Marker key={apt.id} position={[apt.lat, apt.lng]}>
              <Popup>
                <strong>{apt.name}</strong><br />
                Stadt: {apt.city}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ApartmentMap;