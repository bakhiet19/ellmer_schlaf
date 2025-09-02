import { useTranslation } from "react-i18next";
import Head from "../Head";
import team from '../../assets/team.jpg'
import { NavLink } from "react-router-dom";

export default function UberUns() {
  const { t } = useTranslation();

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16 text-gray-800"
      id="uberuns"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* الصورة */}
        <div className="flex justify-center md:justify-start">
          <img
            src={team}
            alt="Über uns"
            className="rounded-2xl shadow-lg object-cover w-[500px] h-[400px]"
          />
        </div>

        {/* النص */}
        <div>
          <Head className="text-transparent bg-clip-text logoBG mb-4">
            {t("about_us.title")}
          </Head>
          <p className="text-lg text-gray-700 mb-6">
            {t("about_us.description_extended")}
          </p>
          <button className="px-6 py-3 logoBG logoTextWhite rounded-xl shadow hoverLogoMehr transition cursor-pointer">
              <NavLink to='/about'>  Erfahren mehr ...</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}
