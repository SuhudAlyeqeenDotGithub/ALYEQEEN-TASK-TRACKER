import AllPurposeInput from "../components/allPurposeInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function TasksPage() {
  const taskContainerStyle = "text-[#295270] font-semibold p-2 rounded-md bg-white border border-[#448ABC] shadow-md mb-2 mr-2 flex flex-wrap w-2/5 max-w-2/5 min-w-96 items-center justify-center"
  const editIcon = <FontAwesomeIcon icon={faEdit}/>
  const elements = [];
  for(let i = 0; i < 100; i++){
    const obj = {
      Taskid: i,
      TaskName: `TaskName ${i}`,
      TaskStatus: `TaskStatus ${i}`,
      TaskDate: `TaskDate ${i}`,
      TaskTime: `TaskTime ${i}`
    };

    elements.push(
      <div key={i} className={taskContainerStyle}>

        <div className="row-span-2 flex basis-1/10 mr-4 items-center justify-self-center">
          <AllPurposeInput styling="w-8 h-8 accent-[#295270]" 
           inputId={i} inputName={i} inputType="checkbox" inputValue={i}/>
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


        <div className="text-[#295270] shadow-md p-2 pr-4 pl-4 mt-2 rounded-md border border-[#448ABC] row-span-2 flex basis-3/20 items-center justify-center hover:bg-[#448ABC] hover:text-white hover:border-none">
          <p>Edit {editIcon}</p>
        </div>

      </div>
      
    );
  }


  return (
    <div className="p-8 mt-10 flex flex-wrap justify-center">
      {elements}
    </div>
  )
}

export default TasksPage
