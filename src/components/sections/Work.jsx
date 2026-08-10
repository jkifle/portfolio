import PropTypes from 'prop-types';
import SectionLabel from '../ui/SectionLabel';
import { PROJECTS } from '../../data/resume';

function ProjectCard({ project }) {
  return (
    <div className="bento-cell" style={{ minHeight: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '3px', height: '18px', backgroundColor: project.accent, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>
            {project.id}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--forest)' }}>{project.year}</span>
          <div style={{ padding: '2px 8px', border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {project.status}
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '10px', lineHeight: '1.1' }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.65', marginBottom: '20px', color: 'var(--forest)' }}>
        {project.description}
      </p>

      <div style={{ border: '1px solid var(--border)', padding: '14px', backgroundColor: 'rgba(26,60,43,0.03)', marginBottom: '20px' }}>
        {project.mockup.lines.map((line, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: i < project.mockup.lines.length - 1 ? '8px' : '0' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--forest)' }}>{line.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: line.color, fontWeight: '600' }}>{line.value}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.tech.map(t => (
          <span key={t} style={{ padding: '3px 8px', border: `1px solid ${project.accent}`, fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forest)', opacity: 0.5, textDecoration: 'none', transition: 'opacity 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
        >
          View Project ↗
        </a>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired, title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    accent: PropTypes.string.isRequired, status: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired, link: PropTypes.string,
    mockup: PropTypes.shape({ lines: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired, value: PropTypes.string.isRequired, color: PropTypes.string.isRequired })).isRequired }).isRequired,
  }).isRequired,
};

export default function Work() {
  return (
    <section id="work" style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid var(--border)' }}>
      <div className="section-pad-top" style={{ borderBottom: '1px solid var(--border)' }}>
        <SectionLabel index="02" label="Selected Work" />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95' }}>
            Projects that<br />ship &amp; scale.
          </h2>
          <a href="https://github.com/jkifle" target="_blank" rel="noreferrer" className="btn-ghost">All on GitHub ↗</a>
        </div>
      </div>
      <div className="bento-grid">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}