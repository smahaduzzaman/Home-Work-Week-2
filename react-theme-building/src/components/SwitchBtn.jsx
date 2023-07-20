import React from "react";

const SwitchBtn = ({ handleChange }) => {
  return (
    <div>
      <select onChange={(event) => handleChange(event.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="midnight">Midnight</option>
      </select>
    </div>
  );
};

export default SwitchBtn;
