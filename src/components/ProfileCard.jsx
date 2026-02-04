import imagen from "../assets/img/img2.jpeg";
import profile from "../assets/img/user.jpeg";
import { SiReactos } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion} from 'framer-motion';
import { useIdiom } from "../contexts/ChangeIdiom";
import { FaDev, FaGithub , FaLinkedin, FaDiscord, FaCloudDownloadAlt} from "react-icons/fa";
import '../assets/css/style.css'
export const Profile = () => {
    
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['Front-end', 'Back-end']
    const [currentText, setCurrentText] = useState(texts[textIndex])
    const {currentIdiom} = useIdiom();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTextIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
        }, 3000)

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
      setCurrentText(texts[textIndex]);
    }, [textIndex]);
  
    return (
      <div className="px-2 mt-2  lg:mt-0 md:px-0 sm:mb-20 md:mb-0 lg:ml-4 flex flex-nwrap">
      <div className="w-full lg:min-w-[350px] xl:min-w-[400px] lg:max-w-[450px] bg-[#121c34] rounded-md container-shadow relative z-30 flex flex-col">
        <img className="w-full rounded-t-md" src={imagen} alt="" />
        <div className="w-full flex-1 flex flex-col bg-[#121c34]  rounded-b-md">
        <div className="flex flex-col items-center ">
          <div className="flex items-center justify-center -translate-y-4 lg:-translate-y-5 w-full  bg-[#121c34] rounded-t-3xl">
          <img
            className="w-24 h-24 lg:w-[70px] lg:h-[70px] xl:w-24 xl:h-24 rounded-2xl border-4 border-indigo-500 -translate-y-10 lg:-translate-y-6"
            src={profile}
            alt=""
          />
          </div>
          
          <div className="">
            <h1 className=" flex items-center bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-600 to-white font-semibold font-sans italic text-4xl lg:text-2xl xl:text-4xl  ">Adams
            <SiReactos className="w-8 h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-indigo-500 mx-2 animate-pulse " />
             Wever</h1>
          </div>

        <div className="flex justify-center  mt-8">
            <div className="flex space-x-24">
            <motion.h1
            key={currentText}
            initial={{ position:'absolute', opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-500 font-bold text-1xl lg:text-sm xl:text-1xl italic"
            >
            {currentText}
            </motion.h1>

              <span className="text-white font-bold text-1xl lg:text-sm xl:text-1xl ">Developer</span>    
            </div>
        </div>
          <div className="flex justify-center mt-10 lg:mt-12 xl:mt-14 space-x-4 ">
              <a href="https://dev.to/adamsw1221" target="_blank">
                <FaDev className="w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-200 hover:text-indigo-500 transition-all duration-700 hover:-translate-y-2"/> 
              </a>

              <a href="https://github.com/AdamsW1221" target="_blank">
                <FaGithub className="w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-200 hover:text-indigo-500 transition-all duration-700 hover:-translate-y-2"/> 
              </a>

              <a href="https://www.linkedin.com/in/adamsw1221/" target="_blank">
                <FaLinkedin className="w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-200 hover:text-indigo-500 transition-all duration-700 hover:-translate-y-2"/> 
              </a>

              <a href="https://discord.gg/wCqgBHCC" target="_blank">
                <FaDiscord className="w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-200 hover:text-indigo-500 transition-all duration-700 hover:-translate-y-2"/> 
              </a>
              
            </div>
            
        </div>
          <div className="mt-14 lg:mt-4 h-full flex flex-col justify-end">
          <div className="  flex  divide-x divide-gray-800 h-14 lg:h-10 xl:h-16">
                <a className="group uppercase text-white lg:text-sm text-1xl hover:text-indigo-500 transition-colors duration-500 w-full  items-center flex justify-center" href={currentIdiom === 'es' ? './CV/cv-ES.pdf': './CV/cv-EN.pdf'} target="_blank">
                {currentIdiom === 'es' ? 'Descargar CV': 'Download CV'} <FaCloudDownloadAlt className="ml-4 w-7 h-7 lg:w-5 lg:h-5 xl:w-7 xl:h-7 text-gray-200 group-hover:text-indigo-500 group-hover:translate-x-1 duration-700"/>
                </a>

                <a className="group uppercase text-white text-1xl hover:text-indigo-500 transition-colors duration-500 w-full  items-center flex justify-center" href="https://github.com/AdamsW1221" target="_blank">
                  {currentIdiom === 'es' ? 'Visita mi Github': 'Visit my Github'}  <FaGithub className="ml-4 w-7 h-7 lg:w-5 lg:h-5 xl:w-7 xl:h-7 text-gray-200 group-hover:text-indigo-500 group-hover:translate-x-1 duration-700"/> 
              </a>
          </div>
          </div>
          
      </div>
    </div>
    </div>
  );
};
