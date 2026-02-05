import { useIdiom } from "../contexts/ChangeIdiom";

import { CgListTree } from "react-icons/cg";
import { PiStudentFill } from "react-icons/pi";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";

import aduanaLogo from "../assets/img/aduanas.png";
import oracleLogo from "../assets/img/oracle.png";
import googleLogo from "../assets/img/google.png";
import udemyLogo from "../assets/img/udemy.png";
import precisaLogo from "../assets/img/precisaGroup.png";

import "../assets/css/waveAnimation.css";

import { motion } from "framer-motion";
import { Reveal } from "./UI/Reveal";
import { StaggerList, StaggerItem } from "./UI/Stagger";

export const Resume = () => {
  const { currentIdiom } = useIdiom();

  const knowledgeItems = [
    { es: "Diseño Responsivo", en: "Responsive Design" },
    { es: "Autenticación", en: "Authentication" },
    { es: "Integración de Base de Datos", en: "Database integration" },
    { es: "Aplicación web de pila completa", en: "Full-stack web app" },
    { es: "Integración de API", en: "API integration" },
    { es: "Automatización", en: "Automation" },
    { es: "Raspado Web", en: "Web Scraping" },
  ];

  const toolsItems = [
    { es: "Git", en: "Git" },
    { es: "GitHub", en: "GitHub" },
    { es: "VS Code", en: "VS Code" },
    { es: "Postman", en: "Postman" },
    { es: "Figma", en: "Figma" },
    { es: "SQL Server", en: "SQL Server" },
    { es: "Supabase", en: "Supabase" },
    { es: "Linux / Terminal", en: "Linux / Terminal" },
    { es: "Chrome DevTools", en: "Chrome DevTools" },
    { es: "Docker (básico)", en: "Docker (basic)" },
  ];

  const Card = ({ children, className = "" }) => (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`border border-gray-800 rounded-md bg-[#0c1322]/30 hover:border-indigo-500/60 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="divide-y divide-gray-800 mt-5 w-full">
      {/* TITLE */}
      <Reveal className="mb-5 flex items-center justify-center lg:justify-start">
        <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
          {currentIdiom === "es" ? "Resumen" : "Resume"}
        </h1>
      </Reveal>

      <div>
        {/* TOP GRID: EXPERIENCE + EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-800 divide-x border-gray-800 border-b">
          {/* EXPERIENCE */}
          <div className="divide-y divide-gray-800">
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex justify-center md:justify-start items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <CgListTree className="w-8 h-8 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl ml-3">
                    {currentIdiom === "es" ? "Experiencia" : "Experience"}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <Card className="p-6 mx-3 mb-3">
                <div className="border-2 border-gray-600 text-gray-600 flex justify-center items-center w-44 italic mb-5">
                  Sep 15 - Nov 29 (2023)
                </div>

                <div className="flex italic font-semibold text-white text-2xl justify-between gap-3">
                  <p className="flex-1">
                    {currentIdiom === "es"
                      ? "Pasantía en Dirección General de Aduanas"
                      : "Internship at General Directorate of Customs"}
                  </p>
                  <p>-</p>
                  <img className="mr-2 w-20 h-7 object-contain" src={aduanaLogo} alt="Aduanas" />
                </div>

                <p className="text-gray-400 italic mt-2">
                  {currentIdiom === "es" ? "Desarrollador Full-stack" : "Full-stack Developer"}
                </p>

                <div className="mt-4 text-gray-300 italic space-y-2">
                  <p>
                    {currentIdiom === "es"
                      ? "Encargado de desarrollar aplicaciones completas y funcionales, creación de UI dinámicas y API REST."
                      : "Responsible for building complete and functional applications, creating dynamic UIs and REST APIs."}
                  </p>
                  <p>
                    {currentIdiom === "es"
                      ? "Tecnologías: Python, JavaScript, Tailwind CSS, React y Django."
                      : "Technologies: Python, JavaScript, Tailwind CSS, React and Django."}
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="p-6 mx-3 mb-6">
                <div className="border-2 border-indigo-500 text-indigo-500 flex justify-center items-center w-40 italic mb-5">
                  Jul 2025 - {currentIdiom === "es" ? "Presente" : "Present"}
                </div>

                <div className="flex italic font-semibold text-white text-2xl justify-between gap-3">
                  <p className="flex-1">Precisa Group SRL</p>
                  <p>-</p>
                  <img
                    className="mr-2 w-24 h-10 object-contain"
                    src={precisaLogo}
                    alt="Precisa Group SRL"
                  />
                </div>

                <p className="text-gray-400 italic mt-2">
                  {currentIdiom === "es" ? "Desarrollador Full-stack" : "Full-stack Developer"}
                </p>

                <div className="mt-4 text-gray-300 italic space-y-2">
                  <p>
                    {currentIdiom === "es"
                      ? "Encargado en desarrollar aplicaciones totalmente funcionales, aplicando técnicas de código limpio y bien estructurado."
                      : "Responsible for building fully functional applications, applying clean and well-structured code practices."}
                  </p>

                  <p>
                    {currentIdiom === "es"
                      ? "Uso de tecnologías como Python y JavaScript en proyectos internos."
                      : "Using technologies like Python and JavaScript in internal projects."}
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* EDUCATION */}
          <div>
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex justify-center md:justify-start items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <PiStudentFill className="w-8 h-8 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl ml-3">
                    {currentIdiom === "es" ? "Educación" : "Education"}
                  </p>
                </div>
                <div />
              </div>
            </Reveal>

            <div className="divide-y divide-gray-800">
              <Reveal>
                <Card className="p-6 mx-3 mb-3">
                  <div className="border-2 border-indigo-500 text-indigo-500 flex justify-center items-center w-28 italic mb-5">
                    2024-{currentIdiom === "es" ? "Presente" : "Present"}
                  </div>

                  <div className="flex italic font-semibold text-white justify-between gap-3">
                    <p className={`${currentIdiom === "es" ? "text-xl md:text-2xl" : "text-2xl"} flex-1`}>
                      {currentIdiom === "es" ? "Desarrollador Front-end" : "Front-end Developer"}
                    </p>
                    <p>-</p>
                    <img className="w-20 h-10 object-contain" src={oracleLogo} alt="Oracle" />
                  </div>

                  <p className="text-gray-400 italic mt-2">Oracle Next Education</p>
                  <p className="mt-4 text-gray-300 italic">
                    Nodejs, Reactjs, Javascript, HTML5, CSS...
                  </p>
                </Card>
              </Reveal>

              <Reveal>
                <Card className="p-6 mx-3 mb-3">
                  <div className="border-2 border-gray-600 text-gray-600 flex justify-center items-center w-28 italic mb-5">
                    2022-2023
                  </div>

                  <div className="flex italic font-semibold text-white text-2xl justify-between gap-3">
                    <p className={`${currentIdiom === "es" ? "text-2xl" : "text-xl md:text-2xl"} flex-1`}>
                      {currentIdiom === "es" ? "Intro. al Desarrollo Web" : "Intro. to web development"}
                    </p>
                    <p>-</p>
                    <img className="w-14 h-12 object-contain" src={googleLogo} alt="Google" />
                  </div>

                  <p className="text-gray-400 italic mt-2">Google Activate</p>
                  <p className="mt-4 text-gray-300 italic">
                    Javascript, HTML5, CSS...
                  </p>
                </Card>
              </Reveal>

              <Reveal>
                <Card className="p-6 mx-3 mb-6">
                  <div className="border-2 border-gray-600 text-gray-600 flex justify-center items-center w-28 italic mb-5">
                    2022-2023
                  </div>

                  <div className="flex italic font-semibold text-white text-2xl justify-between gap-3">
                    <p className="text-xl md:text-2xl flex-1">
                      {currentIdiom === "es" ? "Cursos De Programación" : "Programming courses"}
                    </p>
                    <p>-</p>
                    <img className="w-16 h-8 md:w-24 md:h-10 object-contain" src={udemyLogo} alt="Udemy" />
                  </div>

                  <p className="text-gray-400 italic mt-2">Udemy</p>
                  <p className="mt-4 text-gray-300 italic">
                    Python, Django, SQL, Js, GIT...
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SKILLS TITLE */}
        <Reveal className="py-4 flex items-center justify-center lg:justify-start">
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
            {currentIdiom === "es" ? "Habilidades" : "Skills"}
          </h1>
        </Reveal>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-800 divide-x border-gray-800 border-b">
          {/* BACKEND */}
          <div className="divide-y divide-gray-800">
            <div />
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <FaPython className="w-10 h-10 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl font-semibold italic ml-3">Back-end</p>
                </div>
              </div>
            </Reveal>

            {/* ✅ LIQUID SPHERES RESTAURADAS (como tu versión original) */}
            <Reveal className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 md:gap-x-20 gap-y-5 py-3 mx-2">
                {/* Flask 60% */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative border-2 border-indigo-500 bg-indigo-500">
                    <span className="w-24 h-28 absolute bottom-0 left-0 before:top-[-360px] liquid"></span>
                    <span className="relative z-10 text-xl font-semibold italic text-white">60%</span>
                  </div>
                  <p className="mt-1 text-xl font-semibold italic text-white">Flask</p>
                </motion.div>

                {/* MongoDB 50% */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative border-2 border-indigo-500 bg-indigo-500">
                    <span className="w-24 h-28 absolute bottom-0 left-0 before:top-[-350px] liquid"></span>
                    <span className="relative z-10 text-xl font-semibold italic text-white">50%</span>
                  </div>
                  <p className="mt-1 text-xl font-semibold italic text-white">MongoDB</p>
                </motion.div>

                {/* Django 60% */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative border-2 border-indigo-500 bg-indigo-500">
                    <span className="w-24 h-28 absolute bottom-0 left-0 before:top-[-360px] liquid"></span>
                    <span className="relative z-10 text-xl font-semibold italic text-white">60%</span>
                  </div>
                  <p className="mt-1 text-xl font-semibold italic text-white">Django</p>
                </motion.div>

                {/* SQLAlchemy 80% */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center w-24 h-24 p-5 rounded-full overflow-hidden relative border-2 border-indigo-500 bg-indigo-500">
                    <span className="w-24 h-28 absolute bottom-0 left-0 before:top-[-380px] liquid"></span>
                    <span className="relative z-10 text-xl font-semibold italic text-white">80%</span>
                  </div>
                  <p className="mt-1 text-xl font-semibold italic text-white">SQLAlchemy</p>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* KNOWLEDGE */}
          <div className="divide-y divide-gray-800">
            <div />
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex justify-center md:justify-start items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <LuBrainCircuit className="w-10 h-10 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl font-semibold italic ml-3">
                    {currentIdiom === "es" ? "Conocimiento" : "Knowledge"}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="flex justify-center md:justify-start py-4 pl-0 md:pl-5">
              <StaggerList className="grid grid-cols-2 md:grid-cols-1 gap-y-4 px-4  md:gap-y-3">
                {knowledgeItems.map((k) => (
                  <StaggerItem key={k.en}>
                    <div className="flex space-x-4">
                      <GiCheckMark className="text-indigo-500 w-5 h-5" />
                      <p className="text-white italic text-md font-semibold">
                        {currentIdiom === "es" ? k.es : k.en}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>

          {/* FRONTEND */}
          <div className="divide-y divide-gray-800">
            <div />
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex justify-center md:justify-start items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <RiReactjsFill className="w-10 h-10 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl font-semibold italic ml-3">Front-end</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="p-5">
              <ul className="space-y-4">
                {[
                  { name: "Tailwindcss", pr: "pr-20" },
                  { name: "Boostrap", pr: "pr-48" },
                  { name: "Firebase", pr: "pr-80" },
                  { name: "Nextjs", pr: "pr-72" },
                ].map((x) => (
                  <motion.li key={x.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex flex-col space-y-2">
                      <p className="text-white text-xl font-semibold italic">{x.name}</p>
                      <div className={`w-full h-3 rounded bg-gray-700 ${x.pr}`}>
                        <div className="w-full h-full rounded bg-indigo-500" />
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* TOOLS */}
          <div className="divide-y divide-gray-800">
            <div />
            <Reveal>
              <div className="flex flex-col justify-center divide-y divide-gray-800">
                <div className="flex justify-center md:justify-start items-center m-5">
                  <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                    <RiReactjsFill className="w-10 h-10 text-indigo-500" />
                  </div>
                  <p className="text-white text-2xl font-semibold italic ml-3">
                    {currentIdiom === "es" ? "Herramientas" : "Tools"}
                  </p>
                </div>
                <div />
              </div>
            </Reveal>

            <div className="flex justify-center md:justify-start py-4 pl-0 md:pl-5">
              <StaggerList className="grid grid-cols-2 md:grid-cols-1 gap-4 px-4 md:gap-y-3">
                {toolsItems.map((t) => (
                  <StaggerItem key={t.en}>
                    <div className="flex space-x-4">
                      <GiCheckMark className="text-indigo-500 w-5 h-5" />
                      <p className="text-white italic text-md font-semibold">
                        {currentIdiom === "es" ? t.es : t.en}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
