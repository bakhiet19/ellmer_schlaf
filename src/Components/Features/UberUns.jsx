import { useTranslation } from "react-i18next";
import Head from "../Head";

export default function UberUns() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: '🏠',
      title: t('about_us.what_we_offer'),
      content: (
        <ul className="list-disc list-inside space-y-1 text-left">
          <li>{t('about_us.offer_list.0')}</li>
          <li>{t('about_us.offer_list.1')}</li>
          <li>{t('about_us.offer_list.2')}</li>
          <li>{t('about_us.offer_list.3')}</li>
        </ul>
      ),
    },
    {
      icon: '🎯',
      title: t('about_us.our_mission'),
      content: <p>{t('about_us.mission_text_extended')}</p>,
    },
    {
      icon: '🌍',
      title: t('about_us.our_vision'),
      content: <p>{t('about_us.vision_text')}</p>,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800" id="uberuns">
      <Head className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
        {t('about_us.title')}
      </Head>

      <p className="text-lg mb-10 text-center max-w-3xl mx-auto opacity-80">
        {t('about_us.description_extended')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map(({ icon, title, content }, i) => (
          <div
            key={i}
            className="logoBGWhite rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'both' }}
          >
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">{title}</h3>
            <div className="text-gray-700 text-sm">{content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}