import service_photo from "../assets/services.png";

const serviceGroups = [
  {
    title: "Programming Languages",
    icon: "fa-code",
    skills: ["JavaScript", "TypeScript", "Java", "Kotlin", "Python", "C#", "SQL", "CSS"],
  },
  {
    title: "Frontend",
    icon: "fa-display",
    skills: ["React", "Vite", "HTML5", "CSS3", "Jetpack Compose"],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "fa-database",
    skills: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Tools & Platforms",
    icon: "fa-toolbox",
    skills: ["AWS", "Azure", "Linux", "Git", "GitHub"],
  },
  {
    title: "Methodologies",
    icon: "fa-arrows-rotate",
    skills: ["Agile", "Software Testing", "Debugging", "CI/CD Fundamentals", "Linear"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section section-tint">
      <div className="section-inner">
        <div className="services-intro">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="section-title">What I Can Do</h2>
            <p className="page-intro" style={{ marginBottom: 0 }}>
              Here's a snapshot of the languages, frameworks, and tools I use to build full-stack
              web applications.
            </p>
          </div>
          <img src={service_photo} alt="Developer working across multiple languages" />
        </div>

        <div className="services-grid">
          {serviceGroups.map(({ title, icon, skills }) => (
            <div key={title} className="card service-card">
              <h3><i className={`fas ${icon} icon`}></i> {title}</h3>
              <div className="chip-list">
                {skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
