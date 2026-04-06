import { createContext, useContext, useEffect, useState } from 'react';
import en from '../i18n/en';
import ar from '../i18n/ar';
import i18n from '../i18n/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const available = { en, ar };
  const getInitial = () => {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    return 'ar';
  };

  const [lang, setLangState] = useState(getInitial);

  useEffect(() => {
    // Initial document language/dir and sync with i18n
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', lang);
    // sync with i18next
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, []); // run once

  const t = (key, options) => {
    const defaultValue = options && typeof options === 'object' && 'defaultValue' in options ? options.defaultValue : '';
    const parts = String(key).split('.');
    let cur = available[lang];
    for (const p of parts) {
      if (cur == null) return defaultValue;
      cur = cur[p];
    }
    if (cur == null) return defaultValue;
    return cur;
  };

  const setLang = (newLang) => {
    if (newLang === lang) return;

    // brief fade transition
    document.documentElement.classList.add('lang-transition', 'lang-fading');

    setTimeout(() => {
      setLangState(newLang);
      localStorage.setItem('lang', newLang);
      document.documentElement.lang = newLang === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('data-lang', newLang);

      // sync with i18n
      if (i18n.language !== newLang) i18n.changeLanguage(newLang);

      // remove fading and let it transition back
      document.documentElement.classList.remove('lang-fading');

      setTimeout(() => {
        document.documentElement.classList.remove('lang-transition');
      }, 220);
    }, 140);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
