import { createContext, useContext } from "react";
import  useLocalStorage  from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => { 
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContextProvider;
