import { useState } from "react";

const AllPurposeInput = ({inputPlaceHolder, inputValue, inputType, inputId, inputName, onchangeFunction, styling}) => {

  // Class formatting based on focus state
  const classNameFormatting = `placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded mb-4 mt-2 focus:border-2 border-blue-500 outline-none`;
  
  
   return (
    <input
      type={inputType}
      className={styling ? styling : classNameFormatting }
      placeholder={inputPlaceHolder}
      id={inputId}
      value={inputValue}
      name={inputName}
      onchange={onchangeFunction}
    />
  );
};

export default AllPurposeInput;
