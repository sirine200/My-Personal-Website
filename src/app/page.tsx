import NavBar from "@/components/common/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Tools from "@/components/sections/tools";
import Offers from "@/components/sections/offers";
import ReadyToBuildSection from "@/components/sections/ReadyToBuildSection";
import Projects from "@/components/added/projects";
import Volunteering from "@/components/volunteering/volunteering";
import Skills from "@/components/added/skills"



export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col">
        
        <NavBar />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        <HeroSection id="about" />
        <Offers id="work"  />
        <Skills id="skills" />
        <Tools/>
        <Projects id="projects" />
        <div className="mt-20">
        <Volunteering id="volunteering"/>
        </div>
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        
        <ReadyToBuildSection />
        
      </div>
    </main>
  );
}
