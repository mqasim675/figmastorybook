import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownInput.css';

const DropdownInput = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-input">
      <label>{label}</label>
      <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownInput;
