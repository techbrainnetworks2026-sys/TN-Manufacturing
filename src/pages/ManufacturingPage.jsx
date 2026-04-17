import './ManufacturingPage.css';
import styles from './ManufacturingPage.module.css';

const solutions = [
  {
    icon: '🏢',
    title: 'Digital Twins',
    description: 'Create virtual replicas of your production lines to simulate, analyze, and optimize performance before physical implementation.'
  },
  {
    icon: '📡',
    title: 'Industrial IoT',
    description: 'Connect every machine and sensor across your shop floor for real-time visibility into your entire manufacturing ecosystem.'
  },
  {
    icon: '🧠',
    title: 'AI Predictive Maintenance',
    description: 'Harness machine learning to predict equipment failures before they happen, slashing downtime and maintenance costs.'
  },
  {
    icon: '🤖',
    title: 'Smart Automation',
    description: 'Integrated robotics and intelligent control systems that adapt to production changes on the fly for maximum agility.'
  }
];

export default function ManufacturingPage() {
  return (
    <div className={styles.manufacturingPage}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="section-label">Manufacturing Excellence</span>
            <h1>The Future of Smart Production</h1>
            <p className={styles.tagline}>
              Accelerate your Industry 4.0 journey with Techbrain Networks. We deliver the intelligence, connectivity, and automation required to thrive in the modern industrial landscape.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-primary">Start Transformation</a>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.solutionsGrid}>
            {solutions.map((item) => (
              <div key={item.title} className={styles.solutionCard}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h2>30%</h2>
              <p>Energy Reduction</p>
            </div>
            <div className={styles.statItem}>
              <h2>25%</h2>
              <p>Output Increase</p>
            </div>
            <div className={styles.statItem}>
              <h2>40%</h2>
              <p>Downtime Reduction</p>
            </div>
            <div className={styles.statItem}>
              <h2>10x</h2>
              <p>Faster Prototyping</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techFlex}>
            <div className={styles.techContent}>
              <span className="section-label">Advanced Connectivity</span>
              <h2>Unified Production Intelligence</h2>
              <p className="copy-large" style={{ marginTop: '1.5rem' }}>
                Our platform integrates disparate systems into a single, cohesive intelligence layer. From PLC data to ERP systems, we provide the end-to-end visibility needed for data-driven manufacturing.
              </p>
              <ul style={{ marginTop: '2rem', display: 'grid', gap: '1rem', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Real-time OEE Monitoring
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Dynamic Resource Scheduling
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Automated Quality Assurance
                </li>
              </ul>
            </div>
            <div className={styles.techImage}>
              <img
                src="https://images.unsplash.com/photo-1565351865910-449e7552945d?auto=format&fit=crop&q=80&w=2070"
                alt="Smart Factory Control Center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to revolutionize your production?</h2>
          <p className="copy-large" style={{ marginBottom: '2.5rem', marginTop: '1rem' }}>
            Partner with our expert engineers to design and deploy custom manufacturing solutions.
          </p>
          <a href="/contact" className="btn btn-primary btn-large">Request a Case Study</a>
        </div>
      </section>
    </div>
  );
}

