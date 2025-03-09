interface HeaderComponentProps {
    onNavigate: (component: string) => void;
  }
  
  export function HeaderComponent({ onNavigate }: HeaderComponentProps) {
    return (
      <>
        <nav className="flex items-center w-screen px-6 py-3 bg-[#CD1338]">
          <img alt="Logo" className="h-10 w-auto" />
          <ul className="flex-1 flex justify-center space-x-8 text-white">
          <li
              className="cursor-pointer hover:text-black"
              onClick={() => onNavigate("presentation")}
            >
              Tech Stack
            </li>
            <li
              className="cursor-pointer hover:text-black"
              onClick={() => onNavigate("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-black"
              onClick={() => onNavigate("aboutMe")}
            >
              About me
            </li>
            <li
              className="cursor-pointer hover:text-black"
              onClick={() => onNavigate("contact")}
            >
              Get in touch!
            </li>
          </ul>
        </nav>
      </>
    );
  }