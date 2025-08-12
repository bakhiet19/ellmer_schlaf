import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function UberUns() {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-6 pb-8 sm:pb-12 lg:pb-16 text-gray-800">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500 m-6 pt-6 sm:pt-4 text-center">
        {t('about_us.title')}
      </h2>
      <p className="text-lg mb-6">
        {t('about_us.description_extended')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">🏠 {t('about_us.what_we_offer')}</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>{t('about_us.offer_list.0')}</li>
            <li>{t('about_us.offer_list.1')}</li>
            <li>{t('about_us.offer_list.2')}</li>
            <li>{t('about_us.offer_list.3')}</li> {/* جديد */}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🎯 {t('about_us.our_mission')}</h3>
          <p className="text-gray-700">
            {t('about_us.mission_text_extended')}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">🌍 {t('about_us.our_vision')}</h3>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          {t('about_us.vision_text')}
        </p>
      </div>

      <div className="mt-12 text-center">
        <NavLink
          to="/kontakt"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition"
        >
          {t('about_us.contact_button')}
        </NavLink>
      </div>
    </section>
  );
}