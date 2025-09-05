import { useTranslation } from "react-i18next";
import Head from "../Sections/Head";
import team from "../../assets/team.jpg";
import { NavLink } from "react-router-dom";

export default function UberUns() {
  const { t } = useTranslation();

  return (
    <section
      id="uberuns"
      className="max-w-7xl mx-auto px-6 py-20 text-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* الصورة */}
        <div className="flex justify-center md:justify-start">
          <img
            src={team}
            alt="Über uns"
            className="rounded-2xl shadow-xl object-cover w-full max-w-[500px] h-[400px] md:h-[450px]"
          />
        </div>

        {/* النص */}
        <div className="text-center md:text-left border border-red-500 p-10 rounded-2xl">
          <Head className="text-transparent bg-clip-text logoBG mb-6 text-3xl md:text-4xl font-bold">
            {t("about_us.title")}
          </Head>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {t("about_us.description_extended")}
            <br />
            <span className="font-medium text-gray-900">
              Wir machen Unterkunftssuche für Handwerker so einfach wie möglich.
            </span>
          </p>
          <NavLink
            to="/about"
            className="inline-block px-7 py-3 logoBG logoTextWhite text-base md:text-lg font-medium rounded-xl shadow-md hoverLogoMehr transition-transform hover:scale-105"
          >
             Erfahren Sie mehr
          </NavLink>
        </div>
      </div>
    </section>
  );
}
