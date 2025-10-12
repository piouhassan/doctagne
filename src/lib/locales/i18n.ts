import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/translate.json";
import fr from "./fr/translate.json";

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

const getInitialLanguage = (): string => {
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem("i18nextLng");
    if (lang) return lang;
    localStorage.setItem("i18nextLng", "fr");
    return "fr";
  }
  return "fr";
};

const options: InitOptions = {
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "fr",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options)
  .catch((err: any) => {
    console.error("Erreur d'initialisation i18n:", err);
  });

export default i18n;
