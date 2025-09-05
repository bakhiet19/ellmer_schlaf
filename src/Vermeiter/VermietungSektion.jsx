import { FaWpforms, FaUserTie, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaWpforms />,
    title: 'Vermieter-Fragebogen ausfüllen',
    description: 'Füllen Sie den Fragebogen aus, um Ihre Anfrage zu starten.',
  },
  {
    icon: <FaUserTie />,
    title: 'Ein Mitarbeiter meldet sich',
    description: 'Wir setzen uns umgehend mit Ihnen in Verbindung.',
  },
  {
    icon: <FaClock />,
    title: 'Bearbeitung innerhalb von 5 Werktagen',
    description: 'Wir garantieren eine schnelle und zuverlässige Bearbeitung.',
  },
];

export default function VermietungSektion() {
  return (
    <section className="bg-gradient-to-tr from-gray-50 to-red-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold logoText mb-10"
        >
          Einfache Vermietung in drei Schritten
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 logoText">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 logoBG logoTextWhite px-6 py-3 rounded-full font-medium shadow-md hover:bg-red-600 transition-colors"
        >
          Fragebogen starten
        </motion.button>
      </div>
    </section>
  );
}