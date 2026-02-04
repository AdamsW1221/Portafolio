import { Navbar } from "../contexts/Navbar";
import { Profile } from "../components/ProfileCard";
import { Section } from "../components/SectionCard";
import { Probando } from "./Probando";
export const Home = () => {

  return (
    
    <div className="flex justify-center items-center bg-gradient-to-t md:bg-gradient-to-r from-indigo-600 to-violet-600  lg:h-screen lg:w-screen overflow-hidden">
        <div className="h-full w-full lg:w-auto  lg:min-w-[800px] 2xl:h-[650px] flex flex-col lg:flex-row lg:flex-nowrap ">
          <Navbar>
            <Profile/>
              <div className="w-full lg:w-[1000px]">
              <Section/>
              </div>
          </Navbar>
        </div>
    </div>
  );
};

