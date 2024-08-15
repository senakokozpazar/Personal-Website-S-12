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
    <header className="sm:fixed sm:top-0 sm:left-0 sm:w-full sm:px-8 sm:py-7 sm:font-inter sm:text-custom-green sm:font-bold sm:flex sm:justify-between sm:items-center sm:bg-sharp-gradient sm:dark:bg-sharp-gradient-dark ">
      <div className="sm:relative top-5 ">
        <p className="sm:text-left sm:text-2xl ">{data?.header?.name}</p>
      </div>

      <div className="sm:flex sm:items-center sm:w-1/2 sm:gap-3 ">
        <button
          className="sm:px-4 sm:py-2 sm:text-xs sm:dark:text-custom-blue "
          onClick={switchLanguage}
        >
          {lang === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>

        <label
          htmlFor="check"
          className="sm:flex sm:items-center sm:space-x-2 sm:text-xs sm:text-custom-purple"
        >
          <input
            id="check"
            type="checkbox"
            className="sm:relative sm:appearance-none sm:inline-block sm:h-[20px] sm:w-[54px] sm:cursor-pointer sm:rounded-full sm:bg-custom-blue sm:transition-all sm:after:content-[''] sm:after:absolute sm:after:top-[2px] sm:after:left-[7px] sm:after:h-4 sm:after:w-4 sm:after:rounded-full sm:after:bg-custom-yellow sm:after:transition-all sm:checked:after:bg-custom-yellow sm:checked:after:translate-x-6 sm:checked:bg-custom-dark "
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
