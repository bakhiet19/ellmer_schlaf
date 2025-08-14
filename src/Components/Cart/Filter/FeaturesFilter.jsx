import { useState } from "react";
import FilterButton from "./FilterButton";

const features = ['Balkon', 'Garten', 'Parkplatz', 'Möbliert'];

export default function FeaturesFilter() {


  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div>
      {/* <label className=" text-sm font-medium text-gray-700 mb-2">Extras</label> */}
      
      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <>
          <button
            key={feature}
            onClick={() => toggleFeature(feature)}
            className={`px-3 py-1 rounded-full border cursor-pointer ${
              selectedFeatures.includes(feature)
                ? 'logoBG text-white border-red-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            } transition`}
          >
            {feature}
          </button>
          
          </>
        ))}
        
      </div>
     
    </div>
  );
}