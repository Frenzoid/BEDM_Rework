// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import itTranslation from './locales/it.json';
import frTranslation from './locales/fr.json';
import deTranslation from './locales/de.json';
import esTranslation from './locales/es.json';
import geTranslation from './locales/ge.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      it: {
        translation: itTranslation
      },
      fr: {
        translation: frTranslation
      },
      de: {
        translation: deTranslation
      },
      es: {
        translation: esTranslation
      },
      ge: {
        translation: geTranslation
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;