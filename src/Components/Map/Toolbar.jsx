import { FaExpand, FaCompress, FaSun, FaMoon } from 'react-icons/fa';
import { PiLockOpen, PiLock } from 'react-icons/pi';

const Toolbar = ({ isFullScreen, setIsFullScreen, zoomEnabled, setZoomEnabled, darkMode, setDarkMode }) => {
  return (
    <div className="absolute top-20 left-3 z-50 flex flex-col gap-3">
      <button
        onClick={() => setIsFullScreen(!isFullScreen)}
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        title="Fullscreen"
      >
        {isFullScreen ? <FaCompress /> : <FaExpand />}
      </button>

      <button
        onClick={() => setZoomEnabled(!zoomEnabled)}
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        title="Zoom sperren"
      >
        {zoomEnabled ? <PiLockOpen className="text-green-600 w-5 h-5" /> : <PiLock className="text-red-600 w-5 h-5" />}
      </button>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        title="Dark/Light Mode"
      >
        {darkMode ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default Toolbar;
