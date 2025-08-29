import { FaUsers, FaSearch, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const features = [
  {
    icon: FaUsers,
    title: "Hohe Auslastung",
    description: "Profitieren Sie von einer guten Auslastung, auch in der Nebensaison.",
  },
  {
    icon: FaSearch,
    title: "Tausende Suchende",
    description: "Monatlich erreichen Sie zahlreiche potenzielle Gäste.",
  },
  {
    icon: FaHome,
    title: "Optimale Präsentation",
    description: "Ihre Unterkunft wird ansprechend und professionell dargestellt.",
  },
];

const HeroSection = ({ handleClick }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="logoBG text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Haben Sie eine Unterkunft und möchten sie vermieten?
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Tragen Sie Ihre Unterkunft bei uns ein und erreichen Sie jeden Monat
          tausende Suchende – mit einer attraktiven und professionellen Präsentation.
        </p>

        {/* المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center transition-transform duration-300"
              >
                <Icon className="logoTextWhite text-5xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* الزر */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="logoBGWhite logoText font-semibold px-8 py-3 rounded-lg shadow-lg nurHover transition cursor-pointer 
                     hover:bg-blue-100 active:shadow-inner duration-300 ease-in-out animate-pulse"
        >
         <NavLink to='/vermieter'> Unterkunft eintragen</NavLink>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;