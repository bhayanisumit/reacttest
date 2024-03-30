import React from "react";

const Select = ({ classname, optionData=[] ,labelforSelected }) => {
  return (
    <select className={classname} aria-label="Default select example">
              <option value="">{labelforSelected}</option>
              {optionData.map((ele,index) => (<option key={index} value={ele.value}>{ele.label}</option>))}
            </select>
  );
};

export default Select;