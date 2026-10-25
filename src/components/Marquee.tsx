import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Marquee: React.FC = () => {
  return (
    <div className="marquee" aria-label="Crafts">
      <div className="track">
        {portfolioData.crafts.map((craft, i) => (
          <span key={`craft-1-${i}`}>{craft}</span>
        ))}
        {portfolioData.crafts.map((craft, i) => (
          <span key={`craft-2-${i}`} aria-hidden="true">
            {craft}
          </span>
        ))}
      </div>
    </div>
  );
};
