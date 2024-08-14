import { createContext, useContext, useEffect } from "react";
import  useLocalStorage  from '../hooks/useLocalStorage';
import useAxios, { REQ_TYPES } from "../hooks/useAxios";
import { texts } from "../mocks/texts";

export const LangContext = createContext();

const LangContextProvider = ({children})=> {

  const [lang, setLang] = useLocalStorage("lang", "en");

  const switchLanguage = () => {
    const newLanguage = lang === "en" ? "tr" : "en";
    setLang(newLanguage);
  }
  
  const [doRequest, data, loading, error ] = useAxios({  });

  useEffect(()=>{
    doRequest({reqType: REQ_TYPES.POST, endpoint:'', payload: texts });
  }, [lang]);

  
  return (
    <LangContext.Provider value={{lang, switchLanguage, data, loading, error}}>
      {children}
    </LangContext.Provider>
  )
};

export const useLang = () => useContext(LangContext);
export default LangContextProvider;