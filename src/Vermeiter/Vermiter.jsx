import { FaUsers, FaSearch, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const features = [
  {
    icon: FaUsers,
    title: "Hohe Auslastung",
    description: "Wir sorgen für hohe Auslastungsraten – auch in der Nebensaison.",
  },
  {
    icon: FaSearch,
    title: "Tausende Suchanfragen",
    description: "Profitieren Sie von unserer Reichweite und Sichtbarkeit.",
  },
  {
    icon: FaHome,
    title: "Professionelle Präsentation",
    description: "Ihre Unterkunft wird optimal und ansprechend dargestellt.",
  },
];

const HeroSection = ({ handleClick }) => {

  const loc = useLocation().pathname

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="logoBG logoTextWhite py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sie möchten Ihre Unterkunft unkompliziert vermieten?
        </h2>

        {/* النص الفرعي مع كسر الأسطر */}
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Listen Sie Ihre Unterkunft noch heute bei <span className="font-semibold">ELLMER rooms</span> <br />
          und profitieren Sie von tausenden Suchanfragen täglich – <br />
          einfach, unkompliziert und professionell.
        </p>

        {/* المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center transition-transform duration-300"
              >
                <Icon className="logoTextWhite text-5xl mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* الزر */}
       {loc === '/vermieter' ? '' :  <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="logoBGWhite logoText font-semibold px-8 py-3 rounded-lg shadow-lg nurHover transition cursor-pointer 
                     hover:bg-blue-100 active:shadow-inner duration-300 ease-in-out animate-pulse"
        >
          <NavLink to="/vermieter">Unterkunft eintragen</NavLink>
        </motion.button>}
      </div>
    </motion.section>
  );
};

export default HeroSection;