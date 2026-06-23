import { Code2, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader.jsx';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export function Contact({ data }) {
  return (
    <section id="contact" className="section-shell contact-section">
      <SectionHeader
        eyebrow="Contact"
        title="Ready to build intelligent products and scalable systems."
        description="Use the links below to connect, collaborate, or discuss opportunities."
      />
      <div className="contact-grid">
        <a href={`mailto:${data.email}`} className="contact-tile">
          <Mail size={20} />
          <span>{data.email}</span>
        </a>
        <a href={`tel:${data.phone}`} className="contact-tile">
          <Phone size={20} />
          <span>{data.phone}</span>
        </a>
        <div className="contact-tile">
          <MapPin size={20} />
          <span>{data.location}</span>
        </div>
        {data.links.map((link) => {
          const Icon = iconMap[link.label] || Code2;
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-tile">
              <Icon size={20} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
