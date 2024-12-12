
function AllPurposeCheckBox({inputValue, inputId, inputName, onchangeFunction, checked}) {

 const classNameFormatting = `w-8 h-8 accent-[#295270]`;
  
   return (
    <input
      type="checkbox"
      className={classNameFormatting}
      checked={checked}
      id={inputId}
      value={inputValue}
      name={inputName}
      onChange={onchangeFunction}
    />
  );
}

export default AllPurposeCheckBox
