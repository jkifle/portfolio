import { useRef, useEffect } from 'react';
import { LEADERSHIP } from '../../data/resume';

// Duplicate items so the marquee loops seamlessly
const ITEMS = [...LEADERSHIP, ...LEADERSHIP];

const ACCENT_COLORS = [
  'var(--coral)',
  'var(--mint)',
  'var(--gold)',
  'var(--forest)',
  'var(--coral)',
  'var(--mint)',
];

export default function LeadershipCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let raf;
    const speed = 0.4; // px per frame — lower = slower

    const step = () => {
      offset += speed;
      // Reset when first half has scrolled fully out of view
      const halfWidth = track.scrollWidth / 2;
      if (offset >= halfWidth) offset = 0;
      track.style.transform = `translateX(-${offset}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(raf);
    const resume = () => { raf = requestAnimationFrame(step); };
    track.parentElement.addEventListener('mouseenter', pause);
    track.parentElement.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(raf);
      track.parentElement?.removeEventListener('mouseenter', pause);
      track.parentElement?.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'var(--paper)',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to right, var(--paper), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to left, var(--paper), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{
        position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 3, display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Scrolling track */}
      <div ref={trackRef} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        willChange: 'transform',
        width: 'max-content',
      }}>
        {ITEMS.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            borderRight: '1px solid var(--border)',
            padding: '16px 32px',
            flexShrink: 0,
            cursor: 'default',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(26,60,43,0.03)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {/* Color dot */}
            <div style={{
              width: '6px', height: '6px',
              backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
              marginRight: '12px',
              flexShrink: 0,
            }} />

            {/* Org name */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              color: 'var(--forest)',
              whiteSpace: 'nowrap',
              marginRight: '10px',
            }}>
              {item.org}
            </div>

            {/* Role pill */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            padding: '2px 8px',
            border: '1px solid var(--border)',
            color: 'var(--forest)'
            }}>
              {item.role.split(' ').slice(0, 2).join(' ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}