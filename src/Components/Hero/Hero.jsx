
import MieterSection from '../../Mieter/MieterSection';
import VermieterSection from '../../Vermeiter/VermieterSection';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:min-h-screen pt-25 sm:pt-20">
     <MieterSection />
     <VermieterSection />
    </div>
  );
};

export default Hero;
