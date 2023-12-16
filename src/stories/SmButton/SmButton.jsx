import React from 'react';
import PropTypes from 'prop-types';
import './SmButton.css';

export const SmButton = ({ isTrue, size, label, type, ...props }) => {
  const mode = isTrue ? 'sm-button--true' : 'sm-button--false';

  let buttonClass = '';

  if (type === 'primary') {
    buttonClass = isTrue ? 'sm-button--primary' : 'sm-button--primary--false';
  } else if (type === 'secondary') {
    buttonClass = isTrue ? 'sm-button--secondary' : 'sm-button--secondary--false';
  } else if (type === 'tertiary') {
    buttonClass = isTrue ? 'sm-button--tertiary' : 'sm-button--tertiary--false';
  } else if (type === 'disabled') {
    buttonClass = isTrue ? 'sm-button--disabled' : 'sm-button--disabled--false';
  }

  return (
    <button
      type="button"
      className={['sm-button', `sm-button--${size}`, mode, buttonClass].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

SmButton.propTypes = {
  isTrue: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled']),
  onClick: PropTypes.func,
};

SmButton.defaultProps = {
  isTrue: false,
  size: 'medium',
  type: 'primary',
  onClick: undefined,
};

export default SmButton;
