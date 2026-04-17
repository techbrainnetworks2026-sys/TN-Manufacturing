import './Services.css';
const services = [
  {
    title: 'Software Development',
    description: 'Custom industrial applications, analytics platforms, and operator interfaces designed for manufacturing scale.',
    prompt: '4K prompt: Developers building industrial applications, coding environment.',
  },
  {
    title: 'Hardware Engineering',
    description: 'Embedded systems design, IoT device development, and electronics engineering for smart production systems.',
    prompt: '4K prompt: Embedded systems, electronics lab, industrial hardware.',
  },
  {
    title: 'Product Design',
    description: 'Industrial design, CAD modeling, and UX planning that bring manufacturing products to market faster.',
    prompt: '4K prompt: CAD modeling, industrial product design workspace.',
  },
  {
    title: 'Research & Development',
    description: 'Innovation labs, robotics testing, and AI research focused on next-gen manufacturing breakthroughs.',
    prompt: '4K prompt: Futuristic innovation lab, robotics testing, AI research.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-dark">
      <div className="container section-heading">
        <span className="section-label">Services</span>
        <h2>Engineering Services for Industrial Transformation</h2>
      </div>
      <div className="container">
        <div className="grid-responsive">
          {services.map((service) => (
            <article key={service.title} className="card card-dark">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="mini-prompt">{service.prompt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

