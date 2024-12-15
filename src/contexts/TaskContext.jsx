import { createContext, useState } from "react";

// Create context
export const NewTaskContext = createContext({});

export const NewTaskProvider = ({ children }) => {
  // State to manage dialog visibility
  const [NewTaskdialogIsOpen, setNewTaskDialogIsOpen] = useState(false);

  return (
    <NewTaskContext.Provider value={{ NewTaskdialogIsOpen, setNewTaskDialogIsOpen }}>
      {children}
    </NewTaskContext.Provider>
  );
};

export const ViewTaskContext = createContext({})
export const ViewTaskProvider = ({ children }) => {
  // State to manage dialog visibility
  const [ViewTaskdialogIsOpen, setViewTaskDialogIsOpen] = useState(false);

  return (
    <ViewTaskContext.Provider value={{ ViewTaskdialogIsOpen, setViewTaskDialogIsOpen }}>
      {children}
    </ViewTaskContext.Provider>
  );
};
