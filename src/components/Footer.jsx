import { useTheme } from "../contexts/themeContext";
import footer_images from "../mocks/footer_images";

export default function Footer(){
  const {theme} = useTheme();
  return(
    <div className="bg-slate-100 flex flex-col items-center w-full h-auto overflow-hidden p-6 dark:bg-custom-dark-green">

      <div className="w-full justify-center flex items-center mb-4">
        <p className="text-4xl font-bold text-custom-purple text-center m-10 mb-5 dark:text-custom-blue">Send me a message!</p>
      </div>  

      <div className="flex flex-col space-y-5 ">
        <p className="text-center font-light dark:text-slate-100">
          Got a question or proposal, or just want <br/> to say hello? Go ahead. 
        </p>
        <a href="mailto:almilasucode@gmail.com" className="text-center text-sm text-custom-purple underline decoration-custom-purple dark:text-custom-blue" >almilasucode@gmail.com</a>
      </div>
      
      <div className="flex">
        {footer_images.map((image)=>
          <img key={image.id} src={theme === 'dark' ? image.darkSrc : image.src} alt={image.alt}  className="m-2 w-[35px] h-[35px]"></img>
        )}
      </div>

  
    </div>
  )
}