import { Trans, useTranslation } from "react-i18next";
import { HiSearchCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function HeroPage() {


   const { t } = useTranslation();

  return (

    // <section className="h-screen w-full bg-gradient-to-br from-rose-100 via-white to-blue-50 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
    //   <div className="max-w-5xl mx-auto text-center animate-fade-in">

    <section
      className="min-h-[calc(100vh-100px)] w-full bg-cover bg-center relative px-6 sm:px-12 lg:px-24 flex items-center justify-center"
    >
      {/* طبقة التدرج اللوني الشفافة فوق الصورة */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-blue-100/30 backdrop-blur-sm"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">

        <h1 className="text-5xl sm:text-6xl font-extrabold text-rose-700 mb-6 drop-shadow-lg">
         {t('heroTitle')}
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          {t('heroDescription')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <NavLink
            to="/mieter"
            className="flex items-center justify-center gap-2 bg-rose-500 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <span>{t('heroFindAccommodation')}</span>
            <HiSearchCircle className="w-6 h-6" />
          </NavLink>

          <NavLink
            to="/vermieter"
            className="bg-white border-2 border-rose-500 text-rose-500 px-10 py-3 rounded-full text-lg font-semibold hover:bg-rose-50 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            {t('heroRentNow')}
          </NavLink>
        </div>

        <div className="text-sm text-gray-500">
             <Trans i18nKey="heroTrustedCustomers">
        ⭐️ Bereits über <strong>1.000 zufriedene Kunden</strong> vertrauen auf uns
      </Trans>
        </div>
      </div>
    </section>
  );
}
