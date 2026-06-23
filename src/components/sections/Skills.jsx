import { SectionHeader } from '../ui/SectionHeader.jsx';
import { SkillBadge } from '../ui/SkillBadge.jsx';

export function Skills({ groups }) {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Technical Arsenal"
        title="A modern stack for scalable full-stack products."
        description="Grouped capabilities for building, integrating, and shipping intelligent applications."
      />
      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
