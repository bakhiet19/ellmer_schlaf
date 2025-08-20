import { useState, useContext } from "react";
import { FilterContext } from "../../../Hooks/FilterContext";

const features = ['Balkon', 'Garten', 'Parkplatz', 'Möbliert'];

export default function FeaturesFilter() {
  const { filterData, setFilterData } = useContext(FilterContext);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const toggleFeature = (feature) => {
    let newSelected;
    if (selectedFeatures.includes(feature)) {
      newSelected = selectedFeatures.filter(f => f !== feature);
    } else {
      newSelected = [...selectedFeatures, feature];
    }
    setSelectedFeatures(newSelected);
    setFilterData({
      ...filterData,
      extra: newSelected
    });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <button
            key={feature}
            onClick={() => toggleFeature(feature)}
            className={`px-3 py-1 rounded-full border cursor-pointer mb-2 mt-2 ${
              selectedFeatures.includes(feature)
                ? 'logoBG text-white border-red-500'
                : 'logoBGWhite text-gray-700 border-gray-300 hover:bg-gray-100'
            } transition`}
          >
            {feature}
          </button>
        ))}
      </div>
    </div>
  );
}
