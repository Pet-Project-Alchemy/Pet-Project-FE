import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.scss';
const RadioButton = ({ name, label, value, onChange }) => (
  <div className='RadioButton'>
    <input
      id={value}
      type='radio'
      name={name}
      value={value}
      onChange={onChange}
    />
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
