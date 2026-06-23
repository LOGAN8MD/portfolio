import { BriefcaseBusiness } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Experience({ items }) {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Built around ownership, systems thinking, and measurable execution."
      />
      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.company}-${item.role}`} className="timeline-item">
            <div className="timeline-icon">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
