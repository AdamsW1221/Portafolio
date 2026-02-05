import { IoLanguage } from "react-icons/io5";
import { BiConversation } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiCreditCardFront } from "react-icons/bi";
import { GrAppsRounded } from "react-icons/gr";
import { PiChartDonutFill } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { useIdiom } from "./ChangeIdiom";
import { createContext, useContext, useMemo, useState } from "react";

const NavbarContext = createContext();

export const Navbar = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState("about");
  const { currentIdiom, toggleIdiom, dataIdiom } = useIdiom();
  const currentData = dataIdiom[currentIdiom];

  const handleButtonClick = (buttonName) => setSelectedButton(buttonName);

  const NAV_ITEMS = useMemo(
    () => [
      {
        key: "about",
        Icon: FaRegUser,
        label: currentData.navbar.about,
        className:
          "group bg-[#121c34] rounded-l-lg lg:rounded-bl-none lg:rounded-t-lg w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20 flex items-center justify-center flex-col",
        labelClassName:
          "text-white font-sans text-[10px] 2xl:xl:md:text-[12px] lg:text-[9px] xl:text-[11px] mt-2 uppercase transition-colors group-hover:text-indigo-500 duration-300",
      },
      {
        key: "resume",
        Icon: BiCreditCardFront,
        label: currentData.navbar.resume,
        className:
          "group bg-[#121c34] w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex items-center justify-center flex-col",
        labelClassName:
          "text-white font-sans text-[10px] md:text-[12px] lg:text-[9px] xl:text-[11px] mt-2 uppercase transition-colors group-hover:text-indigo-500 duration-300",
      },
      {
        key: "projects",
        Icon: GrAppsRounded,
        label: currentData.navbar.projects,
        className:
          "group bg-[#121c34] w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex items-center justify-center flex-col",
        labelClassName:
          "text-white font-sans text-[10px] md:text-[12px] lg:text-[9px] xl:text-[11px] mt-2 uppercase transition-colors group-hover:text-indigo-500 duration-300",
      },
      {
        key: "stats",
        Icon: PiChartDonutFill,
        label: currentData.navbar.stats,
        className:
          "group bg-[#121c34] w-20 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex items-center justify-center flex-col",
        labelClassName: `text-white font-sans ${
          currentIdiom === "es"
            ? "text-[10px] lg:text-[8px] xl:text-[11px]"
            : "text-[12px] lg:text-[10px] xl:text-[12px]"
        } mt-2 uppercase transition-colors group-hover:text-indigo-500 duration-300`,
      },
      {
        key: "contact",
        Icon: LuSend,
        label: currentData.navbar.contact,
        className:
          "group bg-[#121c34] rounded-r-lg lg:rounded-tr-none lg:rounded-b-lg lg:w-14 lg:h-14 xl:h-20 h-16 w-20 xl:w-20 flex items-center justify-center flex-col",
        labelClassName:
          "text-white font-sans text-[9px] lg:text-[8px] xl:text-[11px] mt-2 uppercase transition-colors group-hover:text-indigo-500 duration-300",
      },
    ],
    [currentData.navbar, currentIdiom]
  );

  return (
    <NavbarContext.Provider value={{ selectedButton, handleButtonClick }}>
      <div
        className="
        shadow-xl 
          w-full h-16 bg-[#0c1322]
          lg:w-14 xl:w-20 lg:h-full
          fixed lg:static z-40 bottom-0
          flex justify-center md:justify-between
          lg:flex-col
          lg:rounded-none xl:rounded-r-md
        "
      >
        {/* Left / Top buttons (Desktop/Tablet) */}
        <div
          className="
          
            shadow-xl 
            
            lg:mt-2 xl:mt-7
            md:-translate-y-2 md:ml-4
            space-y-2 md:flex md:space-y-0 md:space-x-2
            lg:flex-col lg:space-x-0 lg:space-y-2 lg:ml-0
            
            lg:translate-x-0 xl:translate-x-2
            hidden md:block
          "
        >
          <button
            className="group bg-[#121c34]  rounded-md w-14 h-14 lg:w-14 lg:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 flex items-center justify-center"
            onClick={toggleIdiom}
          >
            <IoLanguage className="w-7 h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 md:w-8 md:h-8 text-white transition-colors group-hover:text-indigo-500 duration-300" />
          </button>

          <button
            onClick={() => handleButtonClick("comments")}
            className="group bg-[#121c34] rounded-md lg:w-14 lg:h-14 w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 flex items-center justify-center"
          >
            <BiConversation className="w-7 h-7 md:w-8 md:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white transition-colors group-hover:text-indigo-500 duration-300" />
          </button>
        </div>

        {/* Main nav */}
        <div
          className="
            flex -translate-y-3 md:mr-5 lg:mr-0 md:-translate-y-2
            lg:mt-2 xl:mt-4
            lg:translate-y-0
            lg:divide-y divide-gray-700
            lg:translate-x-0 xl:translate-x-2
            lg:mb-5
            lg:flex-col
          "
        >
          {NAV_ITEMS.map(({ key, Icon, label, className, labelClassName }) => (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
              className={className}
            >
              <Icon className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white transition-colors group-hover:text-indigo-500 duration-300" />
              <p className={labelClassName}>{label}</p>
            </button>
          ))}
        </div>

        {/* Mobile fixed top buttons */}
        <div className="mt-2 flex md:hidden fixed z-40 top-0">
          <button
            className="group bg-[#121c34] rounded-md w-14 h-14 flex items-center justify-center fixed ml-1 left-0"
            onClick={toggleIdiom}
          >
            <IoLanguage className="w-7 h-7 text-white transition-colors group-hover:text-indigo-500 duration-300" />
          </button>

          <button
            onClick={() => handleButtonClick("comments")}
            className="group bg-[#121c34] rounded-md w-14 h-14 flex items-center justify-center mr-1 fixed right-0"
          >
            <BiConversation className="w-7 h-7 text-white transition-colors group-hover:text-indigo-500 duration-300" />
          </button>
        </div>
      </div>

      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
