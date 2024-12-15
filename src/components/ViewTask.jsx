import React from "react";
import { useContext } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import { ViewTaskContext } from "../contexts/TaskContext";

export const ViewTaskDialog = ({ dialogTitle }) => {
  const { ViewTaskdialogIsOpen, setViewTaskDialogIsOpen } =
    useContext(ViewTaskContext);

  const closeDialog = () => {
    if (ViewTaskdialogIsOpen === true) {
      setViewTaskDialogIsOpen(false);
      enableScroll();
    }
  };

  const dialogueStyling = `bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl border border-blue-300 shadow-lg max-w-xl w-full flex flex-col justify-center items-center min-h-[400px] gap-1`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const textAreaStyling = `shadow-sm border border-blue-800 placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded mb-4 mt-2 focus:border-2 border-blue-500 outline-none`;
  const buttonStyling = `bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-900`;
  const optionStyling = `font-semibold hover:bg-blue-900`;
  const dateTimeDivStyling = "grid grid-cols-2 grid-rows-1 gap-6 min-w-full";

  return (
    ViewTaskdialogIsOpen && (
      <AllPurposeContainer containerStyling={dialogueStyling}>
        <div className={overlayStyling}></div>

        <button>Close</button>
        <h1>{dialogTitle}</h1>
        <h1>Task Id:</h1>
        <h1>Task Name:</h1>
        <h1>Task Description</h1>
        <p>Here is your tast description</p>
        <h1>Task Start Date:</h1>
        <h1>Task Due Date:</h1>
        <h1>Task Start Time:</h1>
        <h1>Task Due Time:</h1>
        <h1>Task Status:</h1>
        <button>Edit Task</button>
      </AllPurposeContainer>
    )
  );
};
