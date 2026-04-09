import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import FAQ from '../components/FAQ.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <FAQ />
    </>
  );
}
