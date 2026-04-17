import './About.css';
import styles from './About.module.css';

const aboutItems = [
  {
    title: 'About Us',
    body: 'Techbrain Networks Manufacturing is dedicated to shaping the future of production. With expertise in smart manufacturing systems, predictive maintenance, and supply chain solutions, we drive efficiency and innovation in manufacturing processes.',
  },
  {
    title: 'How We Work',
    body: 'Our approach to manufacturing involves a comprehensive understanding of industry needs. We collaborate closely with manufacturers to develop solutions that optimize processes, enhance quality, and drive overall efficiency.',
    note: '4K background prompt: Collaborative industrial environment, engineers and manufacturers working together, smart factory planning, digital dashboards, innovation process visualization.',
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-light">
      <div className="container section-heading">
        <span className="section-label">About Techbrain Networks</span>
        <h2>Smart Manufacturing Innovation Built for Modern Production</h2>
      </div>
      <div className={`grid-2 ${styles.grid}`}>
        {aboutItems.map((item) => (
          <article key={item.title} className={`card ${styles.card}`}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.note && <p className={styles.note}>{item.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

