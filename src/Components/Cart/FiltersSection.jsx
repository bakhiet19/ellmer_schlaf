import Cities from "./Cities";
import PreisFilterInput from "./PreisFilterInput";

export default function FilterSection() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-4 p-4 bg-white rounded-xl shadow-md space-y-6">
      
      {/* الفلاتر */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between">
        <Cities />
        <PreisFilterInput />
      </div>
    </div>
  );
}