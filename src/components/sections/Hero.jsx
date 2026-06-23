import { ArrowDownRight, Download, Sparkles } from 'lucide-react';
import { StatCard } from '../ui/StatCard.jsx';

export function Hero({ data }) {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <span className="hero-kicker">
          <Sparkles size={16} />
          Next-generation software engineering
        </span>
        <h1>{data.name}</h1>
        <p className="hero-role">{data.role}</p>
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
            <ArrowDownRight size={18} />
          </a>
          <a className="button ghost" href="#contact">
            Contact
          </a>
          <a
            className="button icon-text"
            href="https://flowcv.com/resume/ke2p41rqp3ic"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
        <div className="hero-metrics">
          {data.metrics.map((metric) => (
            <StatCard key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbital-grid">
          <span />
          <span />
          <span />
          <div className="core-node">AI</div>
        </div>
        <div className="signal-card signal-card-one">
          <strong>LLM</strong>
          <span>Agentic workflows</span>
        </div>
        <div className="signal-card signal-card-two">
          <strong>API</strong>
          <span>Production systems</span>
        </div>
      </div>
    </section>
  );
}
