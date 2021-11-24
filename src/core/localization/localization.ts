import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fa from "./fa/messages";
import en from "./en/messages";

i18n.use(initReactI18next).init({
  resources: { en, fa },
  lng: "en", // TODO: if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // NOTE: react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
