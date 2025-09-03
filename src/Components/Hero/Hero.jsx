
import { useLocation } from 'react-router-dom';
import MieterSection from '../../Mieter/MieterSection';
import VermieterSection from '../../Vermeiter/VermieterSection';

const Hero = () => {

  const location = useLocation().pathname
  console.log(location);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:min-h-screen pt-35 sm:pt-20">
    { location === '/mieter' ? <MieterSection /> : location === '/vermieter' ? <VermieterSection /> : <>
      <MieterSection /> <VermieterSection />
    </> }
    </div>
  );
};

export default Hero;
