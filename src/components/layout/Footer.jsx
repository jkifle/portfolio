import { PERSONAL } from '../../data/resume';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '32px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backgroundColor: 'var(--paper)', position: 'relative', zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" fill="white" />
            <rect x="9" y="9" width="5" height="5" fill="white" />
          </svg>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', opacity: 0.5 }}>
          © {year} {PERSONAL.name} — All rights reserved
        </span>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        {[
          { label: 'GitHub',   href: PERSONAL.github },
          { label: 'LinkedIn', href: PERSONAL.linkedin },
          { label: 'Email',    href: `mailto:${PERSONAL.email}` },
        ].map(link => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', color: 'var(--forest)',
              opacity: 0.45, transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.45}
          >
            {link.label}
          </a>
        ))}
      </div>

      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.4, letterSpacing: '0.08em' }}>
        Built with React + Vite
      </span>
    </footer>
  );
}
