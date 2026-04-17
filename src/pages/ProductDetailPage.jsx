import './ProductDetailPage.css';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import styles from './ProductDetailPage.module.css';
import { useEffect } from 'react';
import { ChevronLeft, ArrowRight, Layers, Cpu, Code, Database, Zap, ShieldCheck } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      {/* Super Premium Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src={product.image} alt={product.title} />
          <div className={styles.gradientOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <Link to="/products" className={styles.backButton}>
            <ChevronLeft size={18} /> Back to Solutions
          </Link>
          
          <div className={styles.heroBadge}>
            <ShieldCheck size={16} /> Enterprise Grade Solution
          </div>
          
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.tagline}>{product.description}</p>
          
          <div className={styles.heroActions}>
            <Link to="/contact" className={styles.btnPrimary}>
              Request Technical Demo <ArrowRight size={18} />
            </Link>
            <a href="#architecture" className={styles.btnSecondary}>
              View Architecture
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Impact & Highlights */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.impactGrid}>
            <div className={styles.impactContent}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Strategic Impact</h2>
              <p className={styles.leadText}>{product.about}</p>
            </div>
            
            <div className={styles.highlightsContainer}>
              {product.highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>
                    <Zap size={24} />
                  </div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Features */}
      <section className={`${styles.section} ${styles.bgDarker}`}>
        <div className="container">
          <div className={styles.centerHeading}>
            <span className={styles.sectionLabel}>Capabilities</span>
            <h2 className={styles.sectionTitle}>Core Features & Benefits</h2>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureColumn}>
              <h3 className={styles.columnTitle}><Layers className={styles.titleIcon} /> Key Features</h3>
              <ul className={styles.featureList}>
                {product.features.map((feature, i) => (
                  <li key={i}>
                    <div className={styles.checkIcon}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.featureColumn}>
              <h3 className={styles.columnTitle}><ArrowRight className={styles.titleIcon} /> Business Benefits</h3>
              <ul className={styles.featureList}>
                {product.benefits.map((benefit, i) => (
                  <li key={i}>
                    <div className={styles.checkIcon}></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.featureColumn}>
              <h3 className={styles.columnTitle}><ShieldCheck className={styles.titleIcon} /> Strategic Advantages</h3>
              <ul className={styles.featureList}>
                {product.advantages.map((advantage, i) => (
                  <li key={i}>
                    <div className={styles.checkIcon}></div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Year Scope / Vision */}
      <section className={styles.visionSection}>
        <div className={styles.visionBackground}></div>
        <div className={`container ${styles.visionContent}`}>
          <span className={styles.sectionLabelAccent}>Future Ready</span>
          <h2 className={styles.visionTitle}>20-Year Vision & Scope</h2>
          <p className={styles.visionText}>{product.scope20Year}</p>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className={styles.section}>
        <div className="container">
          <span className={styles.sectionLabel}>Technical Blueprint</span>
          <h2 className={styles.sectionTitle}>System Architecture</h2>
          
          <div className={styles.architectureGrid}>
            <div className={styles.architectureInfo}>
              <p className={styles.leadText}>
                {product.architecture.description}
              </p>
              
              <h4 className={styles.stackHeading}>Technology Stack</h4>
              <div className={styles.techStack}>
                {product.architecture.stack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    <Code size={14} /> {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={styles.layersContainer}>
              <h3 className={styles.layersTitle}><Database className={styles.titleIcon} /> Implementation Layers</h3>
              <div className={styles.layersTimeline}>
                {product.architecture.layers.map((layer, index) => (
                  <div key={index} className={styles.layerStep}>
                    <div className={styles.layerNode}>
                      <Cpu size={18} />
                    </div>
                    <div className={styles.layerContent}>
                      <h4>{layer.name}</h4>
                      <p>{layer.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>
            <h2>Ready to Transform Your Production?</h2>
            <p>Connect with our solutions architecture team to discuss your specific requirements.</p>
            <Link to="/contact" className={styles.ctaButton}>
              Consult an Architect
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
