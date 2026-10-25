import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Films: React.FC = () => {
  return (
    <section className="wrap" id="films">
      <div className="head rv">
        <h2 className="bill">{portfolioData.films.heading}</h2>
        <span className="label">{portfolioData.films.label}</span>
      </div>

      <div className="films">
        {/* Big feature showcase */}
        <div className="rv">
          <a
            className="thumb big"
            href={portfolioData.films.feature.href}
            aria-label={`${portfolioData.films.feature.title} - ${portfolioData.films.feature.note}`}
          >
            <span className="shot">
              <img
                src={portfolioData.films.feature.img}
                alt={portfolioData.films.feature.title}
                loading="lazy"
              />
              <span className="play" aria-hidden="true" />
            </span>
            <span className="tt">
              {portfolioData.films.feature.title}
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
              <span className="sr"> (view details)</span>
            </span>
            <span className="label note">
              {portfolioData.films.feature.note}
            </span>
          </a>
        </div>

        {/* Grid of film titles, vertical series, and ads */}
        <div className="thumbs shorts-grid rv">
          {portfolioData.films.shorts.map((film, idx) => (
            <a
              key={idx}
              className="thumb"
              href={film.href}
              target={film.href.startsWith('http') ? '_blank' : undefined}
              rel={film.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="shot">
                <img src={film.img} alt={film.title} loading="lazy" />
                <span className="play" aria-hidden="true" />
              </span>
              <span className="tt">
                {film.title}
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
              </span>
              <span className="label note">{film.note}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
