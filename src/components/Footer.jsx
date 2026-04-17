import './Footer.css';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const industries = [
    "Aerospace", "Agriculture", "Automotive", "Chemical", "Defence Technology",
    "Education", "Energy & Utilities", "Entertainment and Media", "Finance",
    "Food Technology", "Healthcare", "Infrastructure", "Logistics", "Manufacturing",
    "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", "Sports",
    "Technology", "Telecommunication", "Textile", "Transportation", "Travel"
  ];

  const services = [
    "Software Development", "Hardware Engineering", "Product Design", "Research & Development"
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <NavLink to="/" className={styles.brand}>
              <span className="brand-mark">TB</span>
              <h2>TECHBRAIN NETWORKS</h2>
            </NavLink>
            <p className={styles.brandTagline}>Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements.</p>

            <div className={styles.addressBlock}>
              <div className={styles.address}>
                <h4>India</h4>
                <p>6/12 Papa vaikal Street, Ayyampettai Post<br />Papanasam Taluk, Thanjavur 614201, Tamilnadu, India.</p>
              </div>
              <div className={styles.address}>
                <h4>United Kingdom</h4>
                <p>71-75 Shelton Street, Covent Garden,<br />London, WC2H 9JQ, United Kingdom.</p>
              </div>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Industries</h4>
            <ul className={styles.list}>
              {industries.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Services</h4>
            <ul className={styles.list}>
              {services.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Quick Links</h4>
            <nav className={styles.nav}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/industries">Industries</NavLink>
              <NavLink to="/careers">Careers</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <a href="#">Privacy</a>
              <a href="#">Terms & Conditions</a>
            </nav>
            <div className={styles.contactEmail}>
              <h4>Contact us</h4>
              <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
              <p className="mt-2">+91 8754906714</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Techbrain Networks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

