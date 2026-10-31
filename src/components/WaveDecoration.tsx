import React from 'react';
import { cn } from '@/lib/utils';

interface WaveDecorationProps {
  className?: string;
  lines?: number;
  flip?: boolean;
}

// Fine line-wave ribbon in the spirit of the deck's corner decorations. The paths are computed from a
// formula (no artwork files) and are deterministic, so server and client render identical markup.
const buildPaths = (lines: number) =>
  Array.from({ length: lines }, (_, i) => {
    const t = i / Math.max(lines - 1, 1);
    const y = 30 + i * 15;
    return `M -40 ${y + 110 * t} C 150 ${y - 150 + 100 * t}, 330 ${y + 230 - 170 * t}, 700 ${y - 60 + 70 * t}`;
  });

const WaveDecoration: React.FC<WaveDecorationProps> = ({ className, lines = 14, flip = false }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 640 420"
    fill="none"
    className={cn('pointer-events-none absolute select-none', flip && '-scale-x-100', className)}
  >
    {buildPaths(lines).map((d, i) => (
      <path key={i} d={d} stroke="currentColor" strokeWidth={1.1} strokeOpacity={0.45 + (i % 3) * 0.1} />
    ))}
  </svg>
);

export default WaveDecoration;
