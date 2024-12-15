import AllPurposeCheckBox from "../components/AllPurposeCheckBox";
import { editIcon, deleteIcon, addIcon } from "../components/icons";
import { useContext, useEffect, useState } from "react";
import { NewTaskDialog } from "../components/NewTaskDialog";
import { NewTaskContext, ViewTaskContext } from "../contexts/TaskContext";
import { disableScroll } from "../UtilityFunctions/UtilityFunctions";
import { ViewTaskDialog } from "../components/ViewTask";

function TasksPage() {
  const taskContainerStyle =
    "cursor-pointer text-blue-900 font-semibold p-2 rounded-md bg-white border border-blue-800  shadow-sm mb-2 mr-2 flex flex-wrap w-2/5 max-w-2/4 min-w-96 items-center justify-center hover:bg-blue-50";
  const regularButtonStyle = `cursor-pointer text-blue-900 font-semibold shadow-sm p-2 pr-4 pl-4 mt-2 rounded-md border border-blue-800  row-span-2 flex items-center justify-center hover:bg-blue-800  hover:text-white hover:border-none`;
  const tasksData = Array.from({ length: 100 }, (item, i) => {
    return {
      Taskid: i,
      TaskName: `TaskName ${i}`,
      TaskStatus: `TaskStatus ${i}`,
      TaskDate: `TaskDate ${i}`,
      TaskTime: `TaskTime ${i}`,
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

  const tasks = tasksData.map((obj, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          alert(
            `Yh.. that's right you just click a task container for task ${index}`
          );
        }}
        className={taskContainerStyle}
      >
        <div onClick={(event) => event.stopPropagation()} className="row-span-2 flex basis-1/10 mr-4 items-center justify-self-center">
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
            <p className="mr-10 max-w-full">{obj.TaskName}</p>
            <p>Status: {obj.TaskStatus}</p>
          </div>

          <div className="flex max-w-full">
            <p className="mr-10 max-w-full">Date: {obj.TaskDate}</p>
            <p>Time: {obj.TaskTime}</p>
          </div>
        </div>

        <button className={regularButtonStyle} onClick={showEditTaskDialog}>
          Edit {editIcon}
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

  const showViewTaskDialog = () => {
    if (ViewTaskdialogIsOpen === false) {
      setViewTaskDialogIsOpen(true);
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
      {NewTaskdialogIsOpen && <NewTaskDialog dialogTitle="New Task" />}
      {ViewTaskdialogIsOpen && <ViewTaskDialog dialogTitle="Your Task" />}
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

      <div className="p-8 flex flex-wrap justify-center">{tasks}</div>
    </div>
  );
}

export default TasksPage;
