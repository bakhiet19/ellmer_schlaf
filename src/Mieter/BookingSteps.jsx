import { FaUserCheck, FaPhoneAlt, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUserCheck />,
    title: 'Experten wählen oder Fragebogen ausfüllen',
    description: 'Wählen Sie einen Experten aus oder füllen Sie unseren Mieter-Fragebogen aus.',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Kontakt innerhalb von 24 Stunden',
    description: 'Unsere Experten melden sich innerhalb von 24h bei Ihnen und beraten Sie persönlich.',
  },
  {
    icon: <FaSmile />,
    title: 'Aufenthalt genießen',
    description: 'Genießen Sie Ihren Aufenthalt nachdem Sie unsere Dienstleistung genutzt haben.',
  },
];

export default function BuchungSektion() {
  return (
    <section className="bg-gradient-to-br from-white to-red-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold logoText mb-10"
        >
          Einfache Buchung in drei Schritten
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-6 text-gray-800">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 logoText">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}