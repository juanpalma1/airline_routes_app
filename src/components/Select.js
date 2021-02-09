import React from 'react';

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
      <select
        name={name}
        onChange={handleChange}
        value={optionsState}
      >
        {options(name)}
      </select>
    </label>
  );
};

export default Select;