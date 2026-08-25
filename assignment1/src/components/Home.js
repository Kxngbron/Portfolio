import home_photo from "../assets/home_photo.png";

const Home = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="section-inner">
        <div className="hero">
          <div>
            <span className="eyebrow">Software Engineering Graduate</span>
            <h1 className="section-title">Hi, I'm Bron Banks.</h1>
            <p className="lede">
              I'm a Software Engineering Technology graduate from Centennial College who builds
              clean, reliable full-stack web applications. I enjoy turning ideas into practical
              software people can actually use, and I'm currently looking for a full-stack or
              mobile development roles where I can keep building and contribute from day one.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View My Projects</a>
              <a className="btn btn-secondary" href="#contact">Get In Touch</a>
            </div>
          </div>
          <img src={home_photo} alt="Illustration of software development tools" className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
