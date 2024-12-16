import { useContext, useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import AllPurposeInput from "./allPurposeInput";
import { enableScroll } from "../UtilityFunctions/UtilityFunctions";
import { NewTaskContext } from "../contexts/TaskContext";
import AllPurposeLabel from "./AllPurposeLabel";

export const NewTaskDialog = () => {
  const { NewTaskdialogIsOpen, setNewTaskDialogIsOpen } =
    useContext(NewTaskContext);

  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    taskStartDate: "",
    taskEndDate: "",
    taskStartTime: "",
    taskEndTime: "",
    taskStatus: "",
  });

  const {
    taskName,
    taskDescription,
    taskStartDate,
    taskEndDate,
    taskStartTime,
    taskEndTime,
    taskStatus,
  } = formData;

  const handleFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeDialog = () => {
    if (NewTaskdialogIsOpen === true) {
      setNewTaskDialogIsOpen(false);
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
    NewTaskdialogIsOpen && (
      <div>
        <div className={overlayStyling}> </div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <h1 className="text-blue-900 text-2xl mb-4 font-bold">
          New Task
          </h1>
          <h1 className="text-blue-900 mb-2 font-semibold">Task Id:</h1>
          <AllPurposeInput
            inputPlaceHolder="Task Name"
            inputValue={taskName}
            inputType="text"
            inputName="taskName"
            styling=""
            onchangeFunction={handleFormData}
          />
          <textarea
            placeholder="Task Description"
            rows="5"
            cols="40"
            value={taskDescription}
            name="taskDescription"
            className={textAreaStyling}
            onChange={handleFormData}
          />
          <div className={dateTimeDivStyling}>
            <div>
              <AllPurposeLabel inputId="taskStartDate">
                Start Date
              </AllPurposeLabel>
              <AllPurposeInput
                inputPlaceHolder="Task Start Date"
                inputValue={taskStartDate}
                inputType="date"
                inputName="taskStartDate"
                inputId="taskStartDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div>
              <AllPurposeLabel inputId="taskEndDate">End Date</AllPurposeLabel>
              <AllPurposeInput
                inputPlaceHolder="Task End Date"
                inputValue={taskEndDate}
                inputType="date"
                inputName="taskEndDate"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>
          <div className={dateTimeDivStyling}>
            <div>
              <AllPurposeLabel inputId="taskStartTime">
                Start Time
              </AllPurposeLabel>
              <AllPurposeInput
                inputPlaceHolder="Task Start Time"
                inputValue={taskStartTime}
                inputType="time"
                inputName="taskStartTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
            <div>
              <AllPurposeLabel inputId="taskEndTime">End Time</AllPurposeLabel>
              <AllPurposeInput
                inputPlaceHolder="Task End Time"
                inputValue={taskEndTime}
                inputType="time"
                inputName="taskEndTime"
                styling=""
                onchangeFunction={handleFormData}
              />
            </div>
          </div>

          <AllPurposeLabel inputId="taskStatusDropdown">
            Select Task Status
          </AllPurposeLabel>
          <select
            id="taskStatusDropdown"
            value={taskStatus}
            name="taskStatus"
            onChange={handleFormData}
            className={textAreaStyling}
          >
            <option value="Completed" className={optionStyling}>
              Completed
            </option>
            <option value="In Progress" className={optionStyling}>
              In Progress
            </option>
            <option value="Terminated" className={optionStyling}>
              Terminated
            </option>
          </select>

          <button className={buttonStyling} onClick={closeDialog}>
            Add Task
          </button>
        </AllPurposeContainer>
      </div>
    )
  );
};
