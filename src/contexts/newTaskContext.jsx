import { createContext, useState } from "react";

// Create context
export const NewTaskContext = createContext({});

const NewTaskProvider = ({ children }) => {
  // State to manage dialog visibility
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <NewTaskContext.Provider value={{ dialogIsOpen, setDialogIsOpen }}>
      {children}
    </NewTaskContext.Provider>
  );
};

export default NewTaskProvider;
