import React from 'react';
import PropTypes from 'prop-types';
import './PlusMdButton.css';

export const PlusMdButton = ({ isTrue, size, label, type, backgroundColor, ...props }) => {
  const mode = isTrue ? 'plus-md-button--true' : 'plus-md-button--false';

  let buttonClass = '';
  let circleColor = '';
  let plusColor = '';

  if (type === 'primary') {
    buttonClass = isTrue ? 'plus-md-button--primary' : 'plus-md-button--primary--false';
    circleColor = isTrue ? 'white' : '#009AEE';
    plusColor = isTrue ? 'white' : '#009AEE';
  } else if (type === 'secondary') {
    buttonClass = isTrue ? 'plus-md-button--secondary' : 'plus-md-button--secondary--false';
    circleColor = isTrue ? 'white' : '#25CBA1';
    plusColor = isTrue ? '#ffffff' : '#25CBA1';
  } else if (type === 'tertiary') {
    buttonClass = isTrue ? 'plus-md-button--tertiary' : 'plus-md-button--tertiary--false';
    circleColor = isTrue ? '#ffffff' : '#111928';
    plusColor = isTrue ? '#ffffff' : '#111928';
  } else if (type === 'disabled') {
    buttonClass = isTrue ? 'plus-md-button--disabled' : 'plus-md-button--disabled--false';
    circleColor = isTrue ? '#8899A8' : '#8899A8';
    plusColor = isTrue ? '#8899A8' : '#8899A8';
  }

  return (
    <button
      type="button"
      className={['plus-md-button', `plus-md-button--${size}`, mode, buttonClass].join(' ')}
      {...props}
    >
      <span className="plus-circle" style={{ borderColor: circleColor }}>
        <span className="plus-sign" style={{ color: plusColor }}>+</span>
      </span>
      {label}
    </button>
  );
};

PlusMdButton.propTypes = {
  isTrue: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled']),
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

PlusMdButton.defaultProps = {
  isTrue: false,
  size: 'medium',
  type: 'primary',
  onClick: undefined,
  backgroundColor: '',
};

export default PlusMdButton;
