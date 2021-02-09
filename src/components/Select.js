import React, { useState } from 'react';

const Select = ({
  options,
  onChange: handleAirlineChange
}) => {
  return (

    <label>
      Showing routes on
      <select name="airlines" onChange={handleAirlineChange}>
        {options()}
      </select>
    </label>
  );
};

export default Select;