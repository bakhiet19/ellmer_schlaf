import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import wohnung1 from '../../assets/wohnung1.jpg';
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
  { id: 7, city: 'Kiel', name: 'Modernes Apartment nahe dem Hafen', lat: 54.3233, lng: 10.1228 },
  { id: 8, city: 'Lübeck', name: 'Charmante Altbauwohnung im Zentrum', lat: 53.8655, lng: 10.6866 },
  { id: 9, city: 'Flensburg', name: 'Gemütliches Studio mit Meerblick', lat: 54.7930, lng: 9.4469 },
  { id: 10, city: 'Neumünster', name: 'Helles Apartment in ruhiger Lage', lat: 54.0736, lng: 9.9816 },
  { id: 11, city: 'Itzehoe', name: 'Zentrales Apartment mit Terrasse', lat: 53.9279, lng: 9.5156 }
];

const ApartmentMap = () => {

  const handleViewDetails = () => {
    if (selectedApartment) {
      navigate(`/apartment/${selectedApartment.id}`);
    }
  };



  const mapCenter = [52.5, 10.5];
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
    }}>
        <h2 style={{ fontSize: '1.6rem', color: '#e74c3c', marginBottom: '1rem', textAlign : 'center' }}>
          🗺️ Wohnungen auf der Karte
        </h2>
      {/* 🗺️ قسم الخريطة */}



      <div className="grid gap-8 grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div>
      
        <MapContainer
          className='order-2 md:order-1'
          center={mapCenter}
          zoom={6}
          style={{
            zIndex : 2,
            height: '350px',
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='© OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {APARTMENTS.map((apt) => (
            <Marker key={apt.id} position={[apt.lat, apt.lng]}>
              <Popup>
                <div onClick={() => setSelectedApartment(apt)} style={{ cursor: 'pointer' }}>
                  <strong>{apt.name}</strong><br />
                  Stadt: {apt.city}<br />
                  <em>Klick für Details</em>
                  <img src={wohnung1} className='w-100 h-30 object-cover' />
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* 📋 قسم المعلومات */}
       <div className='order-1 md:order-2' style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      height: 'fit-content',
    }}>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#34495e' }}>
        📋 Informationen zur Wohnung
      </h3>
      {selectedApartment !== null ? (
        <div>
          <p><strong>🏠 Name:</strong> {selectedApartment.name}</p>
          <p><strong>🌆 Stadt:</strong> {selectedApartment.city}</p>
          <p><strong>📍 Lage:</strong> {selectedApartment.lat}, {selectedApartment.lng}</p>
          <p><strong>🧭 Nahe Orte:</strong></p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li>🛒 Supermarkt: 5 Min entfernt</li>
            <li>🏥 Krankenhaus: 10 Min entfernt</li>
            <li>🚉 Bahnhof: 8 Min entfernt</li>
          </ul>

          <button
            onClick={handleViewDetails}
            style={{
              marginTop: '1rem',
              color: '#fff',
              padding: '0.6rem 1.2rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            className='bg-red-500'
          >
            🔍 Details anzeigen
          </button>
        </div>
      ) : (
        <p style={{ color: '#7f8c8d' }}>Klicke auf eine Wohnung in der Karte, um Details zu sehen.</p>
      )}
    </div>



      
      </div>


   



    </div>
  );
};

export default ApartmentMap;