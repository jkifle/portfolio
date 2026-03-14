import SectionLabel from '../ui/SectionLabel';
import { PERSONAL, EDUCATION, TIMELINE, HONORS, CERTIFICATIONS } from '../../data/resume';

export default function About() {
  return (
    <section id="about" style={{ borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>

        {/* Left — Bio */}
        <div style={{ padding: '72px 48px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <SectionLabel index="01" label="About" />

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95',
            color: 'var(--forest)', marginBottom: '28px',
          }}>
            Precision-built<br />
            for the&nbsp;
            <span style={{ borderBottom: '2px solid var(--coral)', paddingBottom: '2px' }}>web.</span>
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '1.75', opacity: 0.7, maxWidth: '420px', marginBottom: '24px' }}>
            {PERSONAL.bio1}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '1.75', opacity: 0.7, maxWidth: '420px', marginBottom: '36px' }}>
            {PERSONAL.bio2}
          </p>

          {/* Education card */}
          <div style={{ border: '1px solid var(--border)', padding: '20px', position: 'relative', maxWidth: '420px' }}>
            <span className="corner-marker tl" />
            <span className="corner-marker br" />
            <div className="text-section-label" style={{ marginBottom: '10px' }}>Education</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
              {EDUCATION.school}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', opacity: 0.6, marginBottom: '12px' }}>
              {EDUCATION.degree} · Minor: {EDUCATION.minor} · {EDUCATION.expected}
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--mint)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '600' }}>GPA {EDUCATION.gpa}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--gold)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.7 }}>{EDUCATION.honors}</span>
              </div>
            </div>
          </div>

          {/* Honors */}
          <div style={{ marginTop: '32px', maxWidth: '420px' }}>
            <div className="text-section-label" style={{ marginBottom: '14px' }}>Honors & Scholarships</div>
            {HONORS.map((h, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < HONORS.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '500' }}>{h.award}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.45, letterSpacing: '0.06em', textAlign: 'right', maxWidth: '140px' }}>{h.org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Timeline + Certs */}
        <div style={{ padding: '72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="text-section-label" style={{ marginBottom: '32px' }}>Career Timeline</div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '48px' }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px',
                paddingBottom: '24px', paddingTop: i === 0 ? '0' : '24px',
                borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '48px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', opacity: 0.45 }}>
                    {item.year}
                  </span>
                  <div style={{ width: '1px', backgroundColor: 'var(--border)', minHeight: '32px' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <div style={{
                      width: '6px', height: '6px',
                      backgroundColor: item.type === 'edu' ? 'var(--gold)' : item.type === 'research' ? 'var(--coral)' : 'var(--mint)',
                    }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.45, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {item.type === 'edu' ? 'Education' : item.type === 'research' ? 'Research' : 'Work'}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
                    {item.role}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.5, letterSpacing: '0.06em' }}>
                    {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="text-section-label" style={{ marginBottom: '16px' }}>Certifications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 14px', border: '1px solid var(--border)',
                }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px' }}>{cert.label}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em',
                    textTransform: 'uppercase', padding: '2px 8px',
                    backgroundColor: cert.status === 'Completed' ? 'var(--mint)' : 'transparent',
                    border: cert.status !== 'Completed' ? '1px solid var(--border)' : 'none',
                    color: 'var(--forest)',
                  }}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
