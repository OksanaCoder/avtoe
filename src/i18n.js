import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
const translationRu = { head: 'Досить Мріяти про Авто' }
const translationUa = { head: 'Хватит Мечтать об Автомобиле' }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      ua: {
        translation: translationUa,
      },
      ru: {
        translation: translationRu,
      },
    },
    lng: 'ua',
    fallbackLng: 'ua',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
