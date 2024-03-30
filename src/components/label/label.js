import React from "react";

const Label = ({ classname, label , forhtml }) => {
  return (
    <label htmlFor={forhtml} className={classname}>
    {label}
  </label>
  );
};

export default Label;