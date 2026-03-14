import PropTypes from 'prop-types';

export default function StatusBadge({ label = 'Available for work', color }) {
  return (
    <div className="status-badge" style={color ? { borderColor: color } : {}}>
      <span className="dot" style={color ? { backgroundColor: color } : {}} />
      {label}
    </div>
  );
}

StatusBadge.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};