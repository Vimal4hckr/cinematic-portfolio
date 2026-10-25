import React, { useEffect, useRef } from 'react';

export const GrainCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let resizeTimer: NodeJS.Timeout;

    const renderGrain = () => {
      const width = Math.ceil(window.innerWidth / 2);
      const height = Math.ceil(window.innerHeight / 2);
      if (!width || !height) return;

      canvas.width = width;
      canvas.height = height;

      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const val = (Math.random() * 255) | 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 255;
      }

      ctx.putImageData(imgData, 0, 0);
    };

    renderGrain();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderGrain, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <canvas id="grain" ref={canvasRef} aria-hidden="true" />;
};
