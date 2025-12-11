import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">RG</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Ryan Gratacos</h1>
          <p className="hero-subtitle">Marketing Consultant</p>
          <p className="hero-description">
            Helping brands grow through strategic marketing and data-driven insights
          </p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          With over 10 years of experience in digital marketing, I specialize in creating
          comprehensive strategies that drive growth and build lasting brand connections.
          My approach combines creative thinking with analytical precision to deliver
          measurable results for clients across diverse industries.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Brand Strategy</h3>
            <p>Develop compelling brand narratives that resonate with your target audience and differentiate you from competitors.</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Comprehensive digital campaigns across social media, content marketing, and paid advertising channels.</p>
          </div>
          <div className="service-card">
            <h3>Market Research</h3>
            <p>Data-driven insights to understand your market, identify opportunities, and make informed decisions.</p>
          </div>
          <div className="service-card">
            <h3>Growth Strategy</h3>
            <p>Scalable strategies designed to accelerate your business growth and maximize ROI.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-text">
          Ready to take your marketing to the next level? Let's discuss how I can help you achieve your goals.
        </p>
        <div className="contact-info">
          <a href="mailto:ryan@gratacos.com" className="contact-link">ryan@gratacos.com</a>
          <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Ryan Gratacos. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
