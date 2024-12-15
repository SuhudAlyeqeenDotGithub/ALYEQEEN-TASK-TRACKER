import { useContext, useState } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import AllPurposeInput from "./allPurposeInput";
import { enableScroll} from "../components/UtilityFunctions/UtilityFunctions";
import { NewTaskContext } from "../contexts/newTaskContext";

export const RecentTasks = () => {
  return (
    <div className="bg-blue-200 p-8 m-10 flex flex-wrap justify-center items-center font-semibold border-2 border-blue-400 rounded shadow-md">
      Here are your Recent Tasks
    </div>
  );
};

export const NewTaskDialog = () => {
  const { dialogIsOpen, setDialogIsOpen } = useContext(NewTaskContext);

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
    if (dialogIsOpen === true) {
      setDialogIsOpen(false);
      enableScroll();
    }
  };

  const dialogueStyling = `bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col justify-center items-center min-h-[400px]`;
  const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex justify-center items-center`;
  const textAreaStyling = `placeholder-blue-900 text-blue-900 text-sm font-semibold border border-blue-500 w-full p-2 rounded mb-4 mt-2 focus:border-2 border-blue-500 outline-none`;
  const buttonStyling = `bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded w-full hover:bg-blue-600`;

  return (
    dialogIsOpen && (
      <div>
        <div className={overlayStyling}> </div>
        <AllPurposeContainer containerStyling={dialogueStyling}>
          <h1 className="text-blue-900 font-semibold">Task Id:</h1>
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

          <AllPurposeInput
            inputPlaceHolder="Task Start Date"
            inputValue={taskStartDate}
            inputType="date"
            inputName="taskStartDate"
            styling=""
            onchangeFunction={handleFormData}
          />
          <AllPurposeInput
            inputPlaceHolder="Task End Date"
            inputValue={taskEndDate}
            inputType="date"
            inputName="taskEndDate"
            styling=""
            onchangeFunction={handleFormData}
          />
          <AllPurposeInput
            inputPlaceHolder="Task Start Time"
            inputValue={taskStartTime}
            inputType="time"
            inputName="taskStartTime"
            styling=""
            onchangeFunction={handleFormData}
          />
          <AllPurposeInput
            inputPlaceHolder="Task End Time"
            inputValue={taskEndTime}
            inputType="time"
            inputName="taskEndTime"
            styling=""
            onchangeFunction={handleFormData}
          />

          <div>
            <select
              id="taskStatusDropdown"
              value={taskStatus}
              name="taskStatus"
              onChange={handleFormData}
              className={textAreaStyling}
            >
              <option value="">Select Task Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>

          <button className={buttonStyling} onClick={closeDialog}>
            Add Task
          </button>
        </AllPurposeContainer>
      </div>
    )
  );
};
