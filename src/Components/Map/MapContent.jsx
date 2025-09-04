import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, GeoJSON, LayersControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import APARTMENTS from './apartments';
import germanyStates from '../../germanyStates.json';
import LocateUserButton from './LocateUserButton';

const { BaseLayer, Overlay } = LayersControl;
const PLACEHOLDER_IMG = 'https://placehold.co/320x160?text=Apartment';
const regionColors = { Nord: '#3b82f6', Süd: '#ef4444', West: '#10b981', Ost: '#f59e0b' };

const createPriceIcon = (price) => L.divIcon({
  html: ReactDOMServer.renderToString(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#f97316', color: 'white', fontWeight: 'bold', fontSize: '12px', padding: '3px 6px', borderRadius: '6px', marginBottom: 4, boxShadow: '0 2px 4px rgba(0,0,0,0.3)', whiteSpace: 'nowrap' }}>ab €{price}</div>
      <div style={{ backgroundColor: '#2563eb', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 6px rgba(0,0,0,0.4)' }}>🏠</div>
    </div>
  ),
  className: '', iconSize: [40, 50], iconAnchor: [20, 50], popupAnchor: [0, -55]
});

const MapClickHandler = ({ onMapClick }) => { useMapEvent('click', onMapClick); return null; };

const MapContent = ({ selectedApartment, setSelectedApartment, userLocation, setUserLocation, zoomEnabled, darkMode, mapCenter }) => {
  const map = useMap();

  useEffect(() => { if (zoomEnabled) map.scrollWheelZoom.enable(); else map.scrollWheelZoom.disable(); }, [zoomEnabled, map]);

  return (
    <>
      <MapClickHandler onMapClick={() => setSelectedApartment(null)} />

      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap Hell">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap" />
        </BaseLayer>

        <BaseLayer name="OpenStreetMap Dark">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="© OpenStreetMap contributors © CARTO" subdomains={['a','b','c','d']} />
        </BaseLayer>

        <BaseLayer name="Satellite">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Tiles © Esri" />
        </BaseLayer>

        <Overlay checked name="Deutschland Regionen">
          <GeoJSON data={germanyStates} style={(f)=>({color:'black',weight:1.5,fillOpacity:0.3,fillColor:regionColors[f.properties.region]||'gray'})}
            onEachFeature={(f,l)=>{ l.bindTooltip(`${f.properties.name} - ${f.properties.region}`,{sticky:true,direction:'top',className:'text-xs font-semibold bg-white px-1 rounded shadow-md'})}} />
        </Overlay>

        <Overlay checked name="Apartments">
          <MarkerClusterGroup>
            {APARTMENTS.map(apt=>(
              <Marker key={apt.id} position={[apt.lat,apt.lng]} icon={createPriceIcon(apt.price)} eventHandlers={{ click:()=>setSelectedApartment(apt) }}>
                <Popup>
                  <div className="w-44 animate-fadeIn">
                    <img src={apt.image||PLACEHOLDER_IMG} alt={apt.name} className="w-full h-24 object-cover rounded-xl shadow-md mb-2" onError={e=>{e.currentTarget.src=PLACEHOLDER_IMG}}/>
                    <div className="text-xs space-y-1">
                      <p className="font-semibold">{apt.name}</p>
                      <p className="text-gray-600">🏙️ {apt.city}</p>
                      <p>🛏️ {apt.rooms}</p>
                      <button className="mt-1 w-full logoBG text-white rounded-md text-xs py-1 hoverLogoWhite">Details</button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </Overlay>

        {userLocation && (
          <Overlay checked name="Mein Standort">
            <Marker position={userLocation}>
              <Popup>Du bist hier!</Popup>
            </Marker>
          </Overlay>
        )}
      </LayersControl>

      <LocateUserButton setUserLocation={setUserLocation} />
    </>
  );
};

export default MapContent;
