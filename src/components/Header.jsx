import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, switchLanguage, data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-7 font-inter text-custom-green font-bold flex justify-between items-center bg-sharp-gradient dark:bg-sharp-gradient-dark z-50">
      <div className="relative top-5 ">
        <p className="text-left sm:text-2xl text-xl">{data?.header?.name}</p>
      </div>

      <div className="flex items-center sm:w-1/2 sm:gap-3 w-auto gap-2">
        <button
          className="px-4 py-2 sm:text-xs text-[10px] sm:dark:text-custom-blue dark:text-custom-purple"
          onClick={switchLanguage}
        >
          {lang === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>

        <label
          htmlFor="check"
          className="flex items-center space-x-2 sm:text-xs text-[10px] text-custom-purple"
        >
          <input
            id="check"
            type="checkbox"
            className="relative appearance-none inline-block sm:h-[20px] h-[10px] sm:w-[54px] w-[34px] cursor-pointer rounded-full bg-custom-blue transition-all after:content-[''] after:absolute sm:after:top-[2px] after:top-[1px] after:left-[7px] sm:after:h-4 after:h-2 sm:after:w-4 after:w-2 after:rounded-full after:bg-custom-yellow after:transition-all checked:after:bg-custom-yellow checked:after:translate-x-6 checked:bg-custom-dark  "
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </label>
      </div>
    </header>
  );
}
