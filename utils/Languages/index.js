import React, { useState, createContext, useContext } from "react";
import en from "./en.json";
import np from "./np.json";

export const languageOptions = {
  en: "English",
  np: "Nepali",
};
export const dictionaryList = { en, np };

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  let defaultLanguage = "en";
  if (typeof window !== "undefined") {
    defaultLanguage = window?.localStorage.getItem("lang");
  }
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "np");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      if (typeof window !== "undefined") {
        window?.localStorage.setItem("lang", newLanguage);
      }
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
