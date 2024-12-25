import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./data/en.json";
import fr from "./data/fr.json";
// import  from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en,
  fr,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources,
    lng: "en",
    debug: true,
  });

export default i18n;
