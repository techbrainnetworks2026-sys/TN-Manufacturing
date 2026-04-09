export default function AboutPage() {
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
          <span className="section-label">About Us</span>
          <h1>Designing the Future of Industrial Intelligence</h1>
          <p className="copy-large">Techbrain Networks is a global leader in software product development, specializing in AI, IoT, Big Data, and Quantum Computing for the manufacturing sector.</p>
        </div>
        <div className="container">
          <div className="grid-2">
            <article className="card card-dark">
              <div className="accent-orb" />
              <h3>Vision</h3>
              <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth on a global scale.</p>
            </article>
            <article className="card card-dark">
              <div className="accent-orb" />
              <h3>Mission</h3>
              <p>We are dedicated to empowering businesses globally with cutting-edge technology solutions that drive innovation and efficiency. Our commitment is to deliver reliable, scalable, and secure products across diverse industries.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="section-label">Our Impact</span>
          <h2>Global Reach, Local Impact</h2>
        </div>
        <div className="container">
          <div className="grid-responsive">
            <article className="card">
              <h3 className="stat-number">480+</h3>
              <p className="stat-label">Innovative products spanning 24 industries.</p>
            </article>
            <article className="card">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Countries reached with transformative solutions.</p>
            </article>
            <article className="card">
              <h3 className="stat-number">2026</h3>
              <p className="stat-label">Setting new standards in industrial technology.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="grid-2">
            <div className="card card-dark">
              <span className="section-label">Founder</span>
              <h3>Ramkumar Arunachalam</h3>
              <p>Leading Techbrain Networks with a vision for product innovation, global research, and industrial excellence.</p>
            </div>
            <div className="card card-dark">
              <span className="section-label">Passion</span>
              <p>Our relentless pursuit of research and development fuels our desire to create elegant solutions for complex challenges. We push the boundaries of what's possible to inspire the future of technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="section-label">Industries</span>
          <h2>Deep Expertise</h2>
        </div>
        <div className="container">
          <ul className="industry-list">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
