const Contact = () => {
  return (
    <section id="contact" className="section section-tint">
      <div className="section-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="page-intro">Have an opportunity or question? I'd love to hear from you.</p>

        <div className="contact-grid">
          <div className="card contact-card">
            <h3>Contact Info</h3>
            <p className="contact-detail"><i className="fas fa-phone icon"></i> 647-642-0305</p>
            <p className="contact-detail"><i className="fas fa-envelope icon"></i> bronbanks.bab@gmail.com</p>
            <div className="contact-socials">
              <a href="https://www.instagram.com/whoisbron._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bron-banks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Bron-Banks" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <form className="card contact-form" action="mailto:bronbanks.bab@gmail.com" method="post">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" placeholder="John" required />
              </div>
              <div className="form-field">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="tele">Contact Number</label>
                <input type="text" name="tele" id="tele" placeholder="123-456-7890" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-secondary">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
