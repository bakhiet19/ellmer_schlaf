import { regionColors } from "./Map";


const Legend = () => (
  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg z-50 text-xs">
    {Object.entries(regionColors).map(([name,color])=>(
      <div key={name} className="flex items-center gap-2">
        <div style={{backgroundColor:color,width:12,height:12}}></div>
        {name}
      </div>
    ))}
  </div>
);

export default Legend;
