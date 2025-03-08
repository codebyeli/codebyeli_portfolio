import { AboutMeComponent } from "@/components/aboutMeComponent";
import { HeaderComponent } from "@/components/headerComponent";
import { PresentationComponent } from "@/components/presentationComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <PresentationComponent />
      <AboutMeComponent />
    </>
  );
}
