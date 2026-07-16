import { useEffect, useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink, X } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { SkillBadge } from '../ui/SkillBadge.jsx';

export function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const activeImage = selectedProject?.images?.[activeImageIndex];

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects with a bias toward intelligence, scale, and clean UX."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.title}
            className="project-card"
            type="button"
            onClick={() => openProject(project)}
          >
            {project.image && (
              <div className="project-card-media">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
            )}
            <div className="project-card-top">
              <span>{project.category}</span>
              <ArrowUpRight size={20} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <SkillBadge key={tech}>{tech}</SkillBadge>
              ))}
            </div>
            <strong>{project.impact}</strong>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={closeProject}
        >
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="project-modal-header">
              <div>
                <span className="eyebrow">{selectedProject.category}</span>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
              </div>
              <button
                className="icon-button"
                type="button"
                aria-label="Close project details"
                onClick={closeProject}
              >
                <X size={20} />
              </button>
            </div>

            <p className="project-modal-summary">{selectedProject.fullDescription}</p>

            {selectedProject.images?.length > 0 && activeImage && (
              <div
                className={`project-gallery ${
                  selectedProject.galleryAspect === 'portrait' ? 'is-portrait' : 'is-landscape'
                }`}
                aria-label={`${selectedProject.title} screenshots`}
              >
                <div className="project-gallery-toolbar">
                  <span>
                    Screen {activeImageIndex + 1} of {selectedProject.images.length}
                  </span>
                </div>
                <figure className="project-gallery-feature" key={activeImage.src}>
                  <img src={activeImage.src} alt={activeImage.alt} />
                  <figcaption>{activeImage.caption}</figcaption>
                </figure>
                <div className="project-gallery-strip" role="tablist" aria-label="Project screenshots">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={image.src}
                      className={`project-gallery-thumb ${index === activeImageIndex ? 'is-active' : ''}`}
                      type="button"
                      role="tab"
                      aria-selected={index === activeImageIndex}
                      aria-label={`Show screenshot ${index + 1}: ${image.caption}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img src={image.src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-grid">
              <div>
                <h4>Key Responsibilities</h4>
                <ul>
                  {selectedProject.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Technology Stack</h4>
                <div className="project-stack modal-stack">
                  {selectedProject.stack.map((tech) => (
                    <SkillBadge key={tech}>{tech}</SkillBadge>
                  ))}
                </div>
                <h4>Outcome</h4>
                <p>{selectedProject.impact}</p>
              </div>
            </div>

            <div className="project-modal-actions">
              {selectedProject.githubLinks?.map((link) => (
                <a key={link.href} className="button primary" href={link.href} target="_blank" rel="noreferrer">
                  <Code2 size={18} />
                  {link.label}
                </a>
              ))}
              {selectedProject.liveLinks?.map((link) => (
                <a key={link.href} className="button ghost" href={link.href} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
