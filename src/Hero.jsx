import hero1 from './assets/hero1.png';
import hero2 from './assets/hero2.png';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-20">
      {/* القسم الأول: المستأجرين */}
      <div className="flex flex-col justify-center items-center bg-white text-red-500 p-10 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold mb-4 opacity-0 animate-fade-in">I'm Looking to Rent</h2>
        <p className="text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200">
          Discover amazing properties with our smart search.<br />
          Find your perfect space.
        </p>
        <button className="cursor-pointer border-2 border-red-500 text-red-500 bg-white px-6 py-3 rounded-full font-bold hover:bg-red-500 hover:text-white transition mb-4 opacity-0 animate-fade-in delay-50">
          Start Searching
        </button>

        {/* صورة مع فقاعات */}
       <div className="relative mt-5 w-[300px]">
        <img src={hero1} alt="Search Illustration" className="w-full" />


        </div>
        
      </div>

      {/* القسم الثاني: أصحاب العقارات */}
      <div className="flex flex-col justify-center items-center bg-red-500 text-white p-10 relative overflow-hidden">
        <h2 className="text-4xl text-center  font-extrabold mb-4 opacity-0 animate-fade-in">I Want to List Property</h2>
        <p className="text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200">
          Maximize rental income with our powerful tools.<br />
          List, manage, and earn.
        </p>
        <button className="cursor-pointer border-2 border-white text-white bg-red-500 px-6 py-3 rounded-full font-bold hover:bg-white hover:text-red-500 transition mb-4 opacity-0 animate-fade-in delay-50">
          List Your Property
        </button>

        {/* صورة مع فقاعات */}
        <div className="relative mt-5 w-[300px]">
          <img src={hero2} alt="Listing Illustration" className="w-full animate-fade-in delay-600" />
        
        </div>
      </div>
    </div>
  );
};

export default Hero;


  {/* فقاعات موزعة حول الصورة */}
  {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
    10,000+ Properties
  </div> */}


  {/* <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
    Easy Booking
  </div> */}
  {/* <div className="absolute bottom-0 right-0 bg-red-500 text-white px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
    24/7 Support
  </div> */}


    {/* <div className="absolute top-0 left-0 bg-white text-red-500 px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
            Free Listing
          </div>
          <div className="absolute top-0 right-0 bg-white text-red-500 px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
            Quality Tenants
          </div>
          <div className="absolute bottom-0 left-[30%] bg-white text-red-500 px-3 py-1 rounded-full text-xs shadow-lg hover:scale-105 transition-transform duration-300">
            Secure Payments
          </div> */}