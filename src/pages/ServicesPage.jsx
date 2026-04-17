import './ServicesPage.css';
import styles from './ServicesPage.module.css';

const industries = [
  "Aerospace", "Agriculture", "Automotive", "Chemical", "Defence Technology",
  "Education", "Energy & Utilities", "Entertainment and Media", "Finance",
  "Food Technology", "Healthcare", "Infrastructure", "Logistics", "Manufacturing",
  "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", "Sports",
  "Technology", "Telecommunication", "Textile", "Transportation", "Travel"
];

const mainServices = [
  {
    title: 'Software Development',
    content: 'Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.'
  },
  {
    title: 'Hardware Engineering',
    content: 'Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.'
  },
  {
    title: 'Product Design',
    content: 'Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.'
  },
  {
    title: 'Research & Development',
    content: 'Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.'
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <header className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Capabilities</span>
          <h1>Services</h1>
          <p className={styles.tagline}>
            We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {mainServices.map((service) => (
              <article key={service.title} className={`card ${styles.serviceCard}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.dot} />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactSplit}>
            <div className={styles.contactInfo}>
              <h2>Get in touch with us!</h2>
              <p>
                Whether you are in education, finance, transportation, retail or health care, we have a solution for you.
                We develop both large and small projects and our solutions are always tailored to your needs - both in terms of budget and scope.
              </p>

              <div className={styles.addressGrid}>
                <div className={styles.addressBlock}>
                  <h4>India</h4>
                  <p>Thanjavur<br />6/12 Papa vaikal Street Ayyampettai<br />Papanasam Thanjavur<br />Tamilnadu India.</p>
                </div>
                <div className={styles.addressBlock}>
                  <h4>United Kingdom</h4>
                  <p>London<br />71-75 Shelton Street, Covent Garden,<br />London, WC2H 9JQ, United Kingdom.</p>
                </div>
              </div>

              <div className={styles.quickContact}>
                <h4>Contact us</h4>
                <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
              </div>
            </div>

            <form className={`card ${styles.servicesForm}`}>
              <div className={styles.formGrid}>
                <input type="text" placeholder="Name *" required />
                <input type="text" placeholder="Company Name *" required />
                <input type="email" placeholder="Email Address *" required />
                <input type="tel" placeholder="Mobile No *" required />
                <select required>
                  <option value="">Choose the service</option>
                  <option>Software Development</option>
                  <option>Hardware Engineering</option>
                  <option>Product Design</option>
                  <option>Research & Development</option>
                </select>
                <textarea placeholder="Special Note" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Reach</span>
            <h2>Industries We Serve</h2>
          </div>
          <div className={styles.industryGrid}>
            {industries.map(industry => (
              <div key={industry} className={styles.industryChip}>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

