import React, { useRef, useState, useEffect } from 'react';
import { portfolioData, ProjectStory } from '../data/portfolio';

export function formatBig(text: string): React.ReactNode {
  const parts = text.split(/(\{.*?\})/);
  return parts.map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      return <i key={index}>{part.slice(1, -1)}</i>;
    }
    return part;
  });
}

export const Work: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectStory | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeProject) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [activeProject]);

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <section className="wrap" id="work">
      <div className="head rv">
        <h2 className="bill">{portfolioData.work.heading}</h2>
        <span className="label">{portfolioData.work.label}</span>
      </div>

      <div className="cards">
        {portfolioData.work.projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="card rv"
            aria-haspopup="dialog"
            style={
              {
                '--brand': project.brand[0],
                '--brand2': project.brand[1],
              } as React.CSSProperties
            }
            onClick={() => setActiveProject(project)}
          >
            <img className="logo" src={project.logo} alt={project.name} />
            <span className="details">
              <span className="label meta">{project.meta}</span>
              <span className="bill name">{project.name}</span>
              <span className="hook">{project.hook}</span>
              <span className="foot">
                <span className="big">{formatBig(project.big)}</span>
                <span className="cap">{project.bigCaption}</span>
              </span>
              <span className="more label">
                {portfolioData.work.readMore}{' '}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* The numbers tally section */}
      <div className="tally rv">
        <span className="label">{portfolioData.work.numbersLabel}</span>
        <div className="stats">
          {portfolioData.work.stats.map((stat, i) => (
            <div key={i} className="stat">
              <div className="n">{formatBig(stat.n)}</div>
              <p>{stat.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story dialog modal */}
      <dialog
        ref={dialogRef}
        className="story"
        aria-labelledby="story-title"
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            handleClose();
          }
        }}
      >
        {activeProject && (
          <article
            style={
              {
                '--brand': activeProject.brand[0],
                '--brand2': activeProject.brand[1],
              } as React.CSSProperties
            }
          >
            <header>
              <div>
                <img
                  className="story-logo"
                  src={activeProject.logo}
                  alt={activeProject.name}
                />
                <span className="label">{activeProject.meta}</span>
                <h3 className="bill" id="story-title">
                  {activeProject.name}
                </h3>
              </div>
              <button
                type="button"
                className="x"
                onClick={handleClose}
                aria-label="Close"
              >
                ×
              </button>
            </header>

            <div className="headline">
              <span className="big">{formatBig(activeProject.big)}</span>
              <span className="cap">{activeProject.bigCaption}</span>
            </div>

            <h4 className="label">{portfolioData.work.situation}</h4>
            <p>{activeProject.brief}</p>

            <h4 className="label">{portfolioData.work.did}</h4>
            <div className="made">
              {activeProject.did.map((item, i) => (
                <div key={i}>
                  <b>{item.title}</b>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>

            <h4 className="label">{portfolioData.work.result}</h4>
            <p className="outcome">{activeProject.result}</p>

            <div className="credits label">
              {activeProject.credits.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>

            {activeProject.link && (
              <div style={{ marginTop: '22px' }}>
                <a
                  className="cta label"
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {activeProject.linkLabel || 'Watch on Instagram'}
                  <svg
                    className="ext"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 3h7v7M13 3 4 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <span className="sr"> (opens in a new tab)</span>
                </a>
              </div>
            )}
          </article>
        )}
      </dialog>
    </section>
  );
};
