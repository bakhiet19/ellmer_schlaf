import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:min-h-screen pt-25 sm:pt-20">
      {/* القسم الأول: المستأجرين */}
      <div className="flex flex-col justify-around items-center bg-white text-red-500 p-5 sm:p-10 relative overflow-hidden">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 opacity-0 animate-fade-in">
            Ich suche eine Wohnung
          </h2>
          <p className="text-base sm:text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200">
            Entdecken Sie hochwertige möblierte Wohnungen.<br />
            Finden Sie Ihr perfektes Zuhause – schnell und unkompliziert.
          </p>
          <button className="mx-auto block border-2 border-red-500 text-red-500 bg-white px-4 sm:px-12 py-2 sm:py-3 rounded-full font-bold hover:bg-red-500 hover:text-white transition mb-4 opacity-0 animate-fade-in delay-50 text-sm sm:text-base cursor-pointer">
            Jetzt suchen
          </button>
        </div>

        {/* صورة مع فقاعات */}
        <div className="relative mt-5 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]">
          <img src={hero1} alt="Suche Illustration" className="w-full h-full object-contain p-3 sm:p-5 z-10 relative" />

          {/* فقاعات */}
          <div  style={{
    animation: 'bubbleFloat 3s ease-in-out infinite',
    animationDelay: '0.3s',
    animationDelay: '0.1s'
  }}
 className="border border-red-500 absolute -top-8 sm:-top-10 left-6 sm:left-12 bg-white text-red-500 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg transition-transform duration-300 hidden lg:block bubble-anim" >
            10.000+ Wohnungen
          </div>

          <div   style={{
    animation: 'bubbleFloat 3s ease-in-out infinite',
    animationDelay: '0.3s',
    animationDelay: '0.1s'
  }} className="absolute top-6 sm:top-10 -left-[70px] sm:-left-[100px] bg-red-500 text-white px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg transition-transform duration-300 hidden lg:block bubble-anim">
            Einfache Buchung
          </div>

          <div   style={{
    animation: 'bubbleFloat 3s ease-in-out infinite',
    animationDelay: '0.3s',
    animationDelay: '0.1s'
  }} className="absolute top-6 sm:top-10 right-0 bg-red-500 text-white px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg transition-transform duration-300 hidden lg:block bubble-anim">
            24/7 Support
          </div>
        </div>
      </div>

      {/* القسم الثاني: أصحاب العقارات */}
      <div className="flex flex-col justify-around items-center bg-red-500 text-white p-5 sm:p-10 relative overflow-hidden">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 opacity-0 animate-fade-in">
            Ich möchte vermieten
          </h2>
          <p className="text-base sm:text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200">
            Steigern Sie Ihre Mieteinnahmen mit unseren smarten Tools.<br />
            Inserieren, verwalten und verdienen – ganz einfach.
          </p>
          <button className="mx-auto block border-2 border-white text-white bg-red-500 px-4 sm:px-12 py-2 sm:py-3 rounded-full font-bold hover:bg-white hover:text-red-500 transition mb-4 opacity-0 animate-fade-in delay-50 text-sm sm:text-base cursor-pointer">
            Jetzt inserieren
          </button>
        </div>

        {/* صورة مع فقاعات */}
        <div className="relative mt-5 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]">
          <img src={hero2} alt="Vermietung Illustration" className="w-full h-full object-contain p-3 sm:p-5 z-10 relative" />

          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-red-500 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg border border-red-500 hidden lg:block bubble-anim" style={{ animationDelay: '0.1s' }}>
            Kostenlose Anzeige
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 sm:-left-26 bg-white text-red-500 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg border border-red-500 hidden lg:block bubble-anim" style={{ animationDelay: '0.3s' }}>
            Qualifizierte Mieter
          </div>
          <div className="absolute bottom-0 right-0 bg-white text-red-500 px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg border border-red-500 hidden lg:block bubble-anim" style={{ animationDelay: '0.5s' }}>
            Sichere Zahlungen
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
