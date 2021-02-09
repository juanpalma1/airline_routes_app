import React, { useState } from 'react';

const Select = ({
  label,
  name,
  options,
  onChange: handleChange
}) => {
  return (
    <label>
      {label}
      <select name={name} onChange={handleChange}>
        {options()}
      </select>
    </label>
  );
};

export default Select;