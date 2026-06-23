import { BrainCircuit, CheckCircle2 } from 'lucide-react';
import { GlassPanel } from '../ui/GlassPanel.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function About({ data }) {
  return (
    <section id="summary" className="section-shell split-section">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} />
      <GlassPanel className="about-panel">
        <BrainCircuit className="panel-icon" size={30} />
        <p>{data.body}</p>
        <div className="strength-grid">
          {data.strengths.map((strength) => (
            <div key={strength} className="strength-item">
              <CheckCircle2 size={18} />
              <span>{strength}</span>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}
