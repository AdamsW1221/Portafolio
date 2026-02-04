import { About } from "./About"
import { Resume } from "./Resume"
import { Comments } from "./Comments"
import { Projects } from "./Projects"
import { Stats } from "./Stats"
import { Contact } from "./Contact"
import { useNavbarContext } from "../contexts/Navbar"
import '../assets/css/sectionCard.css'

export const Section = ()=>{

    const valueContext = useNavbarContext()

    const viewComponent = ()=>{
        if(valueContext.selectedButton === 'comments'){
            return <Comments/>
        }
        else if(valueContext.selectedButton === 'about'){
            return <About/>
        }
        else if(valueContext.selectedButton === 'resume'){
            return <Resume/>
        }
        else if(valueContext.selectedButton === 'projects'){
            return <Projects/>
        }
        else if(valueContext.selectedButton === 'stats'){
            return <Stats/>
        }
        else if(valueContext.selectedButton === 'contact'){
            return <Contact/>
        }
        else {
            return null; 
          }
    }

    return (
        <div className="px-2 py-2 lg:py-5 md:px-0 pb-20 h-full">
            <div className=" lg:max-w-[1000px] bg-[#121c34] h-full overflow-y-auto rounded-md lg:rounded-s-none lg:rounded-r-md z-10 relative scroll-color ">
                {viewComponent()}
            </div>
        </div>
    )
}