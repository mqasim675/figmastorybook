// NewButton.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newButton.css';

export const NewButton = ({ label, size, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonSize = isHovered ? 'storybook-button--large' : `storybook-button--${size}`;

  return (
    <button
      className={['storybook-button', buttonSize].join(' ')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {label}
    </button>
  );
};

NewButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

NewButton.defaultProps = {
  size: 'medium',
  onClick: undefined,
};
