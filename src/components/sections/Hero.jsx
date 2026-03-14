import { EDUCATION, PERSONAL } from '../../data/resume';
import StatusBadge from '../ui/StatusBadge';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', paddingTop: '80px',
      borderBottom: '1px solid var(--border)',
      position: 'relative', zIndex: 1,
    }}
    className="two-col">

      {/* ── Left column ─────────────────────────── */}
      <div style={{ borderRight: '1px solid var(--border)' }} className="section-pad">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>

          <div style={{ marginBottom: '32px', animation: 'fadeUp 0.5s ease-out forwards', opacity: 0 }}>
            <StatusBadge label="Open to Opportunities" />
          </div>

          {/* Name row — avatar inline on mobile, hidden on desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            {/* Avatar — visible only on mobile via CSS */}
            <div className="hero-avatar" style={{
              width: '56px', height: '56px', flexShrink: 0, position: 'relative',
              border: '1px solid var(--border)', overflow: 'hidden',
            }}>
              <img
                src="/images/headshot.JPG"
                alt="Joseph Kifle"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>

            <h1 className="text-hero" style={{ animation: 'fadeUp 0.6s 0.1s ease-out forwards', opacity: 0, margin: 0 }}>
              Joseph<br />
              <span style={{ color: 'var(--coral)' }}>Kifle</span>
            </h1>
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            opacity: 0.5, marginBottom: '32px',
            animation: 'fadeUp 0.6s 0.15s ease-out forwards',
          }}>
            Software Engineer &amp; Researcher · UTK CS &apos;28
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', animation: 'fadeUp 0.6s 0.2s ease-out forwards', opacity: 0 }}>
            <div style={{ width: '1px', backgroundColor: 'var(--forest)', opacity: 0.3, flexShrink: 0 }} />
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.75',
              letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.6, maxWidth: '360px',
            }}>
              {PERSONAL.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', animation: 'fadeUp 0.6s 0.3s ease-out forwards', opacity: 0 }}>
            <a href="#work" className="btn-solid">View My Work</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{
            display: 'flex', gap: '0', marginTop: '80px',
            borderTop: '1px solid var(--border)', paddingTop: '32px',
            animation: 'fadeUp 0.6s 0.4s ease-out forwards', opacity: 0,
          }}>
            {[
              { value: EDUCATION.gpa, label: 'GPA / 4.00' },
              { value: '4+',   label: 'Projects Shipped' },
              { value: '2×',   label: 'Deloitte Scholar' },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, paddingRight: '24px',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                marginRight: i < 2 ? '24px' : '0',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '700',
                  letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px', color: 'var(--forest)',
                }}>
                  {stat.value}
                </div>
                <div className="text-section-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right column — desktop only ─────────── */}
      <div className="section-pad hero-right-col" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', gap: '32px',
        animation: 'fadeIn 0.8s 0.3s ease-out forwards', opacity: 0,
      }}>

        {/* Headshot — full frame */}
        <div style={{ width: '100%', maxWidth: '420px', position: 'relative' }}>
          <span className="corner-marker tl" />
          <span className="corner-marker tr" />
          <span className="corner-marker bl" />
          <span className="corner-marker br" />
          <img
            src="/images/headshot.JPG"
            alt="Joseph Kifle"
            className="img-blend"
            style={{ width: '100%', aspectRatio: '8 / 9', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '10px 14px', backgroundColor: 'rgba(247,247,245,0.92)',
            borderTop: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', fontWeight: '600' }}>Joseph Kifle</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.5, letterSpacing: '0.08em' }}>SWE · UTK CS &apos;28</span>
          </div>
        </div>

        {/* Code mockup — desktop only */}
        <div style={{ width: '100%', maxWidth: '420px', border: '1px solid var(--border)', padding: '28px', position: 'relative' }}>
          <span className="corner-marker tl" />
          <span className="corner-marker tr" />
          <span className="corner-marker bl" />
          <span className="corner-marker br" />
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--coral)' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--gold)' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--mint)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.4, marginLeft: '8px', letterSpacing: '0.1em' }}>
              joseph-kifle.dev — main.js
            </span>
          </div>
          {[
            { indent: 0, text: 'const engineer = {',                color: 'var(--forest)' },
            { indent: 1, text: 'name: "Joseph Kifle",',             color: 'var(--coral)' },
            { indent: 1, text: "school: \"UTK Tickle CoE '28\",",   color: 'var(--gold)' },
            { indent: 1, text: `gpa: ${EDUCATION.gpa},`,                        color: 'var(--mint)' },
            { indent: 1, text: 'stack: ["React","Python","Node"],', color: 'var(--forest)', opacity: 0.7 },
            { indent: 1, text: 'status: "Open to work",',           color: 'var(--mint)' },
            { indent: 0, text: '};',                                 color: 'var(--forest)' },
          ].map((line, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', paddingLeft: `${line.indent * 16}px` }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.2, minWidth: '16px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: line.color, opacity: line.opacity || 1 }}>
                {line.text}
              </span>
            </div>
          ))}
          <div style={{ display: 'inline-block', width: '2px', height: '14px', backgroundColor: 'var(--forest)', marginLeft: '4px', animation: 'blink 1s step-end infinite' }} />
        </div>
      </div>
    </section>
  );
}