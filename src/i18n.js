import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/En/translation.json';
import translationDE from './locales/De/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
    },
    lng: localStorage.getItem('lang') || 'de',
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;