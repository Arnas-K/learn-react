import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "lt",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Best place to stay in Kaunas centre",
          },
          navbar: {
            rooms: "Rooms",
            prices: "Prices",
            contacts: "Contacts",
            location: "How to find us",
          },
          // here we will place our translations...
        },
      },

      lt: {
        translation: {
          description: {
            part1: "Geriausia vieta nakvynei Kauno centre",
          },
          navbar: {
            rooms: "Kambariai",
            prices: "Kainos",
            contacts: "Kontaktai",
            location: "Kaip mus rasti",
          },
        },
      },
    },
  });

export default i18n;