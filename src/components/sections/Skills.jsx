import PropTypes from 'prop-types';
import SectionLabel from '../ui/SectionLabel';
import LeadershipCarousel from '../ui/LeadershipCarousel';
import { SKILL_CATEGORIES, EXPERIENCE } from '../../data/resume';

function SkillCell({ category }) {
  return (
    <div className="bento-cell">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
        <div style={{ width: '3px', height: '18px', backgroundColor: category.accent, flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>{category.id}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '20px' }}>
        {category.label}
      </h3>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', opacity: 0.4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Proficiency</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: category.accent, fontWeight: '600' }}>{category.level}%</span>
        </div>
        <div style={{ height: '2px', backgroundColor: 'rgba(26,60,43,0.1)' }}>
          <div style={{ height: '100%', width: `${category.level}%`, backgroundColor: category.accent }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {category.skills.map(skill => (
          <span key={skill} style={{
            padding: '4px 10px', border: '1px solid var(--border)',
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em',
            transition: 'border-color 0.15s, background 0.15s', cursor: 'default',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = category.accent; e.currentTarget.style.backgroundColor = `${category.accent}20`; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(58,58,56,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >{skill}</span>
        ))}
      </div>
    </div>
  );
}

SkillCell.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired, label: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired, skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid var(--border)' }}>

      {/* Header */}
      <div className="section-pad-top" style={{ borderBottom: '1px solid var(--border)' }}>
        <SectionLabel index="03" label="Skills & Experience" />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95' }}>
          The full stack,<br />from pixel to&nbsp;
          <span style={{ borderBottom: '2px solid var(--mint)', paddingBottom: '2px' }}>pipeline.</span>
        </h2>
      </div>

      {/* Skills bento */}
      <div className="bento-grid">
        {SKILL_CATEGORIES.map(c => <SkillCell key={c.id} category={c} />)}
      </div>

      {/* Experience */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner-pad" style={{ paddingBottom: '24px' }}>
          <div className="text-section-label" style={{ marginBottom: '0' }}>Professional Experience</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-row">
              {/* Left metadata */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '8px' }}>{exp.year}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{exp.company}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.5, marginBottom: '12px' }}>{exp.location}</div>
                {exp.current && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 8px', border: '1px solid var(--mint)' }}>
                    <div style={{ width: '5px', height: '5px', backgroundColor: 'var(--mint)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Current</span>
                  </div>
                )}
              </div>
              {/* Right content */}
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: '700', marginBottom: '16px' }}>{exp.role}</div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--forest)', opacity: 0.4, marginTop: '7px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.65', opacity: 0.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership carousel */}
      <LeadershipCarousel />

    </section>
  );
}