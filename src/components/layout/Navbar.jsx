import { Cpu, Menu } from 'lucide-react';

export function Navbar({ links }) {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Portfolio home">
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
      <button className="icon-button menu-button" aria-label="Open navigation">
        <Menu size={20} />
      </button>
    </header>
  );
}
