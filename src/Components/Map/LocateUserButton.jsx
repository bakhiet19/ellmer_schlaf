import { useMap } from 'react-leaflet';

const LocateUserButton = ({ setUserLocation }) => {
  const map = useMap();
  const handleClick = () => {
    if (!navigator.geolocation) return alert('Geolocation wird nicht unterstützt');
    navigator.geolocation.getCurrentPosition(
      (pos) => { const { latitude, longitude } = pos.coords; setUserLocation([latitude, longitude]); map.flyTo([latitude, longitude], 13, { animate:true }); },
      () => alert('Standort konnte nicht ermittelt werden')
    );
  };
  return (
    <button onClick={handleClick} className="absolute top-20 right-4 z-[999] bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition" title="Mein Standort">📍</button>
  );
};

export default LocateUserButton;
