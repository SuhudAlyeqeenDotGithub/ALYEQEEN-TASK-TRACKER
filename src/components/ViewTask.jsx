import React from "react";
import { useContext } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import { ViewTaskContext } from "../contexts/TaskContext";
import { editIcon, deleteIcon, closeIcon } from "./icons";
import { RegularParagraph, TaskStatusChip } from "./ShortComponents";

export const ViewTaskDialog = ({ dialogTitle, taskData }) => {
  const { ViewTaskdialogIsOpen, setViewTaskDialogIsOpen } =
    useContext(ViewTaskContext);

  const {
    taskId,
    taskName,
    taskDescription,
    taskStartDate,
    taskDueDate,
    taskStartTime,
    taskDueTime,
    taskStatus,
  } = taskData || {};



  const handleCloseViewTask = () => {
    if (ViewTaskdialogIsOpen === true) {
      setViewTaskDialogIsOpen(false);
      enableScroll();
    }
  };

  const handleEditTaskFromView = () => {
    if (ViewTaskdialogIsOpen === true) {
      setViewTaskDialogIsOpen(false);
      enableScroll();
    }
  };

  const dialogueStyling = `overflow-auto pl-8 pr-8 pt-2 pb-8 bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl border border-blue-300 shadow-lg max-w-md min-w-[400px] flex flex-col min-h-[600] max-h-[600px]`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const buttonStyling = `justify-center text-blue-900 hover:text-white text-xl p-2 rounded-lg`;
  const gridStyling = `w-full grid grid-cols-2 grid-rows-1 gap-4`;
  return (
    ViewTaskdialogIsOpen && (
      <>
        <div className={overlayStyling} onClick={handleCloseViewTask}></div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <div className="flex flex-col gap-8">
          <header className="gap-2">
          <div className="flex flex-row w-full items-center">
            <RegularParagraph styling="w-full pb-4 text-blue-900 text-xl font-bold">
              Your Task Status
            </RegularParagraph>

            <div className="w-full flex flex-wrap justify-end gap-2 mb-4">
              <button
                className={`hover:bg-blue-900 ${buttonStyling}`}
                onClick={() => {
                  alert(
                    `Hey this is not real but you have just deleted the task1 ${taskId}`
                  );
                }}
              >
                {deleteIcon}
              </button>
              <button
                className={`hover:bg-blue-900 ${buttonStyling}`}
                onClick={handleEditTaskFromView}
              >
                {editIcon}
              </button>
              <button
                className={`hover:bg-red-500 ${buttonStyling}`}
                onClick={handleCloseViewTask}
              >
                {closeIcon}
              </button>
            </div>
            </div>
            <TaskStatusChip>Terminated</TaskStatusChip>
            </header>
          
          <div className={gridStyling}>
            <RegularParagraph>Task Id: {taskId}</RegularParagraph>
            <RegularParagraph>Task Name: {taskName}</RegularParagraph>
          </div>
          <RegularParagraph>Task Description</RegularParagraph>
          <RegularParagraph styling="overflow-auto text-sm max-h-[150px] text-blue-900 font-semibold border border-blue-900 shadow-inner rounded-md p-4">
          Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.Task 0: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (0). The purpose of this task is to ensure that each task is identifiable and references its own ID (0) within the description text for clarity and tracking.
          </RegularParagraph>
          <div className={gridStyling}>
            <RegularParagraph>
              Task Start Date: {taskStartDate}
            </RegularParagraph>
            <RegularParagraph>Task Due Date: {taskDueDate}</RegularParagraph>
          </div>
          <div className={gridStyling}>
            <RegularParagraph>
              Task Start Time: {taskStartTime}
            </RegularParagraph>
            <RegularParagraph>Task Due Time: {taskDueTime}</RegularParagraph>
          </div>
          </div>
        </AllPurposeContainer>
      </>
    )
  );
};
