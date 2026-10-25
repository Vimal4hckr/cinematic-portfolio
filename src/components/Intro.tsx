import React, { useRef, useState, useEffect } from 'react';
import { Clap } from './Clap';
import { portfolioData } from '../data/portfolio';
import { playClapSound } from '../utils/sound';

interface IntroProps {
  onRollComplete?: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onRollComplete }) => {
  const [isOpen, setIsOpen] = useState(true);
  const markRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isRollingRef = useRef(false);

  useEffect(() => {
    document.documentElement.classList.add('js');
    return () => {
      document.documentElement.classList.remove('js');
    };
  }, []);

  const handleRoll = () => {
    if (isRollingRef.current) return;
    isRollingRef.current = true;

    // 1. Play clapper sound
    playClapSound();

    const btn = buttonRef.current;
    const mark = markRef.current;
    if (!btn || !mark) {
      document.documentElement.classList.add('booted', 'landed');
      setIsOpen(false);
      onRollComplete?.();
      return;
    }

    // 2. Shut the arm and jolt
    const clapSvg = mark.querySelector('.clap');
    if (clapSvg) {
      clapSvg.classList.remove('open');
      clapSvg.classList.add('shut');
    }
    btn.classList.add('rolled');

    // 3. Trigger FLIP animation into navbar brand mark
    setTimeout(() => {
      document.documentElement.classList.add('booted');

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const navMark = document.querySelector('#nav');

      if (prefersReducedMotion || !navMark) {
        btn.classList.add('fade');
        setTimeout(() => {
          document.documentElement.classList.add('landed');
          setIsOpen(false);
          onRollComplete?.();
        }, 350);
        return;
      }

      const markRect = mark.getBoundingClientRect();
      const navRect = navMark.getBoundingClientRect();
      const scale = navRect.width / markRect.width;

      mark.style.transition = 'transform 700ms cubic-bezier(0.7, 0, 0.18, 1)';
      mark.style.transform = `translate(${navRect.left - markRect.left}px, ${navRect.top - markRect.top}px) scale(${scale})`;

      btn.classList.add('flying');

      setTimeout(() => {
        document.documentElement.classList.add('landed');
        setIsOpen(false);
        onRollComplete?.();
      }, 700);
    }, 380);
  };

  if (!isOpen) return null;

  return (
    <button
      ref={buttonRef}
      type="button"
      className="intro"
      onClick={handleRoll}
      aria-label={`${portfolioData.intro.title}. ${portfolioData.intro.hint}`}
    >
      <span className="intro-stage">
        <span ref={markRef} className="intro-mark">
          <Clap id="intro" className="open" />
        </span>
        <span className="intro-title bill">{portfolioData.intro.title}</span>
        <span className="intro-hint label">{portfolioData.intro.hint}</span>
      </span>
    </button>
  );
};
