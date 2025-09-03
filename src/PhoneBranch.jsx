import { useEffect, useState } from "react";

export default function NearestBranch() {
  const [nearest, setNearest] = useState(null);

  // قائمة الفروع مع الإحداثيات
  const branches = [
    { name: "North", phone: "+49 30 111111", lat: 52.52, lng: 13.405 }, // برلين مثال
    { name: "South", phone: "+49 30 222222", lat: 48.135, lng: 11.582 }, // ميونخ
    { name: "East", phone: "+49 30 333333", lat: 51.05, lng: 13.74 },   // درسدن
    { name: "West", phone: "+49 30 444444", lat: 50.94, lng: 6.96 },    // كولن
  ];

  // دالة لتحويل الدرجات إلى راديان
  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  // معادلة Haversine لحساب المسافة بين نقطتين
  function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // نصف قطر الأرض بالمتر
    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lng2 - lng1);

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // المسافة بالمتر
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;

          let nearestBranch = null;
          let minDist = Infinity;

          branches.forEach((branch) => {
            const dist = haversineDistance(
              latitude,
              longitude,
              branch.lat,
              branch.lng
            );
            if (dist < minDist) {
              minDist = dist;
              nearestBranch = branch;
            }
          });

          setNearest(nearestBranch);
        },
        (err) => {
          console.error("Geolocation error:", err);
          // افتراضياً نختار فرع معين لو الزبون ما سمح بالـ location
          setNearest(branches[0]);
        }
      );
    }
  }, []);

  return (
    <div className="p-6 text-center bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Kontaktiere uns</h2>
      {nearest ? (
        <div>
          <p className="mb-2">
            Dein nächster Standort:{" "}
            <span className="font-semibold">{nearest.name}</span>
          </p>
          <p className="mb-4">Telefonnummer: {nearest.phone}</p>
          <a
            href={`tel:${nearest.phone}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Jetzt anrufen
          </a>
        </div>
      ) : (
        <p>Wir ermitteln deinen Standort...</p>
      )}
    </div>
  );
}
