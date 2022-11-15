import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import BUILD_PARAMS from "../utils/buld";

const lng = localStorage.getItem("i18nextLng") || BUILD_PARAMS.DEFAULT_LANG;

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng,
        fallbackLng: lng,
        debug: true,
        detection: {
            order: ["queryString", "cookie"],
            cache: ["cookie"],
            store: window.localStorage,
        },
        whitelist: ["ru", "en", "ky"],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: () => {
                return (process.env.PUBLIC_URL || "") + "/locales/{{lng}}/{{ns}}.json";
            },
        },
    });

export default i18n;
