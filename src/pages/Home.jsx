import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Slider from "react-slick";
import { Element } from "react-scroll";

const projects = [
  {
    title: "Symptom Diagnostic Tool",
    img: "/projects/SymptomDiagnosticTool.png",
    link: "https://github.com/jkifle/symptom-diagnostic-tool",
    description:
      "An interactive command-line tool that uses a decision tree classifier to predict possible diseases based on user-reported symptoms.",
  },
  {
    title: "Portfolio Website",
    img: "UpArrow.jpg",
    link: "https://jkifle.dev",
    description: "Personal portfolio showcasing projects and experience.",
  },
  {
    title: "PocketWatch",
    img: "/projects/PocketWatch.png",
    link: "https://personal-expense-tracker-aqjzpxnah-jkifles-projects.vercel.app",
    description:
      "Pocket Watch is a full-stack personal finance tracker that securely connects to users’ bank accounts via Plaid, automates transaction categorization, and visualizes real-time spending data through an intuitive, responsive interface.",
  },
  {
    title: "Light Intensity Analyzer",
    img: "/projects/LightIntensityAnalyzer.png",
    link: "https://github.com/jkifle/frame-light-intensity-analyzer",
    description:
      "A real-time light intensity analyzer for frame-based cameras using OpenCV and Python.",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="m-8">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 px-8 py-6 mb-40">
        {/* Left: Intro Text */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col justify-center">
          <p className="text-4xl md:text-5xl">
            <strong className="text-5xl md:text-6xl">Hey,</strong>
          </p>
          <p className="text-4xl md:text-5xl mt-3">
            I am <strong>JOSEPH KIFLE</strong>.
          </p>
          <p className="mt-8 text-2xl md:text-3xl leading-snug">
            Aspiring Software Engineer, passionate about Emerging Technologies
            &amp; Problem Solving.
          </p>
        </div>

        {/* Right: Headshot */}
        <div className="flex justify-center items-center">
          <img
            src="/headshot.JPG"
            alt="A headshot of Joseph Kifle"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Resume Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 text-lg font-semibold text-slate-800 bg-lime-300 rounded-lg shadow-md hover:bg-lime-400 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="col-span-1 md:col-span-2 flex justify-center space-x-6 mt-10">
          <a
            href="https://github.com/jkifle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="size-14 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-kifle/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="size-14 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="mailto:kifle.joe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email"
          >
            <FaEnvelope className="size-14 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <Element name="about">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40 px-8">
          <div className="flex justify-center items-center">
            <img
              src="/headshot2.JPG"
              alt="Another headshot of Joseph Kifle"
              className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold pb-6">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Joseph Kifle is an aspiring software engineer and emerging
              technology enthusiast currently pursuing a degree in Computer
              Engineering at the University of Tennessee, Knoxville. He’s
              passionate about solving complex problems through innovation —
              from coding efficient software systems to exploring cutting-edge
              tools in AI, automation, and data analysis. Joseph combines
              creativity and technical rigor to design solutions that make
              technology more intuitive and impactful.
            </p>
          </div>
        </section>
      </Element>
      <Element name="projects">
        <section className="px-8 py-20 bg-gray-900 text-white rounded-2xl shadow-lg mb-40">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full md:w-2/3 lg:w-1/2 h-80 object-cover rounded-xl border-4 border-lime-300 shadow-md mx-auto"
                />
                <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
                <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-lime-300 text-slate-800 font-semibold rounded-lg hover:bg-lime-400 transition"
                >
                  View Project
                </a>
              </div>
            ))}
          </Slider>
        </section>
      </Element>
    </div>
  );
}
