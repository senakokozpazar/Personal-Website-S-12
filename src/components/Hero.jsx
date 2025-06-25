import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";

export default function Hero() {
  const { theme } = useTheme();
  const { data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen w-full left:0 bg-sharp-gradient flex items-center px-8 dark:bg-sharp-gradient-dark  ">
      <Header />

      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col space-y-16 w-1/2">
          <h2 className="sm:text-4xl text-xl font-bold text-custom-green ">
            {data?.hero?.title}
          </h2>
          <p className="sm:text-lg text-md text-slate-200">
            {data?.hero?.text}
          </p>
          <div className="flex space-x-4 ">
            <a href="https://github.com/senakokozpazar" target="_blank">
              <button className="sm:px-4 sm:py-2 bg-slate-200 text-custom-purple rounded flex items-center space-x-2 mb-0 sm:h-10 h-5  dark:bg-custom-dark-grey dark:text-slate-100">
                <img
                  src={
                    theme === "dark" ? "/github_dark_mode.svg" : "/github.svg"
                  }
                  alt="Github logo"
                  className="sm:w-5 sm:h-5 w-3 h-3"
                />
                <span className="text-xs sm:text-lg">
                  {" "}
                  {data?.hero?.btnOne}
                </span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/sena-kokoz-pazar-20b383160/?originalSubdomain=tr"
              target="_blank"
            >
              <button className="sm:px-4 sm:py-2  bg-slate-200 text-custom-purple rounded flex items-center space-x-2 mb-0 sm:h-10 h-5 dark:bg-custom-dark-grey dark:text-slate-100">
                <img
                  src={
                    theme === "dark"
                      ? "/LinkedIn_dark_mode.svg"
                      : "/LinkedIn.svg"
                  }
                  alt="LinkedIn logo"
                  className="sm:w-5 sm:h-5 w-3 h-3"
                />
                <span className="text-xs sm:text-lg">{data?.hero?.btnTwo}</span>
              </button>
            </a>
          </div>
        </div>

        <div className="sm:w-1/2 w-48 flex sm:justify-center">
          <img
            src="/profile.jpg"
            alt="Hero"
            className="sm:w-[360px] sm:h-[375px] rounded-lg sm:mr-40 w-[260] h-[275]"
          />
        </div>
      </div>
    </div>
  );
}
