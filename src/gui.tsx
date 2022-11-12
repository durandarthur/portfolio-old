import { Component } from "react";
import { Chrono } from "react-chrono";
import ContactForm from "./components/ContactForm";
import { entries, entriesTitles, projects, usedTechs } from "./lib/data";

export class Gui extends Component {
  render() {
    // let ex: Array<object> = [];
    // entries.map(entry => {
    //     let temp = {} as {title: string};
    //     temp.title = entry.title;
    //     ex.push(temp);
    // })
    // that was dumb
    return (
      <div className="bg-gray-500 text-gray-200">
        <header className="sticky top-0 z-50 h-[10vh] flex w-full content-center justify-between text-gray-100">
          <div className="flex shrink items-center [&>*]:ml-2 sm:[&>*]:ml-4">
            <a href="/">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 flex-no-shrink fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 487.21192 513.16768"
              >
                <defs>
                  <style>
                    {
                      ".cls-1{fill:#fff;}.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px;}"
                    }
                  </style>
                </defs>
                <path
                  className="cls-1"
                  d="M145.54489,5c90.36463,0,176.0687,29.78477,241.32462,83.86761C445.18481,137.1983,480,199.67769,480,256c0,56.29785-34.76462,118.76639-92.99539,167.1033C321.82928,477.20493,236.231,507,145.97774,507H5V5H145.54489m0-5H0V512H145.97774C345.20242,512,485,370.53485,485,256,485,141.38107,344.97858,0,145.54489,0Z"
                  transform="translate(2.21195)"
                />
                <path
                  className="cls-1"
                  d="M182.58174,102.792c55.40126,0,107.93352,18.251,147.91979,51.39079C366.10757,183.69243,387.365,221.75494,387.365,256c0,34.23047-21.22659,72.28662-56.7811,101.8002C290.64758,390.95105,238.18111,409.208,182.84921,409.208H97.635V102.792h84.94673m0-5H92.635V414.208h90.2142C305.97006,414.208,392.365,326.78253,392.365,256c0-70.83447-86.5332-158.208-209.78322-158.208Z"
                  transform="translate(2.21195)"
                />
                <line className="cls-2" x1="2.21125" y1="512.00133" x2="263.38449" y2="16.8517" />
                <line className="cls-2" x1="107.62062" y1="511.16145" x2="348.6472" y2="54.20722" />
                <line className="cls-2" x1="242.20892" y1="256" x2="394.57689" y2="256" />
                <line
                  className="cls-2"
                  x1="193.15756"
                  y1="348.63498"
                  x2="344.98973"
                  y2="348.63498"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/arthur-durand-0967741b9/">
              <svg
                className="w-8 h-8 sm:w-16 sm:h-16 flex-no-shrink fill-gray-200 hover:fill-[#0E76A8] rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3333 3333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z" />
              </svg>
            </a>
            <a href="https://github.com/durandarthur">
              <svg
                className="w-8 h-8 sm:w-16 sm:h-16 flex-no-shrink fill-current invert hover:invert-0 hover:bg-white hover:border-2 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
          </div>
          <nav className="flex flex-auto items-center justify-center 2xl:text-3xl 2xl:justify-end 2xl:[&>*]:mr-4">
            <a href="#timeline" className="hover:underline">
              Expérience
            </a>
            <a href="#projects" className="hover:underline">
              Projets
            </a>
            <a href="#contactForm" className="hover:underline">
              Contact
            </a>
          </nav>
          <input
            type="button"
            value="CV"
            className="p-1 2xl:p-4 border-2 rounded-2xl h-min self-center box-content hover:cursor-pointer hover:bg-gray-200 hover:text-gray-400 mr-2 sm:mr-4 2xl:text-3xl"
          />
        </header>
        {/* <hr /> */}
        <main className="flex flex-col items-center mt-[5vh] sm:mt-[20vh]">
          <section className="flex justify-center w-full md:w-3/4 2xl:w-7/12 h-[25vh]">
            <img
              src="/images/photo.jpg"
              alt="Photo de profil"
              className="hidden sm:block w-auto h-full mr-4"
            />
            <div className="grid grid-rows-6 gap-1 place-content-between w-auto text-center sm:text-left sm:text-sm md:text-md lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
              <p className="self-start font-mono font-bold text-[1em]">Bienvenue chez</p>
              <h1 className="text-gray-100 row-span-2 font-bold self-center text-[3em] sm:text-[4em]">
                Arthur DURAND
              </h1>
              <h2 className="text-gray-400 text-[1.5em] sm:text-[2em]">
                Apprenti développeur fullstack
              </h2>
              <h3 className="text-gray-300 row-span-2 self-end text-[1em] break-words leading-none">
                En tant que passionné des nouvelles technologies, je m'engage à utiliser ma passion
                pour faire avancer les missions des entreprises.
              </h3>
            </div>
          </section>
          <p className="text-5xl mt-[20vh] mb-[7vh]">Mon parcours professionel</p>
          <div className="w-full h-[20vh]">
            <div className="down-arrow m-auto"></div>
          </div>
          <div id="timeline" className="w-1/2 h-full">
            <Chrono
              items={entriesTitles}
              theme={{
                primary: "#D7D7D7",
                secondary: "transparent",
                cardBgColor: "#333333",
                cardForeColor: "#D7D7D7",
                titleColor: "white",
                titleColorActive: "white",
              }}
              fontSizes={{
                title: "1.875rem",
              }}
              hideControls={true}
              flipLayout={true}
              useReadMore={false}
            >
              {entries.map((entry, i) => (
                <div key={i}>
                  {/* <time>{entry.title}</time> */}
                  <h1 className="text-4xl">{entry.cardTitle}</h1>
                  <h2 className="text-3xl">{entry.cardSubtitle}</h2>
                  <p className="text-gray-300 text-2xl">{entry.cardDetailedText}</p>
                </div>
              ))}
            </Chrono>
          </div>
          <section id="projects" className="grid grid-cols-3 h-auto w-full gap-8 px-8 mb-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex flex-1 h-[20vh] justify-center align-middle bg-gray-400 rounded-xl"
              >
                <a href={project.link} className="text-2xl my-auto">
                  {project.title}
                </a>
              </div>
            ))}
          </section>
          <section className="w-full px-8 mb-8">
            <div className="grid grid-cols-9 h-auto w-full p-14 gap-14 bg-gray-400 rounded-xl">
              {usedTechs.map((tech, i) => (
                <div
                  key={i}
                  className="flex justify-center align-middle w-auto aspect-square bg-cover bg-gray-300 rounded-xl text-2xl"
                  style={{ backgroundImage: tech.image }}
                >
                  <p className="my-auto">{tech.name}</p>
                </div>
              ))}
            </div>
          </section>
          <ContactForm />
        </main>
      </div>
    );
  }
}

export default Gui;
