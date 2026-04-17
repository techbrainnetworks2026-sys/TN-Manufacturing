import './Header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { to: '/', label: 'Home', route: true },
  { to: '/about', label: 'About', route: true },
  { to: '/manufacturing', label: 'Manufacturing', route: true },
  { to: '/services', label: 'Services', route: true },
  { to: '/products', label: 'Products', route: true },
  { to: '/industries', label: 'Industries', route: true },
  { to: '/careers', label: 'Careers', route: true },
  { to: '/contact', label: 'Contact ', route: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink className={styles.brand} to="/">
          <span className={styles.brandMark}>TB</span>
          <span>Techbrain Networks Manufacturing</span>
        </NavLink>
        <button
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            item.route ? (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ) : (
              <a key={item.to} href={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}

