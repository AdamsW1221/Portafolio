import { Navbar } from "../contexts/Navbar";
import { Profile } from "../components/ProfileCard";
import { Section } from "../components/SectionCard";

export const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-t md:bg-gradient-to-r from-indigo-600 to-violet-600">
      {/* Desktop: layout tipo app, full width */}
      <div className="w-full lg:h-screen">
        {/* 
          IMPORTANTE:
          - En LG: full screen sin márgenes
          - En XL+: NO encoger. Solo padding + max-w grande para que no quede vacío
        */}
        <div className="w-full h-full lg:flex lg:flex-row lg:flex-nowrap">
          <Navbar>
            <div
              className="
                w-full h-full
                lg:flex lg:flex-row lg:flex-nowrap
                min-w-0
                lg:px-0 lg:py-0
                xl:px-6 xl:py-6
                2xl:px-10 2xl:py-8
              "
            >
              {/* Contenedor interno grande (no “isla”) */}
              <div className="w-full h-full xl:max-w-[1700px] xl:mx-auto lg:flex lg:flex-row lg:flex-nowrap min-w-0">
                <Profile />
                <Section />
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
