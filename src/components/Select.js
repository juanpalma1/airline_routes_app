import React, { useState } from 'react';

const Select = ({
  label,
  name,
  value: optionsState,
  options,
  onChange: handleChange
}) => {
  return (
    <label>
      {label}
      <select name={name} onChange={handleChange} value={optionsState}>
        {options()}
      </select>
    </label>
  );
};

export default Select;