import { useIdiom } from "../contexts/ChangeIdiom"
import { RiReactjsFill } from "react-icons/ri";
import { FaPython, FaFigma} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {Testimonials} from '../utils/Testimonials'
export const About = ()=>{

    const {currentIdiom} = useIdiom();
    

    return(
        <div className="divide-y divide-gray-800 mt-5 ">
            <div className="mb-5 flex items-center justify-center lg:justify-start">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">{currentIdiom === 'es' ? 'Sobre Mi': 'About Me'}</h1>
            </div>
            <div className="">
                <div className="mt-10 ">
                    <h1 className="text-gray-300 text-lg font-bold text-center">
                        {currentIdiom === 'es' ? 'Hola!, Soy Adams Wever.': "Hello!, I'm Adams Wever."}
                    </h1> 

                    <p className=" text-gray-300 mt-5 mb-10 text-lg font-medium leading-8 text-center italic text-wrap px-2">{currentIdiom === 'es' ? 
                    
                    (
                    <>
                    Soy un desarrollador <span className="text-indigo-500 font-bold">Back-end</span> & 
                    <span className="text-indigo-500 font-bold "> Front-end</span> apasionado que crea código eficiente y 
                    elegante en JavaScript y Python. Mi experiencia incluye una variedad de aplicaciones.
                    Visita mi portafolio para descubrir mis proyectos. ¡Espero que disfrutes mi trabajo!
                    </>
                    )
                    : 
                    (
                    <>
                    I'm a passionate <span className="text-indigo-500">Back-end</span> &
                    <span className="text-indigo-500"> Front-end</span> developer who crafts efficient and
                    elegant code in JavaScript and Python. My experience encompasses a variety of applications.
                    Visit my portfolio to explore my projects. Hope you enjoy my work!
                    </>
                    )
                    }
                    </p>
                    
                </div>  
            </div>
                <div className="mt-5  flex flex-col justify-center">
                <h1 className="mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-white from-10% via-indigo-500 via-40% to-white to-50%  text-3xl font-semibold">
                        {currentIdiom === 'es' ? 'Mis Servicios': "My Services"}
                    </h1>
                    <div className="flex justify-center ">
                        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 px-6">

                            <div className=" h-60 max-h-60 rounded-md border border-gray-800 flex flex-col justify-center"> 
                                    <div className="flex justify-center">
                                        <div className="rounded-full w-24 h-24 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                            <RiReactjsFill  className="w-16 h-16 text-indigo-500"/>
                                        </div>
                                    </div>
                                    <h1 className="text-white text-2xl italic font-semibold  mt-3 text-center">Front-end</h1>
                                    <p className="text-white text-base mt-5 text-center text-wrap px-2">
                                        {currentIdiom === 'es' ? 'Transformo ideas en experiencias digitales cautivadoras con ReactJS.'
                                        : 'I transform ideas into captivating digital experiences with ReactJS.'}
                                        </p>
                                </div>
                                
                                <div className="h-60 max-h-60 rounded-md border border-gray-800 flex flex-col justify-center">
                                    <div className="flex justify-center"> 
                                        <div className="rounded-full w-24 h-24  bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                            <FaPython className="w-16 h-16 text-indigo-500"/>
                                        </div>
                                    </div>
                                    <h1 className="text-white text-2xl italic font-semibold mt-3 text-center">Back-end</h1>
                                    <p className={`${currentIdiom === 'es' ? 'lg:text-sm':'lg:text-base'} text-white text-base mt-5 text-center text-wrap px-2`}>
                                        {currentIdiom === 'es' ? 'Back-end con Django y Flask para crear APIs sólidas. Django para estructura, Flask para agilidad.'
                                        : 'Backend using Django and Flask to craft robust APIs. Django for structure, Flask for agility.'}
                                        </p>
                                </div>

                                <div className="h-60 max-h-60 rounded-md border border-gray-800 flex flex-col justify-center"> 
                                    <div className="flex justify-center"> 
                                        <div className="rounded-full w-24 h-24 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                            <FaFigma  className="w-12 h-12 text-indigo-500"/>
                                        </div>
                                    </div>
                                    <h1 className="text-white text-2xl italic font-semibold mt-3 text-center">UI/UX Design</h1>
                                    <p className="text-white text-base mt-5 text-center px-2">
                                        {currentIdiom === 'es' ? 'Interfaz de usuario moderna con un diseño único y altamente profesional.'
                                        : 'Modern user Interface  with a highly professional and unique design.'}
                                    </p>
                                </div>

                                <div className="h-60 max-h-60 rounded-md border border-gray-800 flex flex-col justify-center"> 
                                    <div className="flex justify-center"> 
                                        <div className="rounded-full w-24 h-24 ml-5 mt-5 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                            <IoLogoFirebase  className="w-12 h-12 text-indigo-500"/>
                                        </div>
                                    </div>
                                    <h1 className="text-white text-2xl italic font-semibold mt-3 text-center">Database</h1>
                                    <p className={`text-white mt-5 text-center px-2 pb-2 ${currentIdiom === 'es' ? 'text-xs sm:text-base':''}`}>
                                        {currentIdiom === 'es' ? 'Ofrezco bases de datos en tiempo real con Firebase para aplicaciones dinámicas y colaborativas.'
                                        : 'I offer real-time databases with Firebase for dynamic and collaborative applications.'}
                                    </p>
                                </div>
                        </div>
                    </div>
                    
                    <div className="mt-5  flex flex-col justify-center">
                        <h1 className="mt-5  md:ml-7 text-center md:text-start bg-clip-text text-transparent  bg-gradient-to-r from-indigo-500 to-white to-10%  text-3xl font-semibold">
                                {currentIdiom === 'es' ? 'Testimonios': "Testimonials"}
                        </h1>
                        <div>
                            <Testimonials/>
                        </div>
                    </div>
            </div>
        </div>
    ) 
}