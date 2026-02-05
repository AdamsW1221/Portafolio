import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { About } from "./About";
import { Resume } from "./Resume";
import { Comments } from "./Comments";
import { Projects } from "./Projects";
import { Stats } from "./Stats";
import { Contact } from "./Contact";

import { useNavbarContext } from "../contexts/Navbar";
import { ScrollRootProvider } from "../contexts/ScrollRoot";

import "../assets/css/sectionCard.css";

const SECTION_COMPONENTS = {
  comments: Comments,
  about: About,
  resume: Resume,
  projects: Projects,
  stats: Stats,
  contact: Contact,
};

const page = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
};

export const Section = () => {
  const { selectedButton } = useNavbarContext();
  const Active = SECTION_COMPONENTS[selectedButton] ?? null;

  const scrollRef = useRef(null);

  return (
    <div className="px-2 py-2 lg:py-5 md:px-0 pb-20 h-full">
      <div
        ref={scrollRef}
        className="lg:max-w-[1000px] bg-[#121c34] h-full lg:overflow-y-auto rounded-md lg:rounded-s-none lg:rounded-r-md z-10 relative scroll-color"
      >
        <ScrollRootProvider value={scrollRef}>
          <AnimatePresence mode="wait">
            {Active ? (
              <motion.div
                key={selectedButton}
                variants={page}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="min-h-full"
              >
                <Active />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </ScrollRootProvider>
      </div>
    </div>
  );
};
