import React, { useEffect } from 'react';
import { Intro } from './components/Intro';
import { GrainCanvas } from './components/GrainCanvas';
import { CursorAndTorch } from './components/CursorAndTorch';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Work } from './components/Work';
import { Story } from './components/Story';
import { Films } from './components/Films';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

export default function App() {
  // Intersection Observer for .rv (reveal on scroll) animations
  useEffect(() => {
    // If JS is enabled, ensure html has the .js class
    document.documentElement.classList.add('js');

    const rvElements = document.querySelectorAll('.rv');
    if (!rvElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    rvElements.forEach((el) => observer.observe(el));

    // Also observe any elements that might get rendered dynamically
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('.rv:not(.in)').forEach((el) => {
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* 00. Clapperboard Intro Overlay */}
      <Intro />

      {/* 01. 35mm Film Grain Canvas */}
      <GrainCanvas />

      {/* 02. Interactive Red Radial Torch & Spring Cursor */}
      <CursorAndTorch />

      {/* 03. Fixed Slate Navigation Header */}
      <Nav />

      {/* 04. Hero Section with Typography & Showreel */}
      <Hero />

      {/* 05. Rolling Film Crafts Marquee */}
      <Marquee />

      {/* 06. The Work: Directorial & Assistant Direction Cards + Story Modal */}
      <Work />

      {/* 07. The Backstory: Beats from Engineering to Feature Films */}
      <Story />

      {/* 08. Films: Featured Showcase + Project Thumbnails */}
      <Films />

      {/* 09. Closing: That's a wrap + Contact & Inquiry Channels */}
      <Closing />

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
