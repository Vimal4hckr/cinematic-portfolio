import React, { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll interpolation for morph effect if supported
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const scrollDist = -rect.top;
      const totalDist = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, totalDist > 0 ? scrollDist / totalDist : 0));
      hero.style.setProperty('--p', progress.toFixed(3));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayReel = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback or muted play
      });
    }
  };

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="hero-sticky">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="bill eyebrow">
              Filmmaker · <em>Director</em>
              <wbr />
            </div>

            <h1 className="bill">
              <span className="ln">Balaji</span>
              <span className="ln out">L.</span>
            </h1>

            <p className="lead">{portfolioData.hero.lead}</p>
            <p>{portfolioData.hero.intro}</p>
          </div>

          <div className="hero-slot">
            <img
              src="/images/balaji-portrait.png"
              alt="Balaji L. filmmaker portrait"
              width="1086"
              height="1448"
              loading="eager"
            />
          </div>
        </div>

        <div className="morph wrap">
          <div className="reel">
            <video
              ref={videoRef}
              poster="/images/hero-poster.png"
              preload="metadata"
              playsInline
              controls={isPlaying}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            <button
              type="button"
              aria-label="Play showreel with sound"
              hidden={isPlaying}
              onClick={handlePlayReel}
            >
              <span className="go">
                <span className="disc" aria-hidden="true" />
                <span>
                  {portfolioData.showreel.title}
                  <small>{portfolioData.showreel.meta}</small>
                </span>
              </span>
              <span className="label" style={{ color: '#d9d7d1' }}>
                {portfolioData.showreel.slate}
              </span>
            </button>
          </div>

          <img
            className="morph-portrait"
            src="/images/balaji-portrait.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
};
