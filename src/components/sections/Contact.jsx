import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionLabel from '../ui/SectionLabel';
import { PERSONAL } from '../../data/resume';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]       = useState({ from_name: '', from_email: '', project_type: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setForm({ from_name: '', from_email: '', project_type: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '80px 48px 80px' }}>
      <SectionLabel index="05" label="Contact" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* ── Left info ─────────────────────────────── */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95', marginBottom: '28px',
          }}>
            Let&apos;s build<br />something<br />
            <span style={{ color: 'var(--coral)' }}>great together.</span>
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '1.75', opacity: 0.65, maxWidth: '380px', marginBottom: '48px' }}>
            I&apos;m currently available for internships, research roles, and freelance projects. Response time is typically under 72 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { label: 'Email',    value: PERSONAL.email,       href: `mailto:${PERSONAL.email}` },
              { label: 'LinkedIn', value: '/in/josephkifle',    href: PERSONAL.linkedin },
              { label: 'GitHub',   value: 'github.com/jkifle',  href: PERSONAL.github },
              { label: 'Location', value: PERSONAL.location,    href: null },
            ].map((item, i) => (
              item.href ? (
                <a key={i} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '16px 0', borderBottom: '1px solid var(--border)',
                    textDecoration: 'none', transition: 'padding-left 0.15s linear',
                  }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = '8px'}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
                >
                  <span className="text-section-label">{item.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--forest)', opacity: 0.7 }}>
                    {item.value} →
                  </span>
                </a>
              ) : (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 0', borderBottom: '1px solid var(--border)',
                }}>
                  <span className="text-section-label">{item.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', opacity: 0.5 }}>{item.value}</span>
                </div>
              )
            ))}
          </div>
        </div>

        {/* ── Form ──────────────────────────────────── */}
        <div style={{ maxWidth: '640px', width: '100%' }}>
          <div style={{ border: '1px solid var(--border)', padding: '40px', backgroundColor: 'var(--paper)', position: 'relative' }}>
            <span className="corner-marker tl" />
            <span className="corner-marker tr" />
            <span className="corner-marker bl" />
            <span className="corner-marker br" />

            {/* ── Success state ── */}
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', border: '1px solid var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8.5 14.5L16 6" stroke="var(--mint)" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700' }}>Message Sent</div>
                <div className="text-section-label" style={{ textAlign: 'center' }}>I&apos;ll be in touch within 72 hours.</div>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost"
                  style={{ marginTop: '8px', fontSize: '10px', padding: '6px 16px' }}
                >
                  Send Another
                </button>
              </div>

            ) : (
              /* ── Form state ── */
              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--forest)' }} />
                  <span className="text-section-label">New Inquiry</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label className="form-label">Name</label>
                    <input
                      className="form-input" type="text" name="from_name"
                      placeholder="Jane Smith" value={form.from_name}
                      onChange={handleChange} required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      className="form-input" type="email" name="from_email"
                      placeholder="jane@company.com" value={form.from_email}
                      onChange={handleChange} required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label">Opportunity Type</label>
                  <input
                    className="form-input" type="text" name="project_type"
                    placeholder="Internship, freelance, research, full-time..."
                    value={form.project_type} onChange={handleChange}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input" name="message" rows="5"
                    placeholder="Tell me more..." value={form.message}
                    onChange={handleChange} required style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div style={{
                    marginBottom: '16px', padding: '10px 14px',
                    border: '1px solid var(--coral)', backgroundColor: 'rgba(255,140,105,0.08)',
                    fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--coral)',
                    letterSpacing: '0.06em',
                  }}>
                    ⚠ Failed to send — please email me directly at {PERSONAL.email}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-solid"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%', justifyContent: 'center', padding: '12px',
                    opacity: status === 'sending' ? 0.6 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}