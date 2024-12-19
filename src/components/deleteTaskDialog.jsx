import { useContext } from "react";
import AllPurposeContainer from "./AllPurposeContainer";
import {
  disableScroll,
  enableScroll,
} from "../UtilityFunctions/UtilityFunctions";
import { TaskDialogContext } from "../contexts/TaskContext";
import { editIcon, deleteIcon, closeIcon } from "./icons";
import { RegularParagraph } from "./ShortComponents";


const DeleteTaskDialog = ({tasksToDelete}) => {

    
    const {deleteTaskDialogIsOpen, setDeleteTaskDialogIsOpen, confirmedDeleteTask, setConfirmedDeleteTask} = useContext(TaskDialogContext);

    const dialogueStyling = `bg-white z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-8 pr-8 pb-8 pt-2 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-wrap justify-center items-center h-full min-h-[200px] max-h-[700px] gap-1`;
   const overlayStyling = `fixed bg-blue-100 bg-opacity-90 inset-0 border z-10 flex items-center`;
  const buttonStyling = `justify-center text-blue-900 hover:text-white text-xl p-2 rounded-lg`;

  function closeDialog(){
    if(deleteTaskDialogIsOpen){
        setDeleteTaskDialogIsOpen(false);
        enableScroll();
    }  
  }

  function cancelDelete() {
    closeDialog();
  }

  function deleteTasks() {
    alert(`You have just deleted some tasks ... ${JSON.stringify(tasksToDelete)}`);
    closeDialog();
  }

  const tasksToDisplay = tasksToDelete.map((task) => {
      return task.split("||")[0];
    })
  

    return (

         deleteTaskDialogIsOpen && (
              <>
                <div className={overlayStyling}></div>
                <AllPurposeContainer containerStyling={dialogueStyling}>
                  <RegularParagraph>Head Up !</RegularParagraph>
                  <RegularParagraph>Are you sure you want to delete the below task(s)?</RegularParagraph>

                  <RegularParagraph>{JSON.stringify(tasksToDisplay)}</RegularParagraph>

                  <div>
                    <button onClick={deleteTasks} className={buttonStyling}>Delete</button>
                    <button onClick={cancelDelete} className={buttonStyling}>Cancel</button>
                  </div>

                </AllPurposeContainer>
              </>
            )
          );


}

export default DeleteTaskDialog;