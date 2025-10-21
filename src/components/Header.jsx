import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="shadow-md mb-8">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link className="hover:no-underline" to="/">
          <h1 className="font-bold text-sm sm:text-2xl hover:text-white flex flex-wrap gap-2">
            Joseph Kifle
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="about" smooth={true} duration={500}>
            <li className="hidden text-white sm:inline lin hover:opacity-75">
              ABOUT
            </li>
          </Link>
          {/*
          <Link to="skills" smooth={true} duration={500}>
            <li className="hidden text-white sm:inline lin hover:opacity-75">
              SKILLS
            </li>
          </Link>
          <Link to="education" smooth={true} duration={500}>
            <li className="hidden text-white sm:inline lin hover:opacity-75">
              EDUCATION
            </li>
          </Link>
          */}
          <Link to="projects" smooth={true} duration={500}>
            <li className="hidden text-white sm:inline lin hover:opacity-75">
              PROJECTS
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
