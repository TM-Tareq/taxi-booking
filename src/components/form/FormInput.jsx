import React from 'react';
import './FormInput.css';

const FormInput = ({ label, onChange, ...inputProps }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
