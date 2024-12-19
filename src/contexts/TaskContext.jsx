import { createContext, useState } from "react";

// Single context for managing task dialogs
export const TaskDialogContext = createContext({});

export const TaskDialogProvider = ({ children }) => {
  const [newTaskDialogIsOpen, setNewTaskDialogIsOpen] = useState(false);
  const [viewTaskDialogIsOpen, setViewTaskDialogIsOpen] = useState(false);
  const [editTaskDialogIsOpen, setEditTaskDialogIsOpen] = useState(false);
  const [editTaskDialogFromViewIsOpen, setEditDialogTaskFromViewIsOpen] =
    useState(false);
  const [viewTaskDataToEdit, setViewTaskDataToEdit] = useState({});
  const [deleteTaskDialogIsOpen, setDeleteTaskDialogIsOpen] = useState(false);
  const [confirmedDeleteTask, setConfirmedDeleteTask] = useState(false);

  return (
    <TaskDialogContext.Provider
      value={{
        newTaskDialogIsOpen,
        setNewTaskDialogIsOpen,
        viewTaskDialogIsOpen,
        setViewTaskDialogIsOpen,
        editTaskDialogIsOpen,
        setEditTaskDialogIsOpen,
        editTaskDialogFromViewIsOpen,
        setEditDialogTaskFromViewIsOpen,
        viewTaskDataToEdit, setViewTaskDataToEdit,
        deleteTaskDialogIsOpen, setDeleteTaskDialogIsOpen, confirmedDeleteTask, setConfirmedDeleteTask
      }}
    >
      {children}
    </TaskDialogContext.Provider>
  );
};
