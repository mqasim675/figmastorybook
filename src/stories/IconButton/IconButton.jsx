// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';

export const IconButton = ({ iconName, label, primary, size, ...props }) => {
  const mode = primary ? 'storybook-icon-button--primary' : 'storybook-icon-button--secondary';
  const buttonSize = `storybook-icon-button--${size}`;
  return (
    <button
      className={['storybook-icon-button', mode, buttonSize].join(' ')}
      {...props}
    >
      <i className={`icon ${iconName}`} />
      <span className="button-label">{label}</span>
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
