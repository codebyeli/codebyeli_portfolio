import { useEffect, useState } from "react";

export function PresentationComponent() {
  const [isRed, setIsRed] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-4xl text-center">
        Hi, I&apos;m{" "}
        <strong
          className={`transition-colors duration-500 ${
            isRed ? "text-[#CD1338]" : ""
          }`}
        >
          Eli.
        </strong>
      </h1>
      
      {showImages && (
        <div className="grid grid-cols-4 gap-4 mt-4 place-items-center">
          <img src="/mongodb-svgrepo-com.svg" alt="Mongo" className="h-21 w-auto" />
          <img src="/express-svgrepo-com.svg" alt="Expressjs" className="h-21 w-auto" />
          <img src="/angular-svgrepo-com.svg" alt="Angular" className="h-21 w-auto" />
          <img src="/nodejs-icon-svgrepo-com.svg" alt="Nodejs" className="h-21 w-auto" />
          <img src="/nextjs-svgrepo-com.svg" alt="Nextjs" className="h-21 w-auto fill-current" />
          <img src="/react-svgrepo-com.svg" alt="React" className="h-21 w-auto" />
          <img src="/html-5-svgrepo-com.svg" alt="HTML" className="h-21 w-auto" />
          <img src="/css-3-svgrepo-com.svg" alt="CSS" className="h-21 w-auto" />
          <img src="/microsoft-sql-server-logo-svgrepo-com.svg" alt="SQL" className="h-21 w-auto" />
        </div>
      )}
    </div>
  );
}
