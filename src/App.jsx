import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import IndustriesPage from './pages/IndustriesPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
 

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
