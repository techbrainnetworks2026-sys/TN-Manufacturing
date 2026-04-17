import './Products.css';
import { Link } from 'react-router-dom';
import { products } from '../data/products.js';

export default function Products() {
  return (
    <section id="products" className="section bg-light">
      <div className="container section-heading">
        <span className="section-label">Products</span>
        <h2>Comprehensive Manufacturing Solutions</h2>
      </div>
      <div className="container">
        <div className="grid-responsive">
          {products.map((product) => (
            <article key={product.id} className="card">
              <div className="card-image" style={{ position: 'relative' }}>
                <img src={product.image} alt={product.title} loading="lazy" />
                <div className="card-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <Link to={`/products/${product.id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    View Technical Details
                  </Link>
                </div>
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.features?.slice(0, 3).map((f, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      background: 'var(--glass-bg)', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px',
                      border: '1px solid var(--border)'
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/products/${product.id}`} 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '1.5rem', 
                    color: 'var(--accent)', 
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.9rem'
                  }}
                >
                  Explore Advanced Specs →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .card:hover .card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

