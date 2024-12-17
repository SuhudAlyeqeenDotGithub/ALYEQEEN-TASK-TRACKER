import AllPurposeCheckBox from "../components/AllPurposeCheckBox";
import { editIcon, deleteIcon, addIcon } from "../components/icons";
import { useContext, useEffect, useState } from "react";
import { NewTaskDialog } from "../components/NewTaskDialog";
import { NewTaskContext, ViewTaskContext } from "../contexts/TaskContext";
import { disableScroll } from "../UtilityFunctions/UtilityFunctions";
import { ViewTaskDialog } from "../components/ViewTask";

function TasksPage() {
  const taskContainerStyle =
    "cursor-pointer gap-2 text-blue-900 font-semibold p-2 rounded-md bg-white border border-blue-800  shadow-sm mb-2 mr-2 flex flex-wrap w-2/5 max-w-2/4 min-w-96 items-center justify-center hover:bg-blue-50";
  const regularButtonStyle = `cursor-pointer text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800  row-span-2 flex items-center justify-center hover:bg-blue-800  hover:text-white hover:border-none`;
  const tasksData = Array.from({ length: 10 }, (item, i) => {
    return {
      taskId: i,
      taskName: `Task Name ${i}`,
      taskStatus: `Task Status ${i}`,
      taskDescription: `Task ${i}: This task involves implementing a feature that dynamically generates descriptions for items based on their unique ID (${i}). The purpose of this task is to ensure that each task is identifiable and references its own ID (${i}) within the description text for clarity and tracking.`,
      taskStartDate: `Task StartDate ${i}`,
      taskDueDate: `Task EndDate ${i}`,
      taskStartTime: `Task StartTime ${i}`,
      taskDueTime: `Task EndTime ${i}`,
    };
  });

  const [selectAllCheckStatus, setSelectAllCheckBoxStatus] = useState(false);
  const [regularCheckBoxStatus, setRegularCheckBoxStatus] = useState(
    Array(tasksData.length).fill(false)
  );
  const [countCheckedBoxes, setCountCheckedBoxes] = useState(0);

  const { NewTaskdialogIsOpen, setNewTaskDialogIsOpen } =
    useContext(NewTaskContext);
  const { ViewTaskdialogIsOpen, setViewTaskDialogIsOpen } =
    useContext(ViewTaskContext);
  const oneOrMoreRegBoxIsTrue = regularCheckBoxStatus.some(
    (checkStatus) => checkStatus === true
  );
  const onlyOneCheckIsTrue =
    regularCheckBoxStatus.filter((checkStatus) => checkStatus === true)
      .length === 1;

  const handleRegularCheckBoxOnchange = (event, index) => {
    event.stopPropagation();
    const updatedStatuses = [...regularCheckBoxStatus];
    updatedStatuses[index] = !updatedStatuses[index];
    setRegularCheckBoxStatus(updatedStatuses);
  };

  const handleSelectAllCheck = () => {
    setSelectAllCheckBoxStatus(!selectAllCheckStatus);
    setRegularCheckBoxStatus(
      Array(tasksData.length).fill(!selectAllCheckStatus)
    );
  };

  const showEditTaskDialog = (event) => {
    event.stopPropagation();
    alert("well now you clicked the edit button");
  };

  const [viewTaskData, setViewTaskData] = useState({});

  const showViewTaskDialog = (taskData) => {
    if (ViewTaskdialogIsOpen === false) {
      setViewTaskData(taskData);
      setViewTaskDialogIsOpen(true);
      disableScroll();
    }
  };

  const tasks = tasksData.map((obj, index) => {
    const { taskName, taskStartDate, taskStartTime, taskStatus } = obj;
    return (
      <div
        key={index}
        onClick={() => {
          showViewTaskDialog(obj);
        }}
        className={taskContainerStyle}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="row-span-2 flex basis-1/10 mr-4 items-center justify-self-center"
        >
          <AllPurposeCheckBox
            inputId={index}
            inputName={index}
            inputValue={index}
            onchangeFunction={handleRegularCheckBoxOnchange}
            checked={regularCheckBoxStatus[index]}
            isRegularCheckbox={true}
            index={index}
          />
        </div>

        <div className="basis-3/4 flex flex-wrap justify-center items-center space-y-5 max-w-full">
          <div className="flex max-w-full">
            <p className="mr-10 max-w-full">Task Name {taskName}</p>
            <p>Task Status: {taskStatus}</p>
          </div>

          <div className="flex max-w-full">
            <p className="mr-10 max-w-full">Start Date: {taskStartDate}</p>
            <p>Start Time: {taskStartTime}</p>
          </div>
        </div>

        <button
          className="ml-4 hover:text-white hover:bg-blue-900 text-xl p-2 rounded-lg justify-center items-center"
          onClick={showEditTaskDialog}
        >
          {editIcon}
        </button>
      </div>
    );
  });

  const deleteButtonShowLogic = oneOrMoreRegBoxIsTrue ? "" : "hidden";
  const topEditButtonLogic = onlyOneCheckIsTrue ? "" : "hidden";
  const deleteButtonStyle = `${regularButtonStyle} ${deleteButtonShowLogic}`;
  const editButtonStyle = `${regularButtonStyle} ${topEditButtonLogic}`;

  const showNewTaskDialog = () => {
    if (NewTaskdialogIsOpen === false) {
      setNewTaskDialogIsOpen(true);
      disableScroll();
    }
  };

  useEffect(() => {
    const checkedBoxes = regularCheckBoxStatus.filter(
      (status) => status === true
    ).length;
    setCountCheckedBoxes(checkedBoxes);
  }, [regularCheckBoxStatus]);

  return (
    <div className="">
      {NewTaskdialogIsOpen && <NewTaskDialog />}
      {ViewTaskdialogIsOpen && <ViewTaskDialog taskData={viewTaskData} />}
      <div className=" sticky top-52 bg-white shadow-sm border border-blue-800  p-4 rounded flex flex-wrap items-center w-4/5 justify-self-center">
        <div className="row-span-2 flex ml-10 items-center justify-self-center">
          <AllPurposeCheckBox
            inputId="selectAll"
            inputName="selectAll"
            inputValue="selectAll"
            onchangeFunction={handleSelectAllCheck}
            checked={selectAllCheckStatus}
            isRegularCheckbox={false}
          />
        </div>

        <div className="row-span-2 text-blue-900 font-semibold flex ml-10 items-center justify-self-center">
          <p>
            {oneOrMoreRegBoxIsTrue && `${countCheckedBoxes} Tasks Selected`}
          </p>
        </div>

        <div className="pl-10 grow flex flex-wrap space-x-10 mr-10 w-1/2 justify-center">
          <button className={deleteButtonStyle}>Delete {deleteIcon}</button>
          <button className={editButtonStyle} onClick={showEditTaskDialog}>
            Edit {editIcon}
          </button>
        </div>

        <button
          onClick={showNewTaskDialog}
          className="text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800   hover:bg-blue-800  hover:text-white hover:border-none"
        >
          Add Task {addIcon}
        </button>
      </div>

      <div className=" mt-4 flex flex-wrap justify-center items-center">
        {tasks}
      </div>
    </div>
  );
}

export default TasksPage;
