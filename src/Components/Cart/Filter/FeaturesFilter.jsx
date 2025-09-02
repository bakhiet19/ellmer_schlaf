import { Controller, useFormContext } from "react-hook-form";

const features = ['Balkon', 'Garten', 'Parkplatz', 'Möbliert'];

export default function FeaturesFilter() {
  const { control } = useFormContext();

  return (
    <div className="mb-4 w-full max-w-md mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        🧰 Filter nach Ausstattung
      </label>

      <Controller
        name="features"
        control={control}
        defaultValue={[]} // مصفوفة فارغة بالبداية
        render={({ field }) => {
          const { value, onChange } = field;

          const toggleFeature = (feature) => {
            let newSelected;
            if (value.includes(feature)) {
              newSelected = value.filter((f) => f !== feature);
            } else {
              newSelected = [...value, feature];
            }
            onChange(newSelected); // تحديث قيمة الفورم
          };

          return (
            <div className="flex flex-nowrap gap-2 justify-between items-center">
              {features.map((feature) => (
                <button
                  type="button"
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer ${
                    value.includes(feature)
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}
