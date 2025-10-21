import { Link } from "react-router-dom";

const projects = [
  {
    title: "Symptom Diagnostic Tool",
    img: "/projects/SymptomDiagnosticTool.png",
    link: "https://github.com/jkifle/symptom-diagnostic-tool",
    desc: "An interactive command-line tool that uses a decision tree classifier to predict possible diseases based on user-reported symptoms.",
  },
  {
    title: "Portfolio Website",
    img: "UpArrow.jpg",
    link: "/",
    desc: "Personal portfolio showcasing projects and experience.",
  },
  {
    title: "PocketWatch",
    img: "/projects/PocketWatch.png",
    link: "https://personal-expense-tracker-aqjzpxnah-jkifles-projects.vercel.app",
    desc: "Pocket Watch is a full-stack personal finance tracker that securely connects to users’ bank accounts via Plaid, automates transaction categorization, and visualizes real-time spending data through an intuitive, responsive interface.",
  },
  {
    title: "Light Intensity Analyzer",
    img: "/projects/LightIntensityAnalyzer.png",
    link: "https://github.com/jkifle/frame-light-intensity-analyzer",
    desc: "A real-time light intensity analyzer for frame-based cameras using OpenCV and Python.",
  },
];

export default function ProjectCard() {
  return (
    <section className="bg-slate-900 py-16 px-10">
      <h2 className="text-4xl text-center text-white font-bold mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-semibold text-lime-300">
                {project.title}
              </h3>
              <p className="text-gray-200 mt-3">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
