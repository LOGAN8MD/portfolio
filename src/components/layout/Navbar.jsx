import { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Portfolio home" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">
          <Cpu size={18} />
        </span>
        <span>Deepak.dev</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="icon-button menu-button"
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
