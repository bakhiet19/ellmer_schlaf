import hero2 from '../assets/hero2.png';
import Head from '../Components/Head';

const bubbles = [
  { text: 'Kostenlose Anzeige', position: 'top-[-0.5rem] left-1/2 -translate-x-1/2' },
  { text: 'Qualifizierte Mieter', position: 'top-1/2 -translate-y-1/2 -left-[6.5rem]' },
  { text: 'Sichere Zahlungen', position: 'bottom-0 right-0' },
];

const VermieterSection = () => {
  return (
    <div className="flex flex-col justify-around items-center text-logoTextWhite p-5 sm:p-10 relative overflow-hidden logoBG">
      <div className="text-center">
        <Head className="animate-fade-in logoTextWhite">
          Ich möchte vermieten
        </Head>
        <p className="text-base sm:text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200 logoTextWhite">
          Steigern Sie Ihre Mieteinnahmen mit unseren smarten Tools.<br />
          Inserieren, verwalten und verdienen – ganz einfach.
        </p>
        <button className="mx-auto block font-bold px-4 sm:px-12 py-2 sm:py-3 rounded-full transition mb-4 opacity-0 animate-fade-in delay-50 text-sm sm:text-base cursor-pointer logoBG borderWhite hoverLogoRed logoTextWhite">
          {'Jetzt inserieren'.toUpperCase()}
        </button>
      </div>

      <div className="relative mt-5 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]">
        <img
          src={hero2}
          alt="Vermietung Illustration"
          className="w-full h-full object-contain p-3 sm:p-5 z-10 relative"
          loading="lazy"
        />

        {bubbles.map(({ text, position }, i) => (
          <div
            key={i}
            className={`absolute ${position} logoBGWhite logoText px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg borderRed hidden lg:block bubble-anim`}
            style={{
              animation: 'bubbleFloat 3s ease-in-out infinite',
              animationDelay: `${0.1 + i * 0.2}s`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VermieterSection;
