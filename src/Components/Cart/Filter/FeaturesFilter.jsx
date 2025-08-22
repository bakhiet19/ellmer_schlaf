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
    <div className="mb-4 w-full max-w-md">
  <label className="block text-sm font-medium text-gray-700 mb-2">🧰 Ausstattung</label>
  <div className="flex flex-wrap gap-2">
    {features.map((feature) => (
      <button
        key={feature}
        onClick={() => toggleFeature(feature)}
        className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer ${
          selectedFeatures.includes(feature)
            ? 'bg-red-500 text-white border-red-500'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        {feature}
      </button>
    ))}
  </div>
</div>
  );
}
