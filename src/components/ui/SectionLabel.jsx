import PropTypes from 'prop-types';

export default function SectionLabel({ index, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', opacity: 0.35, letterSpacing: '0.1em' }}>
        {index}
      </span>
      <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--forest)', opacity: 0.3 }} />
      <span className="text-section-label">{label}</span>
    </div>
  );
}

SectionLabel.propTypes = {
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};