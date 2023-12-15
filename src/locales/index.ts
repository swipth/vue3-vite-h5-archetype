import en from "./en/index.js";
import zh from "./zh/index.js";
import { createI18n } from "vue-i18n";
import { getLanguage } from "@/config/clientStorage";
import commonEn from "./en/common";
import commonZh from "./zh/common";

const messages = {
  en: {
    i18n: { ...commonEn, ...en },
  },
  zh: {
    i18n: { ...commonZh, ...zh },
  },
};

const i18n = createI18n({
  locale: getLanguage(),
  messages,
});

export function translateTitle(title:string) {
  const { t, te } = i18n.global;
  if (te(`vabI18n.${title}`)) return t(`vabI18n.${title}`);
  return title;
}

export function setupI18n(app:any) {
  app.use(i18n);
  app.config.globalProperties.translateTitle = translateTitle;
}

export default i18n;
