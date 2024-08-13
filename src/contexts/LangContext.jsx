import { createContext, useContext } from "react";
import  useLocaleStorage  from '../hooks/useLocalStorage';

export const LangContext = createContext();

const LangContextProvider = ({children})=> {

  const [lang, setLang] = useLocaleStorage("lang", "en");

  const switchLanguage = () => {
    const newLanguage = lang === "en" ? "tr" : "en";
    setLang(newLanguage);
  }
  
  return (
    <LangContext.Provider value={{lang, switchLanguage}}>
      {children}
    </LangContext.Provider>
  )
};

export const useLang = () => useContext(LangContext);
export default LangContextProvider;