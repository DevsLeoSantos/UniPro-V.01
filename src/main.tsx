import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ptbr from "./translations/pt-br/common.json";
import common_es from "./translations/es/common.json";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "pt_br",
  resources: {
    en: {
      common: common_en,
    },
    pt_br: {
      common: common_ptbr,
    },
    es: {
      common: common_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
