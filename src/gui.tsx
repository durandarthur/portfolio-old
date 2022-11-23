import { Component } from "react";
import { Chrono } from "react-chrono";
import ContactForm from "./components/ContactForm";
import { entries, entriesTitles, projects, usedTechs } from "./lib/data";

export class Gui extends Component {
  render() {
    const cardText = document.getElementsByClassName("rc-card-text");
    for (let i = 0; i < cardText.length; i++) {
      cardText[i].setAttribute("aria-expanded", "true");
    }
    return (
      <div className="bg-gray-500 text-gray-200">
        <header className="sticky top-0 z-50 h-28 py-5 flex w-full content-center justify-between text-gray-100">
          <div className="flex shrink items-center [&>*]:ml-2 sm:[&>*]:ml-4">
            <a href="/" aria-label="Lien du site en version CLI" title="Site version CLI">
              <svg
                aria-label="Logo Durand Arthur"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 484.99994 512"
                className="w-10 h-10 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 flex-no-shrink fill-gray-100 lg:fill-transparent lg:stroke-gray-100 lg:stroke-[5px] lg:hover:fill-gray-100 lg:transition"
                width={319}
                height={316}
              >
                <path
                  className="cls-1"
                  d="M145.54492,0H0V512H145.97778c199.22461-.00006,339.02216-141.46521,339.02216-256C484.99994,141.3811,344.97858,0,145.54492,0Zm246.82,256H239.19836l66.19245-125.492C359.478,162.402,392.36493,212.33856,392.36493,256ZM182.58173,97.792a253.95079,253.95079,0,0,1,35.25305,2.44934L92.635,337.60345V97.792Zm.26751,316.416H155.74945l34.5874-65.57306H348.01038C310.87787,385.98645,252.79572,414.208,182.84924,414.208Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-durand-0967741b9/"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                aria-label="Logo LinkedIn"
                className="w-8 h-8 sm:w-16 sm:h-16 flex-no-shrink fill-gray-200 hover:fill-[#0E76A8] rounded-full transition"
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
            <a href="https://github.com/durandarthur" aria-label="GitHub" title="GitHub">
              <svg
                aria-label="Logo GitHub"
                className="w-8 h-8 sm:w-16 sm:h-16 flex-no-shrink fill-current invert hover:invert-0 hover:bg-white hover:border-2 rounded-full transition"
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
          <nav className="flex flex-auto items-center justify-center text-lg sm:text-xl md:text-2xl xl:text-3xl lg:justify-end [&>*]:mr-1 sm:[&>*]:mr-2 md:[&>*]:mr-3 lg:[&>*]:mr-4">
            <a href="#timeline" className="hover:underline invisible sm:visible">
              Expérience
            </a>
            <a href="#projects" className="hover:underline hidden sm:block">
              Projets
            </a>
            <a href="#contactForm" className="hover:underline hidden sm:block">
              Contact
            </a>
          </nav>
          <a
            href="/CV_Arthur_Durand_2022.pdf"
            download
            className="p-2 md:p-3 2xl:p-4 border-2 rounded-2xl h-min self-center box-content hover:cursor-pointer hover:bg-gray-200 hover:text-gray-400 mr-2 sm:mr-4 text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl transition"
          >
            CV
          </a>
        </header>
        {/* <hr /> */}
        <main className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-between w-screen h-[calc(100vh-7rem)]">
            <section className="flex justify-center w-full md:w-3/4 2xl:w-7/12 h-1/3 lg:h-1/2 2xl:h-1/3 mt-[10%] lg:mt-auto">
              <img
                id="photo"
                src="/images/photo.webp"
                alt="Photo de profil"
                className="hidden sm:block w-auto h-full mr-4 hover:drop-shadow-[35px_35px_0_rgba(0,0,0,0.5)] transition"
              />
              <div className="grid grid-rows-6 gap-1 place-content-between w-min text-center sm:text-left sm:text-sm md:text-md lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-2xl">
                <p className="self-start font-mono font-bold text-[1em]">Bienvenue chez</p>
                <h1 className="text-gray-100 row-span-2 font-bold self-center whitespace-nowrap text-[3em] sm:text-[4em]">
                  Arthur DURAND
                </h1>
                <h2 className="text-gray-400 text-[1.5em] sm:text-[2em]">
                  Apprenti développeur fullstack
                </h2>
                <h3 className="text-gray-300 row-span-2 self-end text-[1em] break-words leading-none">
                  En tant que passionné des nouvelles technologies, je m'engage à utiliser ma
                  passion pour faire avancer les missions des entreprises.
                </h3>
              </div>
            </section>
            <p className="text-center text-4xl lg:text-5xl mt-auto -mb-6 sm:mb-0 lg:-mb-12 2xl:mb-0">
              Mon parcours professionnel
            </p>
            <div className="w-full h-auto mb-[64px]">
              <div className="down-arrow m-auto"></div>
            </div>
          </div>
          <div id="timeline" className="w-full pb-8 lg:w-3/4 5xl:w-1/2 h-full overflow-visible">
            <Chrono
              mode={window.innerWidth < 648 ? "VERTICAL" : "VERTICAL_ALTERNATING"}
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
                  {window.innerWidth < 552 ? <time>{entry.title}</time> : null}
                  <h1 className="text-2xl lg:text-4xl">{entry.cardTitle}</h1>
                  <h2 className="text-xl lg:text-3xl">{entry.cardSubtitle}</h2>
                  <p className="text-gray-300 text-lg lg:text-2xl">{entry.cardDetailedText}</p>
                </div>
              ))}
            </Chrono>
          </div>
          <section
            id="projects"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-auto w-full gap-8 px-8 mb-8"
          >
            {projects.map((project, i) => (
              <a key={i} href={project.link} target="_blank">
                <div className="flex flex-1 h-[20vh] justify-center align-middle bg-gray-400 rounded-xl [&>*]:hover:text-3xl hover:ring ring-gray-100 hover:bg-gray-500 transition-all">
                  <p className="text-2xl text-center my-auto transition-all">{project.title}</p>
                </div>
              </a>
            ))}
          </section>
          <section className="w-full px-8 mb-8">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 h-auto w-full p-4 lg:p-14 gap-4 lg:gap-14 bg-gray-400 rounded-xl">
              {usedTechs.map((tech, i) => (
                <a
                  href={tech.link}
                  target="_blank"
                  key={i}
                  aria-label={tech.name}
                  title={tech.name}
                >
                  <div
                    className={`flex justify-center align-middle w-auto aspect-square bg-contain bg-no-repeat bg-center rounded-xl text-2xl transition-all hover:cursor-pointer [&>*]:hover:visible hover:-m-2 active:-m-2`}
                    style={{ backgroundImage: tech.image }}
                  >
                    <p className="my-auto bg-gray-300 rounded-xl p-2 invisible select-none">
                      {tech.name}
                    </p>
                  </div>
                </a>
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
