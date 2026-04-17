import './IndustriesPage.css';
export default function IndustriesPage() {
  const industries = [
    'Aerospace', 'Agriculture', 'Automotive', 'Chemical', 'Defence Technology',
    'Education', 'Energy & Utilities', 'Entertainment and Media', 'Finance',
    'Food Technology', 'Healthcare', 'Infrastructure', 'Logistics', 'Manufacturing',
    'Ocean Technology', 'Oil and Gas', 'Pharmaceutical', 'Retail', 'Sports',
    'Technology', 'Telecommunication', 'Textile', 'Transportation', 'Travel'
  ];

  return (
    <div className="page-wrapper">
      <section className="section bg-dark">
        <div className="container section-heading">
          <span className="section-label">Industries</span>
          <h1>Industry Expertise Across 24 Sectors</h1>
          <p className="copy-large">Our technology products and services are designed to support innovation across a broad range of markets and global business segments.</p>
        </div>
        <div className="container">
          <div className="grid-responsive industries-grid">
            {industries.map((industry) => (
              <article key={industry} className="card industry-card">
                <div className="accent-dot" />
                <h3>{industry}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="section-label">Custom Solutions</span>
          <h2>Tailored for Your Sector</h2>
          <p>Don't see your industry? We specialize in custom R&D and engineering for niche markets.</p>
          <a href="/services#contact" className="btn btn-primary" style={{marginTop: '2rem'}}>Request Consultation</a>
        </div>
      </section>
    </div>
  );
}

