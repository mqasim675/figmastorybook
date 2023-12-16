import React from 'react';
import PropTypes from 'prop-types';
import './MdButton.css';

export const LgButton = ({ isTrue, size, label, type, ...props }) => {
  const mode = isTrue ? 'md-button--true' : 'md-button--false';

  let buttonClass = '';

  if (type === 'primary') {
    buttonClass = isTrue ? 'md-button--primary' : 'md-button--primary--false';
  } else if (type === 'secondary') {
    buttonClass = isTrue ? 'md-button--secondary' : 'md-button--secondary--false';
  } else if (type === 'tertiary') {
    buttonClass = isTrue ? 'md-button--tertiary' : 'md-button--tertiary--false';
  } else if (type === 'disabled') {
    buttonClass = isTrue ? 'md-button--disabled' : 'md-button--disabled--false';
  }

  return (
    <button
      type="button"
      className={['md-button', `md-button--${size}`, mode, buttonClass].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

LgButton.propTypes = {
  isTrue: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled']),
  onClick: PropTypes.func,
};

LgButton.defaultProps = {
  isTrue: false,
  size: 'medium',
  type: 'primary',
  onClick: undefined,
};

export default LgButton;
