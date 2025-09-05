import { FaRegClock, FaRegCommentDots, FaRegEdit, FaRegMoneyBillAlt, FaRegBuilding } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaRegClock className="text-red-600 text-xl" />,
    title: 'Schnelle Unterkunft finden',
    description: 'Wir helfen Ihnen, kurzfristig verfügbare Optionen zu finden – flexibel und zuverlässig.',
  },
  {
    icon: <FaRegCommentDots className="text-red-600 text-xl" />,
    title: 'Individuelle Wünsche klären',
    description: 'Ob besondere Lage, Ausstattung oder Gruppengröße – wir beraten Sie persönlich.',
  },
  {
    icon: <FaRegEdit className="text-red-600 text-xl" />,
    title: 'Buchung ändern oder stornieren',
    description: 'Wir finden gemeinsam eine Lösung – schnell und kundenorientiert.',
  },
  {
    icon: <FaRegMoneyBillAlt className="text-red-600 text-xl" />,
    title: 'Fragen zur Abrechnung',
    description: 'Unser Team erklärt Ihnen alles Schritt für Schritt – transparent und unkompliziert.',
  },
  {
    icon: <FaRegBuilding className="text-red-600 text-xl" />,
    title: 'Unterkunft vermieten',
    description: 'Wir unterstützen Vermieter dabei, ihre Objekte optimal zu präsentieren und schnell zu vermieten.',
  },
];

export default function ContactReasons() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold logoText mb-6 text-center">
        Warum sollten Sie uns kontaktieren?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div>{reason.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-700">{reason.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}