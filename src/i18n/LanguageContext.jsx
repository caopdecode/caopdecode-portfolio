import { createContext, useContext, useEffect, useState } from "react";
import { content } from "./content";

const LanguageContext = createContext(null);

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
