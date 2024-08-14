
import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/themeContext";
import Header from "./Header";

export default function Hero() {

  const {theme} = useTheme();
  const { lang, data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen w-full bg-sharp-gradient flex items-center px-8 dark:bg-sharp-gradient-dark">
      <Header />

      <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
        
        <div className="flex flex-col space-y-16 w-1/2">
          <h2 className="text-4xl font-bold text-custom-green ">
          {/*data[lang].hero.title*/}
          </h2>
          <p className="text-lg text-slate-200">
          {/*data[lang].hero.text*/}
          </p>
          <div className="flex space-x-4">
          <button className="px-4 py-2 bg-slate-200 text-custom-purple rounded flex items-center space-x-2 mb-0 h-10 dark:bg-custom-dark-grey dark:text-slate-100">
          <img src={theme === 'dark' ? '/github_dark_mode.svg' : '/github.svg'} alt="Github logo" className="w-5 h-5" />
              <span> {/*data[lang].hero.btnOne*/}</span>
            </button>
            <button className="px-4 py-2 bg-slate-200 text-custom-purple rounded flex items-center space-x-2 mb-0 h-10 dark:bg-custom-dark-grey dark:text-slate-100">
            <img src={theme === 'dark' ? '/LinkedIn_dark_mode.svg' : '/LinkedIn.svg'} alt="LinkedIn logo" className="w-5 h-5" />
              <span>{/*data[lang].hero.btnTwo*/}</span>
            </button>
          </div>
        </div>

       
        <div className="w-1/2 flex justify-center">
          <img src="/hero-right.png" alt="Hero" className="w-[350px] h-[375px]"  />
        </div>
      </div>
    </div>
  );
}
