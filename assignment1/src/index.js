import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(".section-inner");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-content">
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
