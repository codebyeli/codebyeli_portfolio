export function ProjectsComponent() {
  return (
      <div className="text-white grid grid-cols-2 gap-10 w-screen">
        <a href="https://codebyeli.github.io/EcoRAEE/">
        <div className="m-5 p-2 bg-[#CD1338] rounded">
          <img src="/Captura.PNG" alt="EcoRAEE" />
          <p>
            EcoRAEE is a web application made with the MEAN stack. Dedicated to
            combating electronic waste through education and efficient
            management. It features an informative landing page, an &ldquo;About
            Us&rdquo; page detailing our vision, mission, and values, and a
            robust user authentication module with registration, login, and
            password recovery functionalities.
          </p>
        </div>
        </a>
        <a href="https://codebyeli.github.io/careerly/">
        <div className="m-5 p-2 bg-[#CD1338] rounded">
          <img src="/CapturaCareerly.PNG" alt="Careerly" />
          <p>
            Careerly is a personal project I made for personal use. Technologies
            include Angular for frontend, Node.js and Express.js for backend,
            and MongoDB for database. It is still a work in progress, consisting
            of a job application tracker I made so people can organize better
            their job hunting journey.
          </p>
        </div>
        </a>
      </div>
  );
}
