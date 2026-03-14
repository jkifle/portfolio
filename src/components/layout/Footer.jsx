import { useState } from 'react';
import { PERSONAL } from '../../data/resume';

function LogoPlaceholder() {
  return (
    <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" fill="white" />
        <rect x="9" y="9" width="5" height="5" fill="white" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      position: 'relative', zIndex: 1, backgroundColor: 'var(--paper)',
    }}>
      <div className="section-inner-pad footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

          {/* Logo with placeholder fallback */}
          <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, opacity: logoLoaded ? 0 : 1, transition: 'opacity 0.2s linear' }}>
              <LogoPlaceholder />
            </div>
            <img
              src="/images/logo.png"
              alt="Joseph Kifle logo"
              onLoad={() => setLogoLoaded(true)}
              onError={() => setLogoLoaded(false)}
              style={{
                position: 'absolute', inset: 0,
                width: '24px', height: '24px',
                objectFit: 'contain',
                opacity: logoLoaded ? 1 : 0,
                transition: 'opacity 0.2s linear',
              }}
            />
          </div>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', opacity: 0.5 }}>
            © {year} {PERSONAL.name}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub',   href: PERSONAL.github },
            { label: 'LinkedIn', href: PERSONAL.linkedin },
            { label: 'Email',    href: `mailto:${PERSONAL.email}` },
          ].map(link => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--forest)', opacity: 0.45, transition: 'opacity 0.15s' }}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.45}
            >{link.label}</a>
          ))}
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.4, letterSpacing: '0.08em' }}>
          Built with React + Vite
        </span>
      </div>
    </footer>
  );
}