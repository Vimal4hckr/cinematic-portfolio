import React, { useEffect, useRef, useState } from 'react';
import { Clap } from './Clap';
import { portfolioData } from '../data/portfolio';
import { playClapSound } from '../utils/sound';

const SECTION_IDS = ['#top', '#work', '#story', '#films', '#contact'];

export const Nav: React.FC = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const isClappingRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.querySelector(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) {
              setSceneIndex(idx);
            }
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleBrandClick = () => {
    if (isClappingRef.current) return;
    isClappingRef.current = true;
    playClapSound();

    const clapSvg = navRef.current?.querySelector('.clap');
    if (clapSvg) {
      clapSvg.classList.add('clapping');
      setTimeout(() => {
        clapSvg.classList.remove('clapping');
        isClappingRef.current = false;
      }, 500);
    } else {
      isClappingRef.current = false;
    }
  };

  const rawScene = portfolioData.nav.scenes[sceneIndex] || portfolioData.nav.scenes[0];
  const [sceneCode, sceneTitle] = rawScene.split(' · ');

  return (
    <nav ref={navRef}>
      <a
        className="brand"
        href="#top"
        onClick={handleBrandClick}
        aria-label="Balaji L., back to the top"
      >
        <span className="brand-mark">
          <Clap id="nav" />
        </span>
        <span className="slate label" aria-live="polite">
          <span className="slate-roll" key={sceneIndex}>
            <b>{sceneCode}</b>
            <span className="slate-t"> · {sceneTitle}</span>
          </span>
        </span>
      </a>

      <div className="navlinks label">
        <a href="#work">Work</a>
        <a href="#story">Story</a>
        <a href="#films">Films</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
