import theCommons from "../assets/the-commons.jpg";
import onlineMarketing from "../assets/online-marketing.png";
import cuisineFinder from "../assets/cuisine-finder.svg";

const projects = [
  {
    name: "The Commons",
    image: theCommons,
    description:
      "An AI-assisted community engagement platform connecting neighborhoods through a social feed, event coordination, mutual-aid requests, and emergency alerts, built on a micro-frontend architecture with JWT auth and role-based access across four backend services.",
    link: "https://the-commons-shell.vercel.app",
    repo: "https://github.com/Bron-Banks/The-Commons",
    tech: ["TypeScript", "React", "Node.js", "GraphQL", "MongoDB", "Vite", "Tailwind CSS"],
    alt: "Screenshot of The Commons homepage, showing the hero section and AI-generated community insights",
    featured: true,
  },
  {
    name: "Online Marketing",
    image: onlineMarketing,
    description:
      "A full-stack marketplace web app for browsing, filtering, and purchasing items across categories like electronics, furniture, and fashion, with a seller dashboard, persistent cart, and JWT-authenticated checkout flow backed by a Node/Express and MongoDB API.",
    link: "https://online-marketing-u1mj.onrender.com",
    repo: "https://github.com/Bron-Banks/Online-Marketing",
    tech: ["JavaScript", "React", "React Router", "Bootstrap", "Node.js", "MongoDB", "JWT"],
    alt: "Screenshot of the Online Marketing app showing a filterable grid of item listings",
  },
  {
    name: "Cuisine Finder",
    image: cuisineFinder,
    description:
      "A native Android app for discovering and navigating to restaurants across the Greater Toronto Area, organized by cuisine type, with interactive Google Maps routing and live location tracking.",
    link: "https://github.com/Bron-Banks/Cuisine-Finder",
    linkLabel: "View on GitHub",
    linkIcon: "fa-github",
    tech: ["Kotlin", "Jetpack Compose", "Google Maps SDK", "Material 3"],
    alt: "Illustration of the Cuisine Finder app showing a restaurant map with pins and a restaurant listing",
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
