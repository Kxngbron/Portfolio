import personal_photo from "../assets/bron.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <span className="eyebrow">About</span>
        <h2 className="section-title">About Me</h2>
        <p className="page-intro">A bit more about who I am and what I'm working toward.</p>

        <div className="about-grid">
          <div>
            <img src={personal_photo} alt="Bron Banks" className="about-photo" />
            <ul className="about-facts">
              <li><strong>Name:</strong> Bron Banks</li>
              <li><strong>Education:</strong> Software Engineering Technology, Centennial College (Graduate)</li>
              <li><strong>Status:</strong> Open to full-stack &amp; mobile development roles</li>
            </ul>
            <a href="/Resume/Bron_Resume.pdf" download="Bron_Banks_Resume.pdf" className="btn btn-secondary" style={{ marginTop: 16 }}>
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          <div className="about-bio">
            <p>
              I'm a Software Engineering Technology graduate from Centennial College with a solid
              foundation in full-stack development and a track record of turning ideas into
              working software, from AI-integrated web platforms to interactive applications. I
              care about writing code that's reliable, maintainable, and genuinely useful to the
              people who use it.
            </p>
            <p>
              I'm comfortable working across the stack, from building responsive interfaces in
              React to designing GraphQL APIs and structuring databases, and I pick up new tools
              and frameworks quickly. I'm currently looking for a full-stack or front-end
              developer role where I can keep building, learn from an experienced team, and add
              value from day one.
            </p>
            <p>
              Outside of coding, I enjoy gaming, exploring new places, and staying active on
              social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
