import { useIdiom } from "../contexts/ChangeIdiom";
import { motion } from "framer-motion";
import { Reveal } from "./UI/Reveal";
import { StaggerList, StaggerItem } from "./UI/Stagger";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "React Router",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",
  "REST API Consumption",
  "Axios",
  "Git & GitHub",
  "Component-Based Architecture",
  "UI Integration from Figma",
  "Express.js",
  "SQL Server",
];

function Chip({ children }) {
  return (
    <span className="px-3 py-1 rounded-md bg-[#0c1322] text-gray-200 text-sm border border-gray-700 hover:border-indigo-500/70 transition-colors">
      {children}
    </span>
  );
}

export const Stats = () => {
  const { currentIdiom } = useIdiom();

  return (
    <div className="divide-y divide-gray-800 mt-5">
      <Reveal className="mb-5 flex items-center justify-center lg:justify-start">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
          {currentIdiom === "es" ? "Habilidades" : "Skills"}
        </h1>
      </Reveal>

      <div className="px-3 pb-10">
        <Reveal>
          <p className="text-gray-300 mt-6 text-center lg:text-left italic leading-7">
            {currentIdiom === "es"
              ? "Stack principal enfocado en frontend moderno + APIs + bases de datos."
              : "Main stack focused on modern frontend + APIs + databases."}
          </p>
        </Reveal>

        <StaggerList className="mt-6 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <StaggerItem key={s}>
              <Chip>{s}</Chip>
            </StaggerItem>
          ))}
        </StaggerList>

        <StaggerList className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
            >
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Frontend" : "Frontend"}
              </h3>
              <p className="text-gray-300 mt-2 leading-7">
                {currentIdiom === "es"
                  ? "React/Next + Tailwind, componentes reusables, integración pixel-perfect desde Figma."
                  : "React/Next + Tailwind, reusable components, pixel-perfect UI from Figma."}
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
            >
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Backend / APIs" : "Backend / APIs"}
              </h3>
              <p className="text-gray-300 mt-2 leading-7">
                {currentIdiom === "es"
                  ? "APIs REST, validación, consumo con Axios, Express y backend en Python cuando aplica."
                  : "REST APIs, validation, Axios consumption, Express and Python backend when needed."}
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
            >
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Datos" : "Data"}
              </h3>
              <p className="text-gray-300 mt-2 leading-7">
                {currentIdiom === "es"
                  ? "SQL Server, consultas, estructura y lógica para proyectos reales."
                  : "SQL Server, queries, structure and logic for real-world projects."}
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerList>
      </div>
    </div>
  );
};
