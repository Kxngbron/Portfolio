import { useEffect, useState } from "react";
import logo from "../../assets/ghost1.png";

const links = [
  { id: "home", label: "Home", icon: "fa-house" },
  { id: "services", label: "Services", icon: "fa-rocket" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "about", label: "About", icon: "fa-address-card" },
  { id: "contact", label: "Contact", icon: "fa-comments" },
];

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="" />
        Bron Banks
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <nav className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <i className={`fas ${icon}`}></i> {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
