import { FaBolt, FaChartBar, FaTags, FaLock, FaSearch } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBolt className="text-orange-500 w-6 h-6" />,
      title: 'Schnelle & einfache Buchung',
    },
    {
      icon: <FaChartBar className="text-blue-500 w-6 h-6" />,
      title: 'Transparente Auswertung',
    },
    {
      icon: <FaTags className="text-green-500 w-6 h-6" />,
      title: 'Kostengünstige Angebote',
    },
    {
      icon: <FaLock className="text-purple-500 w-6 h-6" />,
      title: 'Sichere Zahlung',
    },
    {
      icon: <FaSearch className="text-pink-500 w-6 h-6" />,
      title: 'Über 1200 Anbieter finden',
    },
  ];

  return (
    <section className="py-10 logoBG my-10">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="bg-gray-100 p-4 rounded-full shadow-md">
                {feature.icon}
              </div>
              <p className="text-sm font-medium logoTextWhite">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;