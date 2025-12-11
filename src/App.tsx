import './App.css'
import ryanPhoto from './assets/ryan-linked-in.jpeg'

function App() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">RG</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-image-glow"></div>
            <img src={ryanPhoto} alt="Ryan Gratacos" className="profile-image" />
          </div>
          <h1 className="hero-title">Ryan Gratacos</h1>
          <p className="hero-subtitle">Marketing Operations Leader</p>
          <p className="hero-description">
            15+ years driving revenue growth through analytics, operations optimization, and strategic GTM execution
          </p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-content">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            15+ years in B2C and B2B marketing; I specialize in building analytics, optimizing
            operations, and influencing stakeholders to bring insights, efficiency, and ROI.
            I thrive in data-driven roles that impact revenue, shape GTM strategies, and deliver
            thoughtful customer experiences.
          </p>
          <p className="about-text" style={{ marginTop: '1.5rem' }}>
            As an empathetic leader, I foster collaboration, bringing strategic thought partnership
            to diverse teams for a big-picture approach. I excel in environments that value innovation,
            efficiency, and inclusive leadership.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="section services">
        <div className="section-content">
          <h2 className="section-title">Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Marketing Analytics</h3>
              <p>Building automated reporting systems, defining key metrics, and uncovering actionable insights that drive data-driven decision making and revenue growth.</p>
            </div>
            <div className="service-card">
              <h3>Operations Optimization</h3>
              <p>Streamlining marketing operations through automation, process design, and tooling to unlock efficiency and scalability across organizations.</p>
            </div>
            <div className="service-card">
              <h3>GTM Strategy</h3>
              <p>Shaping go-to-market strategies through strategic recommendations, lead scoring, funnel optimization, and cross-functional collaboration.</p>
            </div>
            <div className="service-card">
              <h3>Revenue Operations</h3>
              <p>Strengthening revenue operations through technical infrastructure, compliant global operations, and standardized reporting for deeper insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Marketing Ops</h3>
                  <p className="company-name">Rippling</p>
                </div>
                <span className="date-badge current">2025 - Present</span>
              </div>
              <p className="role-description">
                Supporting Growth Data Ops through technical infrastructure & insights for compliant global GTM & XS efforts.
              </p>
              <div className="role-tags">
                <span className="tag">Data Operations</span>
                <span className="tag">GTM Strategy</span>
                <span className="tag">Infrastructure</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Senior Marketing Ops Manager</h3>
                  <p className="company-name">Guideline</p>
                </div>
                <span className="date-badge">2024 - 2025</span>
              </div>
              <p className="role-description">
                Strengthened Revenue Ops through automation, reporting, tooling, and operations to drive GTM strategies; Owned Lead Scoring and supported ToF standardization.
              </p>
              <div className="role-tags">
                <span className="tag">Revenue Ops</span>
                <span className="tag">Lead Scoring</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Program Manager & Senior Marketing Ops Manager</h3>
                  <p className="company-name">Zillow</p>
                </div>
                <span className="date-badge">2021 - 2023</span>
              </div>
              <p className="role-description">
                Redesigned Marketing Analytics support and rebuilt Agile Quarterly Prioritization process for 100+ Marketing team, unlocking data-driven insights and capacity planning.
              </p>
              <div className="role-tags">
                <span className="tag">Marketing Analytics</span>
                <span className="tag">Agile</span>
                <span className="tag">Process Design</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Senior Marketing Ops Manager</h3>
                  <p className="company-name">Expedia Group</p>
                </div>
                <span className="date-badge">2020 - 2021</span>
              </div>
              <p className="role-description">
                Transformed B2B Marketing & Sales funnels through standardized reporting, insights, campaign measurement, and scaled operations.
              </p>
              <div className="role-tags">
                <span className="tag">B2B Marketing</span>
                <span className="tag">Funnel Optimization</span>
                <span className="tag">Reporting</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">B2B Marketing Consultant</h3>
                  <p className="company-name">Airbnb</p>
                </div>
                <span className="date-badge">2019</span>
              </div>
              <p className="role-description">
                Built automated Marketing reporting from 0 to 1, influencing Marketing Leadership on digital strategies for B2B product awareness and conversion.
              </p>
              <div className="role-tags">
                <span className="tag">0 to 1</span>
                <span className="tag">Reporting</span>
                <span className="tag">Strategy</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Senior Analyst</h3>
                  <p className="company-name">JetBlue Airways</p>
                </div>
                <span className="date-badge">2016 - 2019</span>
              </div>
              <p className="role-description">
                Guided JetBlue Vacations product offerings for Marketing and Product GTM launches through reporting, analytics, insights, and data-driven recommendations.
              </p>
              <div className="role-tags">
                <span className="tag">Product Analytics</span>
                <span className="tag">GTM</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="role-header">
                <div>
                  <h3 className="role-title">Senior Analyst</h3>
                  <p className="company-name">American Express</p>
                </div>
                <span className="date-badge">2014 - 2016</span>
              </div>
              <p className="role-description">
                Supported Attrition Prevention team deliver Marketing engagement and retention strategies, tactics, budget management, reporting and insights that transformed the American Express OPEN (SMB) customer experience.
              </p>
              <div className="role-tags">
                <span className="tag">Customer Retention</span>
                <span className="tag">SMB</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-content">
          <div className="contact-card">
          <div className="card-glare"></div>
          <div className="contact-card-content">
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-text">
              Ready to optimize your marketing operations and drive revenue growth? Let's discuss how I can help you achieve your goals.
            </p>
            <div className="contact-info">
              <a href="mailto:ryan@gratacos.com" className="contact-link">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ryan@gratacos.com</span>
              </a>
              <a href="https://linkedin.com/in/ryangratacos" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <a href="mailto:ryan@gratacos.com" className="cta-button-large">Send a Message</a>
          </div>
        </div>
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
