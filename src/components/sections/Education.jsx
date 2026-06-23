import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Education({ education, achievements }) {
  return (
    <section className="section-shell education-section">
      <SectionHeader eyebrow="Credentials" title="Education, certifications, and highlights." />
      <div className="credential-grid">
        <div className="credential-column">
          <h3>
            <GraduationCap size={20} />
            Education
          </h3>
          {education.map((item) => (
            <article key={`${item.degree}-${item.institution}`}>
              <strong>{item.degree}</strong>
              <span>{item.institution}</span>
              <small>{item.period}</small>
            </article>
          ))}
        </div>
        <div className="credential-column">
          <h3>
            <Award size={20} />
            Achievements
          </h3>
          {achievements.map((achievement) => (
            <article key={achievement.title}>
              <a className="credential-link" href={achievement.href} target="_blank" rel="noreferrer">
                <span>
                  <strong>{achievement.title}</strong>
                  {achievement.period && <small>{achievement.period}</small>}
                </span>
                <ExternalLink size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
