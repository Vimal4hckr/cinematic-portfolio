import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="wrap label">
      <span>{portfolioData.footer.left}</span>
      <span>{portfolioData.footer.right}</span>
    </footer>
  );
};
