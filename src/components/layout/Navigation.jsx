import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { index: '01', label: 'About',   href: '#about' },
  { index: '02', label: 'Work',    href: '#work' },
  { index: '03', label: 'Skills',  href: '#skills' },
  { index: '04', label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '56px', display: 'flex', alignItems: 'center',
      paddingLeft: '24px', paddingRight: '24px',
      backgroundColor: scrolled ? 'rgba(247,247,245,0.96)' : 'transparent',
      borderBottom: '1px solid rgba(58,58,56,0.2)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      transition: 'background 0.2s linear',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" fill="white" />
            <rect x="9" y="2" width="5" height="5" fill="white" opacity="0.5" />
            <rect x="2" y="9" width="5" height="5" fill="white" opacity="0.5" />
            <rect x="9" y="9" width="5" height="5" fill="white" />
          </svg>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forest)' }}>
          Joseph Kifle
        </span>
      </a>

      {/* Center nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', margin: '0 auto' }}>
        {NAV_LINKS.map(({ index, label, href }) => (
          <a key={index} href={href} style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--forest)', textDecoration: 'none',
            opacity: 0.65, transition: 'opacity 0.15s linear',
          }}
          onMouseEnter={e => e.target.style.opacity = 1}
          onMouseLeave={e => e.target.style.opacity = 0.65}
          >
            <span style={{ opacity: 0.45 }}>{index}.&nbsp;</span>{label}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
        <a href="https://linkedin.com/in/josephkifle" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: '6px 14px', fontSize: '10px' }}>
          LinkedIn ↗
        </a>
        <a href="https://github.com/jkifle" target="_blank" rel="noreferrer" className="btn-solid" style={{ padding: '6px 14px', fontSize: '10px' }}>
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
