import { useIdiom } from "../contexts/ChangeIdiom"
import { CgListTree } from "react-icons/cg";
import { PiStudentFill} from "react-icons/pi";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import aduanaLogo from '../assets/img/aduanas.png'
import oracleLogo from '../assets/img/oracle.png'
import googleLogo from '../assets/img/google.png'
import udemyLogo from '../assets/img/udemy.png'
import '../assets/css/waveAnimation.css'

export const Resume = ()=>{
    const {currentIdiom} = useIdiom();

    return (
        <div className="divide-y divide-gray-800 mt-5 w-full">
            
            <div className="mb-5 flex items-center justify-center lg:justify-start ">
                <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">{currentIdiom === 'es' ? 'Resumen': 'Resume'}</h1>
            </div>

            <div className="">

                <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-800 divide-x border-gray-800 border-b ">
                    <div className="divide-y  divide-gray-800 ">
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex justify-center md:justify-start items-center m-5 ">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <CgListTree  className="w-8 h-8 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl ml-3">{currentIdiom === 'es' ? 'Experiencia': 'Experience'}</p>
                            </div>
                        </div>

                        <div className="p-6 ">
                            <div className="border-2 border-indigo-500 text-indigo-500 flex justify-center items-center w-28 italic mb-5">
                                    2023-{currentIdiom === 'es' ? 'Presente': 'Present'}
                            </div>
                            <div className="flex italic font-semibold text-white text-2xl justify-between">
                                <p>{currentIdiom === 'es' ? 'Desarrolador Web' : 'Web Developer '}</p>
                                <p>-</p>
                                <img className="mr-10 w-20 h-7" src={aduanaLogo} alt="" />
                            </div>
                            <p className="text-gray-700 italic mt-2">
                                Direccion General de Aduanas
                            </p>
                            <p className="mt-4 text-gray-700 italic max-w-[200px]">
                            <p>{currentIdiom === 'es' ? 'creación de aplicaciones Web con Django y Reactjs.' : 'creating web applications with Django and Reactjs.'}</p>
                            </p>
                        </div>
                        <div className="block md:hidden"></div>
                        <div className="divide-y divide-gray-800 hidden md:block">   
                            <div className="h-56 max-h-56  w-full text-white flex justify-center items-center">
                                <p className="text-2xl italic text-white font-semibold text-center">{currentIdiom === 'es' ? 'No hay experiencia Laboral...': 'Have not work experience...'}</p>
                            </div>

                            <div className="h-56 max-h-56  w-full text-white flex justify-center items-center">
                                <p className="text-2xl italic text-white font-semibold text-center">{currentIdiom === 'es' ? 'No hay experiencia Laboral...': 'Have not work experience...'}</p>
                            </div>  
                        </div> 
                    </div>
                
                    <div className="">
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex justify-center md:justify-start items-center m-[20px]">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <PiStudentFill  className="w-8 h-8 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl ml-3">{currentIdiom === 'es' ? 'Educación': 'Education'}</p>
                            </div>

                            <div></div>
                        </div>

                        <div className="divide-y divide-gray-800">
                        <div className="p-6 ">
                            <div className="border-2 border-indigo-500 text-indigo-500 flex justify-center items-center w-28 italic mb-5">
                                    2024-{currentIdiom === 'es' ? 'Presente': 'Present'}
                            </div>
                            <div className="flex italic font-semibold text-white justify-between">
                                <p className={`${currentIdiom === 'es' ? 'text-xl md:text-2xl': 'text-2xl'}`}>{currentIdiom === 'es' ? 'Desarrollador Front-end': 'Front-end Developer'}</p>
                                <p>-</p>
                                <img className=" w-20 h-10" src={oracleLogo} alt="" />
                            </div>
                            <p className="text-gray-700 italic mt-2">
                               Oracle Next Education
                            </p>
                            <p className="mt-4 text-gray-700 italic max-w-[200px]">
                                Nodejs, Reactjs, Javascript, HTML5, CSS...
                            </p>
                        </div>
                        
                        <div className="p-6 ">
                            <div className="border-2 border-gray-600 text-gray-600 flex justify-center items-center w-28 italic  mb-5">
                                2022-2023
                            </div>
                            <div className="flex italic font-semibold text-white text-2xl justify-between">
                                <p className={`${currentIdiom === 'es' ? 'text-2xl': 'text-xl md:text-2xl'}`}>{currentIdiom === 'es' ? 'Intro. al Desarrollo Web':'intro. to web development'}</p>
                                <p>-</p>
                                <img className=" w-14 h-12" src={googleLogo} alt="" />
                            </div>
                            <p className="text-gray-700 italic mt-2">
                               Google Activate
                            </p>
                            <p className="mt-4 text-gray-700 italic max-w-[200px]">
                                Javascript, HTML5, CSS...
                            </p>
                        </div>

                        <div className="p-6 ">
                            <div className="border-2 border-gray-600 text-gray-600 flex justify-center items-center w-28 italic  mb-5">
                                    2022-2023
                            </div>
                            <div className="flex italic font-semibold text-white text-2xl justify-between">
                                <p className={`${currentIdiom === 'es' ? 'text-xl md:text-2xl': 'text-xl md:text-2xl'}`}>{currentIdiom === 'es' ? 'Cursos De Programación':'Programming courses'}</p>
                                <p>-</p>
                                <img className=" w-16 h-8 md:w-24 md:h-10" src={udemyLogo} alt="" />
                            </div>
                            <p className="text-gray-700 italic mt-2">
                               Udemy
                            </p>
                            <p className="mt-4 text-gray-700 italic max-w-[200px]">
                                Python, Django, SQL, Js, GIT...
                            </p>
                        </div>
                        
                        </div>
                             
                    </div>
                    
                </div>
                    <div className="py-4  flex items-center justify-center lg:justify-start ">
                        <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">{currentIdiom === 'es' ? 'Habilidades': 'Skills'}</h1>
                    </div>
                

                    <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-800 divide-x border-gray-800 border-b ">
                    <div className="divide-y  divide-gray-800 ">
                        <div></div>
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex  items-center m-5 ">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <FaPython  className="w-10 h-10 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl font-semibold italic ml-3">Back-end</p>
                            </div>
                        </div>

                      
                        <div className="flex justify-center ">
                        <div className=" grid grid-cols-2 md:grid-cols-2 gap-x-16 md:gap-x-20 gap-y-5 py-3 mx-2">
                            
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative  border-2 border-indigo-500 bg-indigo-500">
                                    <span className={`w-24 h-28 absolute bottom-0 left-0 before:top-[-360px] liquid`}></span>   
                                    <span className="relative z-10 text-xl font-semibold italic text-white">60%</span>
                                </div>
                                <p className="mt-1 text-xl font-semibold italic text-white">Flask</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative  border-2 border-indigo-500 bg-indigo-500">
                                    <span className={`w-24 h-28 absolute bottom-0 left-0 before:top-[-350px] liquid`}></span>   
                                    <span className="relative z-10 text-xl font-semibold italic text-white">50%</span>
                                </div>
                                <p className="mt-1 text-xl font-semibold italic text-white">MongoDB</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative  border-2 border-indigo-500 bg-indigo-500">
                                    <span className={`w-24 h-28 absolute bottom-0 left-0 before:top-[-360px] liquid`}></span>   
                                    <span className="relative z-10 text-xl font-semibold italic text-white">60%</span>
                                </div>
                                <p className="mt-1 text-xl font-semibold italic text-white">Django</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative  border-2 border-indigo-500 bg-indigo-500">
                                    <span className={`w-24 h-28 absolute bottom-0 left-0 before:top-[-380px] liquid`}></span>
                                    <span className="relative z-10 text-xl font-semibold italic text-white">80%</span>
                                </div>
                                <p className="mt-1 text-xl font-semibold italic text-white">SQLAlchemy</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    
                    <div className="divide-y  divide-gray-800">
                        <div></div>
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex justify-center md:justify-start items-center m-5 ">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <LuBrainCircuit className="w-10 h-10 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl font-semibold italic ml-3">{currentIdiom === 'es' ? 'Conocimiento':'Knowledge'}</p>
                            </div>
                        </div>

                    <div className="flex justify-center md:justify-start py-4 pl-0 md:pl-5">
                        <ul className="">
                            <div className="grid grid-cols-2 md:grid-cols-1 space-y-1 md:space-y-3">
                                <div className="flex space-x-4">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Diseño Responsivo':'Responsive Design'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Autentificación':'Authentication'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Integracion de Base de Datos':'Database integration'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Aplicación web de pila completa':'Full-stack web app'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Integración de API':'API integration'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Automatización':'Automation'}</p>
                                </div>
                                <div className="flex space-x-4 ">
                                    <GiCheckMark className="text-indigo-500 w-6 h-6" />
                                    <p className="text-white italic text-lg font-semibold">{currentIdiom === 'es' ? 'Raspado Web':'Web Scraping'}</p>
                                </div>
                            </div>
                        </ul>
                    </div>

                    </div>

                    <div className="divide-y  divide-gray-800">
                        <div></div>
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex justify-center md:justify-start items-center m-5 ">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <RiReactjsFill className="w-10 h-10 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl font-semibold italic ml-3">Front-end</p>
                            </div>
                        </div>

                        <div className="p-5">
                            <ul className="space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <p className="text-white text-xl font-semibold italic">Tailwindcss</p>
                                    <div className="w-full h-3 rounded bg-gray-700 pr-20">
                                        <div className="w-full h-full rounded bg-indigo-500 "></div>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <p className="text-white text-xl font-semibold italic">Boostrap</p>
                                    <div className="w-full h-3 rounded bg-gray-700 pr-48">
                                        <div className="w-full h-full rounded bg-indigo-500 "></div>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <p className="text-white text-xl font-semibold italic">Firebase</p>
                                    <div className="w-full h-3 rounded bg-gray-700 pr-80">
                                        <div className="w-full h-full rounded bg-indigo-500 "></div>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <p className="text-white text-xl font-semibold italic">Nextjs</p>
                                    <div className="w-full h-3 rounded bg-gray-700 pr-72">
                                        <div className="w-full h-full rounded bg-indigo-500"></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        

                    </div>

                    <div className="divide-y  divide-gray-800">
                        <div></div>
                        <div className="flex flex-col justify-center divide-y divide-gray-800 ">
                            <div className="flex justify-center md:justify-start items-center m-5 ">
                                <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                                    <RiReactjsFill className="w-10 h-10 text-indigo-500"/>
                                </div>
                                <p className="text-white text-2xl font-semibold italic ml-3">Herramientas</p>
                            </div>
                            <div></div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}