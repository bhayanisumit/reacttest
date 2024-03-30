
import React  from "react";

const InputField = ({ value, id, name, placeholder, type, onChange , classname }) => (
    <input
      type={type}
      id={id}
      value={value}
      name={name}
      className={classname}
      placeholder={placeholder}
      onChange={onChange}
    />
  
);

export default InputField;