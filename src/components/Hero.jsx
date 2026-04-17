import './Hero.css';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}> 
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div className={styles.copyArea}>
          <p className={styles.eyebrow}>Industry 4.0 | Smart Manufacturing</p>
          <h1>Next‑Gen Factory Intelligence for the Connected Production Floor</h1>
          <p className={styles.copy}>
            Build faster, smarter, and more efficient manufacturing systems with AI-driven automation, digital twins, predictive maintenance, and real-time production intelligence.
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="/services">Explore Services</a>
            {/* <a className="btn btn-secondary" href="#contact">Request Demo</a> */}
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.techCircle} />
          <div className={styles.techGrid} />
        </div>
      </div>
    </section>
  );
}

