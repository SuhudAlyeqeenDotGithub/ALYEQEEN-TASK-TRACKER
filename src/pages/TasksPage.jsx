
import AllPurposeCheckBox from '../components/AllPurposeCheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faAdd} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function TasksPage() {
  const taskContainerStyle = "text-[#295270] font-semibold p-2 rounded-md bg-white border border-[#448ABC] shadow-md mb-2 mr-2 flex flex-wrap w-2/5 max-w-2/5 min-w-96 items-center justify-center"
  const editIcon = <FontAwesomeIcon icon={faEdit}/>
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt}/>
  const addIcon = <FontAwesomeIcon icon={faAdd}/>
  const [selectAllCheckStatus, setSelectAllCheckBoxStatus] = useState(false);
  
  
  const tasksData = Array.from({length: 10}, (item, i) => {
    return { 
      Taskid: i,
      TaskName: `TaskName ${i}`,
      TaskStatus: `TaskStatus ${i}`,
      TaskDate: `TaskDate ${i}`,
      TaskTime: `TaskTime ${i}`
    };
  });

   
  
  const [regularCheckBoxStatus, setRegularCheckBoxStatus] = useState(Array(tasksData.length).fill(false));
  const oneOrMoreRegBoxIsTrue = regularCheckBoxStatus.some((checkStatus) => checkStatus === true);
  const onlyOneCheckIsTrue = regularCheckBoxStatus.filter((checkStatus) => checkStatus === true).length === 1;


  const handleRegularCheckBoxOnchange = (index) => {
    const updatedStatuses = [...regularCheckBoxStatus];
    updatedStatuses[index] = !updatedStatuses[index];
    setRegularCheckBoxStatus(updatedStatuses);
    
    
  }

  const handleSelectAllCheck = () =>{
    setSelectAllCheckBoxStatus(!selectAllCheckStatus);
    setRegularCheckBoxStatus(Array(tasksData.length).fill(!selectAllCheckStatus))
        
  }

  

   const tasks = tasksData.map((obj, index) => {

    return(
     <div key={index} className={taskContainerStyle}>

      <div className="row-span-2 flex basis-1/10 mr-4 items-center justify-self-center">
        <AllPurposeCheckBox inputId={index} inputName={index} inputValue={index} onchangeFunction={() => handleRegularCheckBoxOnchange(index)} checked={regularCheckBoxStatus[index]}/>
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

      <div className="cursor-pointer text-[#295270] shadow-md p-2 pr-4 pl-4 mt-2 rounded-md border border-[#448ABC] row-span-2 flex basis-3/20 items-center justify-center hover:bg-[#448ABC] hover:text-white hover:border-none">
        <p>Edit {editIcon}</p>
      </div>

    </div>
    );

    });

    const regularButtonStyle = `cursor-pointer text-[#295270] font-semibold shadow-md p-2 pr-4 pl-4 mt-2 rounded-md border border-[#448ABC] row-span-2 flex items-center justify-center hover:bg-[#448ABC] hover:text-white hover:border-none`
    const deleteButtonShowLogic = oneOrMoreRegBoxIsTrue ? "" : "hidden";
    const topEditButtonLogic = onlyOneCheckIsTrue ? "" : "hidden";
    const deleteButtonStyle = `${regularButtonStyle} ${deleteButtonShowLogic}`
    const editButtonStyle = `${regularButtonStyle} ${topEditButtonLogic}`
    
  return (
    <div className="p-8">
      <div className="shadow-md mt-10 p-4 rounded flex flex-wrap items-center w-4/5 justify-self-center">
        
        <div className="row-span-2 flex ml-10 items-center justify-self-center">
            <AllPurposeCheckBox inputId="selectAll" inputName="selectAll" inputValue="selectAll" onchangeFunction={handleSelectAllCheck} checked={selectAllCheckStatus}/>
        </div>

        
        <div className="pl-10 grow flex flex-wrap space-x-10 mr-10 w-1/2 justify-center">
          <div className={deleteButtonStyle}>
            <p>Delete {deleteIcon}</p>
          </div>
          <div className={editButtonStyle}>
            <p>Edit {editIcon}</p>
          </div>
        </div>

        <div className="self-end grow justify-self-end">
        
        <div className="cursor-pointer text-[#295270] font-semibold shadow-md p-2 pr-4 pl-4 mt-2 rounded-md border border-[#448ABC] row-span-2 flex items-center justify-self-end hover:bg-[#448ABC] hover:text-white hover:border-none">
          <p>Add Task {addIcon}</p>
        </div>

      </div>

    </div>

    <div className="p-8 flex flex-wrap justify-center">
      {tasks}
    </div>
    
  </div>

  )
}

export default TasksPage
