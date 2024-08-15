import { useLang } from "../contexts/LangContext";
import { useTheme } from "../contexts/themeContext";


export default function Footer(){
  const {theme} = useTheme();
  const { data, loading, error } = useLang();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const footerImages = data.footer.footer_images;


  return(
    <div className="bg-slate-100 flex flex-col items-center w-full h-auto overflow-hidden p-6 dark:bg-custom-dark-green">

      <div className="w-full justify-center flex items-center mb-4">
        <p className="text-4xl font-bold text-custom-purple text-center m-10 mb-5 dark:text-custom-blue">{data.footer.title}</p>
      </div>  

      <div className="flex flex-col space-y-5 ">
        <p className="text-center font-light dark:text-slate-100">
        {data.footer.text}
        </p>
        <a href="mailto:almilasucode@gmail.com" className="text-center text-sm text-custom-purple underline decoration-custom-purple dark:text-custom-blue" >{data.footer.email}</a>
      </div>
      
      <div className="flex">
        {footerImages.map((image)=>
          <img key={image.id} src={theme === 'dark' ? image.darkSrc : image.src} alt={image.alt}  className="m-2 w-[35px] h-[35px]"></img>
        )}
      </div>

  
    </div>
  )
}