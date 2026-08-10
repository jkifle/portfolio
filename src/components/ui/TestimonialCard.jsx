import PropTypes from 'prop-types';

export default function TestimonialCard({ quote, name, title, initials }) {
  return (
    <div style={{
      border: '1px solid var(--border)',
      backgroundColor: 'var(--paper)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      {/* Top: quote + stars */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <path d="M0 16V9.6C0 4.267 2.667 1.067 8 0L9.6 2.4C7.467 2.933 6 4.533 5.6 7.2H8V16H0ZM14 16V9.6C14 4.267 16.667 1.067 22 0L23.6 2.4C21.467 2.933 20 4.533 19.6 7.2H22V16H14Z" fill="var(--forest)" opacity="0.3"/>
        </svg>
        <div style={{ display: 'flex', gap: '3px' }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="none">
              <polygon points="5,1 6.2,3.8 9.5,4 7,6.2 7.9,9.5 5,7.7 2.1,9.5 3,6.2 0.5,4 3.8,3.8"
                fill="var(--gold)" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote body */}
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        lineHeight: '1.6',
        color: 'var(--forest)',
        flex: 1,
      }}>
        &quot;{quote}&quot;
      </p>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{
          width: '36px', height: '36px',
          backgroundColor: 'var(--forest)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--paper)', fontWeight: '600' }}>
            {initials}
          </span>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em', color: 'var(--forest)' }}>
            {name}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', color: 'var(--forest)' }}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  quote:    PropTypes.string.isRequired,
  name:     PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};