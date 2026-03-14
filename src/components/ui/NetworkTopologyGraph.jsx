import { useEffect, useRef } from 'react';

const ORBIT_NODES = [
  { id: 'n1', angle: 0,   label: 'React',   color: '#FF8C69' },
  { id: 'n2', angle: 120, label: 'Node',    color: '#9EFFBF' },
  { id: 'n3', angle: 240, label: 'Design',  color: '#F4D35E' },
];

export default function NetworkTopologyGraph() {
  const cx = 225, cy = 225, r = 140;

  const nodePos = (angle) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });

  return (
    <div style={{
      width: '100%',
      maxWidth: '450px',
      border: '1px solid var(--border)',
      aspectRatio: '1',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <svg
        viewBox="0 0 450 450"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dashed orbit path */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="var(--forest)"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.35"
        />

        {/* Connection lines from center to orbit nodes */}
        {ORBIT_NODES.map(({ id, angle, color }) => {
          const pos = nodePos(angle);
          return (
            <line
              key={`line-${id}`}
              x1={cx} y1={cy}
              x2={pos.x} y2={pos.y}
              stroke="var(--forest)"
              strokeWidth="1"
              opacity="0.2"
            />
          );
        })}

        {/* Rotating group */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: 'orbit 20s linear infinite' }}>
          {ORBIT_NODES.map(({ id, angle, label, color }) => {
            const pos = nodePos(angle);
            return (
              <g key={id}>
                {/* Counter-rotate label to keep it upright */}
                <g style={{ transformOrigin: `${pos.x}px ${pos.y}px`, animation: 'orbit-reverse 20s linear infinite' }}>
                  <rect
                    x={pos.x - 28} y={pos.y - 12}
                    width="56" height="24"
                    fill={color}
                    rx="0"
                  />
                  <text
                    x={pos.x} y={pos.y + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="9"
                    fontWeight="600"
                    fill="var(--forest)"
                    letterSpacing="0.08em"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {label}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        {/* Central node */}
        <rect x={cx - 10} y={cy - 10} width="20" height="20" fill="var(--forest)" />
        <rect x={cx - 4} y={cy - 4} width="8" height="8" fill="var(--paper)" />

        {/* Corner tick marks */}
        {[[20, 20], [430, 20], [20, 430], [430, 430]].map(([x, y], i) => (
          <text key={i} x={x} y={y}
            fontFamily="var(--font-mono)" fontSize="8" fill="var(--forest)"
            opacity="0.25" textAnchor="middle">+</text>
        ))}

        {/* Label */}
        <text x={cx} y={430}
          fontFamily="var(--font-mono)" fontSize="9"
          fill="var(--forest)" opacity="0.4"
          textAnchor="middle" letterSpacing="0.12em">
          DESIGN SYSTEM NETWORK v1.0
        </text>
      </svg>
    </div>
  );
}
