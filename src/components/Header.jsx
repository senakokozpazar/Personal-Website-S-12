import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/themeContext"

export default function Header(){
  const {theme, toggleTheme} = useTheme();
  const {lang, switchLanguage, data, loading, error} =useLang();
  
 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 
 
  return(
    
    <header className="fixed top-0 left-0 w-full px-8 py-7 font-inter text-custom-green font-bold flex justify-between items-center bg-sharp-gradient dark:bg-sharp-gradient-dark">
      <div className="relative top-5 ">
        <p className="text-left text-2xl">{data.header.name}</p>
      </div>

      <div  className="flex items-center w-1/2 gap-3 ">
    
          <button className="px-4 py-2 text-xs dark:text-custom-blue" onClick={switchLanguage}>{lang==="tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}</button>
      
        <label htmlFor="check" className="flex items-center space-x-2 text-xs text-custom-purple">
        <input
          id="check"
          type="checkbox"
          className="relative appearance-none inline-block h-[20px] w-[54px] cursor-pointer rounded-full bg-custom-blue transition-all after:content-[''] after:absolute after:top-[2px] after:left-[7px] after:h-4 after:w-4 after:rounded-full after:bg-custom-yellow after:transition-all checked:after:bg-custom-yellow checked:after:translate-x-6 checked:bg-custom-dark "
          onChange={toggleTheme}
          checked={theme === "dark"} 
          />
          <span>{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}</span>
        </label>
   
      
      </div>
    </header>
  )
}