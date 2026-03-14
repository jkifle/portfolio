import SectionLabel from '../ui/SectionLabel';
import { PERSONAL, EDUCATION, TIMELINE, HONORS, CERTIFICATIONS } from '../../data/resume';

const TYPE_COLOR = {
  edu:      'var(--gold)',
  research: 'var(--coral)',
  work:     'var(--mint)',
};
const TYPE_LABEL = { edu: 'Education', research: 'Research', work: 'Work' };

export default function About() {
  return (
    <section id="about" style={{ borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>

      {/* ── Row 1: Header + Bio ─────────────────────────────────── */}
      <div className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <SectionLabel index="01" label="About" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95', color: 'var(--forest)',
          }}>
            Precision-built<br />for the&nbsp;
            <span style={{ borderBottom: '2px solid var(--coral)', paddingBottom: '2px' }}>web.</span>
          </h2>

          {/* Bio */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '1.75', opacity: 0.7, marginBottom: '16px' }}>
              {PERSONAL.bio1}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '1.75', opacity: 0.7 }}>
              {PERSONAL.bio2}
            </p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Education + Certs strip ──────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--grid)' }}>

        {/* Education */}
        <div style={{ background: 'var(--paper)', padding: '24px 32px', position: 'relative' }}>
          <span className="corner-marker tl" />
          <div className="text-section-label" style={{ marginBottom: '10px' }}>Education</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', marginBottom: '3px' }}>
            {EDUCATION.school}
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', opacity: 0.6, marginBottom: '14px' }}>
            {EDUCATION.degree} · Minor: {EDUCATION.minor}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--mint)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '600' }}>GPA {EDUCATION.gpa}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.7 }}>{EDUCATION.honors}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--coral)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.7 }}>{EDUCATION.expected}</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ background: 'var(--paper)', padding: '24px 32px' }}>
          <div className="text-section-label" style={{ marginBottom: '14px' }}>Certifications</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px' }}>{cert.label}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '2px 8px', flexShrink: 0,
                  backgroundColor: cert.status === 'Completed' ? 'var(--mint)' : 'transparent',
                  border: cert.status !== 'Completed' ? '1px solid var(--border)' : 'none',
                }}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Honors */}
        <div style={{ background: 'var(--paper)', padding: '24px 32px' }}>
          <div className="text-section-label" style={{ marginBottom: '14px' }}>Honors &amp; Scholarships</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {HONORS.map((h, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                flexWrap: 'wrap', gap: '4px', padding: '7px 0',
                borderBottom: i < HONORS.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '500' }}>{h.award}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.06em', flexShrink: 0 }}>{h.org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Row 3: Timeline ─────────────────────────────────────── */}
      <div className="section-inner-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="text-section-label" style={{ marginBottom: '24px' }}>Career Timeline</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--grid)' }}>
          {TIMELINE.map((item, i) => (
            <div key={i} style={{ background: 'var(--paper)', padding: '20px 24px' }}>
              {/* Type tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <div style={{ width: '5px', height: '5px', backgroundColor: TYPE_COLOR[item.type], flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {TYPE_LABEL[item.type]}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', opacity: 0.35, marginLeft: 'auto' }}>{item.year}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '600', lineHeight: '1.2', marginBottom: '4px' }}>
                {item.role}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.45, letterSpacing: '0.04em' }}>
                {item.company}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}