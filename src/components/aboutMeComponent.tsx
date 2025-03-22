import React, { useState, useEffect } from 'react';

export function AboutMeComponent() {
  const images = [
    "/Basketball.jpeg",
    "/Coding.jpg",
    "/QualityTime.jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 p-6">
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl font-extrabold mb-4 text-white">About me:</h3>
              <p className="text-lg text-white leading-relaxed">
                I am passionate about{" "}
                <strong>
                  fixing and building innovative solutions to everyday problems.
                </strong>{" "}
                I enjoy <strong>coding</strong>, 
                playing <strong>basketball</strong>,
                and <strong>spending quality time with friends and family.</strong>
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-6">
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-xl">
              <div className="relative w-full h-64 md:h-80">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slideshow image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}