import theCommons from "../assets/the-commons.jpg";
import cuisineFinder from "../assets/cuisine-finder.svg";
import project3 from "../assets/project3.png";

const projects = [
  {
    name: "The Commons",
    image: theCommons,
    description:
      "An AI-assisted community engagement platform connecting neighborhoods through a social feed, event coordination, mutual-aid requests, and emergency alerts, built on a micro-frontend architecture with JWT auth and role-based access across four backend services.",
    link: "https://the-commons-shell.vercel.app",
    repo: "https://github.com/Kxngbron/The-Commons-Community-Organizer-",
    tech: ["React", "Node.js", "GraphQL", "MongoDB", "Vite", "Tailwind CSS"],
    alt: "Screenshot of The Commons homepage, showing the hero section and AI-generated community insights",
    featured: true,
  },
  {
    name: "Cuisine Finder",
    image: cuisineFinder,
    description:
      "A native Android app for discovering and navigating to restaurants across the Greater Toronto Area, organized by cuisine type, with interactive Google Maps routing and live location tracking.",
    link: "https://github.com/Kxngbron/Cuisine-Finder",
    linkLabel: "View on GitHub",
    linkIcon: "fa-github",
    tech: ["Kotlin", "Jetpack Compose", "Google Maps SDK", "Material 3"],
    alt: "Illustration of the Cuisine Finder app showing a restaurant map with pins and a restaurant listing",
  },
  {
    name: "Word Guessing Game",
    image: project3,
    description: "A hangman-style word guessing game built with vanilla JavaScript.",
    link: "/Project3/index.html",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <span className="eyebrow">Portfolio</span>
        <h2 className="section-title">My Projects</h2>
        <p className="page-intro">A selection of web projects I've designed and built.</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className={`card project-card${project.featured ? " featured" : ""}`} key={project.name}>
              <img className="project-image" src={project.image} alt={project.alt || project.name} />
              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech && (
                  <div className="chip-list" style={{ marginBottom: 16 }}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                )}
                <div className="project-actions">
                  <a className="btn btn-secondary" href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel || "View Project"}{" "}
                    <i className={project.linkIcon ? `fab ${project.linkIcon}` : "fas fa-arrow-up-right-from-square"}></i>
                  </a>
                  {project.repo && (
                    <a className="icon-btn" href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
