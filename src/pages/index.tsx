import { useState } from "react";
import { HeaderComponent } from "@/components/headerComponent";
import { PresentationComponent } from "@/components/presentationComponent";
import { AboutMeComponent } from "@/components/aboutMeComponent";
import { ProjectsComponent } from "@/components/projectsComponent";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("presentation");

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      <HeaderComponent onNavigate={handleNavigation} />
      {activeComponent === "presentation" && <PresentationComponent />}
      {activeComponent === "aboutMe" && <AboutMeComponent />}
      {activeComponent === "projects" && <ProjectsComponent />}
    </>
  );
}