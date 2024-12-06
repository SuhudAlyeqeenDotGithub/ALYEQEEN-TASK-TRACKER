import { useState } from "react";

const AllPurposeInput = ({inputPlaceHolder, inputType, inputId }) => {
  const [inputOnFocus, setInputFocus] = useState(false);

  // Class formatting based on focus state
  const classNameFormatting = `w-full p-2 rounded mb-4 mt-2 ${
    inputOnFocus ? "border-2 border-blue-500 outline-none" : "border border-blue-500"
  }`;

  
   return (
    <input
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}   // Reset when focus is lost
      type={inputType}
      className={classNameFormatting}
      placeholder={inputPlaceHolder}
      id={inputId}
    />
  );
};

export default AllPurposeInput;
