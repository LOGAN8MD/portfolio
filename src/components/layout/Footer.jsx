export function Footer({ name, links }) {
  return (
    <footer className="footer">
      <p>{name} - Full Stack Developer / MERN Stack Developer</p>
      <div>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
