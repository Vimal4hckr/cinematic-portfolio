import React, { useEffect, useRef } from 'react';

const HOVER_TARGETS: Array<[string, string]> = [
  ['.intro', 'Roll'],
  ['.reel button, .post-play, a.thumb:not(.post)', 'Play'],
  ['.card', 'Open'],
  ['a[download]', 'Save ↓'],
  ['a[target=_blank]', 'Visit ↗'],
];

export const CursorAndTorch: React.FC = () => {
  const torchRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches
    ) {
      return;
    }

    const torch = torchRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!torch || !ring || !label) return;

    document.documentElement.classList.add('has-cursor');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let torchX = targetX;
    let torchY = targetY;
    let ringX = targetX;
    let ringY = targetY;
    let rafId = 0;
    let isMoving = false;

    const tick = () => {
      torchX += (targetX - torchX) * 0.08;
      torchY += (targetY - torchY) * 0.08;
      ringX += (targetX - ringX) * 0.22;
      ringY += (targetY - ringY) * 0.22;

      torch.style.transform = `translate(${torchX}px, ${torchY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      if (Math.abs(targetX - torchX) + Math.abs(targetY - torchY) > 0.25) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        targetX = e.clientX;
        targetY = e.clientY;

        if (!isMoving) {
          isMoving = true;
          torchX = ringX = targetX;
          torchY = ringY = targetY;
          torch.classList.add('on');
          ring.classList.add('on');
        }

        if (!rafId) {
          rafId = requestAnimationFrame(tick);
        }
      }
    };

    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const match = HOVER_TARGETS.find(([sel]) => target.closest(sel));
      if (match) {
        label.textContent = match[1];
        ring.dataset.state = 'label';
      } else if (target.closest('a, button, [role=button], textarea, input, select')) {
        ring.dataset.state = 'hover';
      } else {
        delete ring.dataset.state;
      }
    };

    const handlePointerDown = () => ring.classList.add('down');
    const handlePointerUp = () => ring.classList.remove('down');
    const handleMouseLeave = () => {
      isMoving = false;
      torch.classList.remove('on');
      ring.classList.remove('on');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.documentElement.addEventListener('pointerleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('pointerleave', handleMouseLeave);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div ref={torchRef} className="torch" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} />
      </div>
    </>
  );
};
