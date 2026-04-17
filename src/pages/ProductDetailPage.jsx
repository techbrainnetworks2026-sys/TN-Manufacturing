import './ProductDetailPage.css';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import styles from './ProductDetailPage.module.css';
import { useEffect } from 'react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className={styles.detailPage}>
        <div className="container">
          <h2>Product Not Found</h2>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src={product.image} alt={product.title} className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <Link to="/products" className={styles.backButton}>
            ← Back to Solutions
          </Link>
          <span className={styles.category}>Enterprise Manufacturing</span>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.tagline}>{product.description}</p>
        </div>
      </section>

      {/* About & Highlights */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.architectureGrid}>
            <div>
              <span className="section-label">Overview</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Strategic Impact</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                {product.about}
              </p>
            </div>
            <div className={styles.grid}>
              {product.highlights.map((highlight, index) => (
                <div key={index} className={styles.card} style={{ padding: '1.5rem' }}>
                  <p style={{ margin: 0, fontWeight: '500' }}>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Advantages */}
      <section className={`${styles.contentSection} bg-glass`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Capabilities</span>
            <h2>Features & Advantages</h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Core Features</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                    <span style={{ color: '#94a3b8' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Key Advantages</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {product.advantages.map((advantage, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent)' }}>⚡</span>
                    <span style={{ color: '#94a3b8' }}>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Year Scope */}
      <section className="container">
        <div className={styles.scopeSection}>
          <span className="section-label">Future Ready</span>
          <h2 className={styles.scopeTitle}>20-Year Vision & Scope</h2>
          <p className={styles.scopeText}>{product.scope20Year}</p>
        </div>
      </section>

      {/* Architecture Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <span className="section-label">Technical Blueprint</span>
          <h2 style={{ marginBottom: '3rem' }}>System Architecture</h2>
          
          <div className={styles.architectureGrid}>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#94a3b8' }}>
                {product.architecture.description}
              </p>
              <h4 style={{ marginBottom: '1rem' }}>Technology Stack</h4>
              <div className={styles.techStack}>
                {product.architecture.stack.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.card} style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '2rem' }}>Implementation Layers</h3>
              {product.architecture.layers.map((layer, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0' }}>{layer.name}</h4>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>{layer.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.contentSection} style={{ textAlign: 'center' }}>
        <div className="container">
          <div className={styles.card} style={{ background: 'linear-gradient(135deg, var(--accent), #7928ca)', color: '#fff' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Transform Your Factory?</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Connect with our solutions architecture team to discuss your specific requirements.</p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--accent)' }}>
              Request Technical Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

