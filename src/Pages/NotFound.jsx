// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 logoText px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Ups! Diese Seite existiert nicht 💤</p>
      <Link
        to="/"
        className="logoBG text-white px-6 py-2 rounded hover:bg-gray-700 transition"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}

export default NotFound;