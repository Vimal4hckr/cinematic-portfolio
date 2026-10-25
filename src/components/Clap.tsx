import React from 'react';

interface ClapProps {
  className?: string;
  id?: string;
}

export const Clap: React.FC<ClapProps> = ({ className = '', id = 'clap' }) => {
  const armclipId = `armclip-${id}`;

  return (
    <svg
      className={`clap ${className}`}
      viewBox="0 0 40 36"
      aria-hidden="true"
      id={id}
    >
      <defs>
        <clipPath id={armclipId}>
          <rect x="2" y="5" width="36" height="7" rx="1" />
        </clipPath>
        <clipPath id={`${armclipId}-bar`}>
          <rect x="2" y="13" width="36" height="4.5" />
        </clipPath>
      </defs>

      {/* Clapperboard Slate Body */}
      <rect
        x="2.5"
        y="13.5"
        width="35"
        height="20"
        rx="1.5"
        fill="#0c0c0d"
        stroke="#ecebe7"
        strokeWidth="1"
      />

      {/* Top stripes bar on slate body */}
      <g clipPath={`url(#${armclipId}-bar)`}>
        <rect x="2" y="13" width="36" height="4.5" fill="#ecebe7" />
        <path
          d="M8 13l-4 4.5M16 13l-4 4.5M24 13l-4 4.5M32 13l-4 4.5M40 13l-4 4.5"
          stroke="#0c0c0d"
          strokeWidth="2.4"
        />
      </g>

      {/* Center Filmmaker Monogram */}
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fill="#ecebe7"
        fontSize="5.2"
        fontWeight="800"
        letterSpacing="0.08em"
        style={{ fontFamily: 'var(--f)' }}
      >
        BALAJI L.
      </text>

      {/* Movable Clapper Arm */}
      <g className="arm">
        <g clipPath={`url(#${armclipId})`}>
          <rect x="2" y="5" width="36" height="7" fill="#0c0c0d" />
          <path
            d="M6 12l5-7M14 12l5-7M22 12l5-7M30 12l5-7M38 12l5-7"
            stroke="#ecebe7"
            strokeWidth="2.6"
          />
        </g>
        <rect
          x="2"
          y="5"
          width="36"
          height="7"
          rx="1"
          fill="none"
          stroke="#ecebe7"
          strokeWidth="1"
        />
        {/* Red hinge pin */}
        <circle cx="3.5" cy="11" r="1.6" fill="#d23a2e" />
      </g>
    </svg>
  );
};
