import { NewTaskProvider, ViewTaskProvider } from "./TaskContext";

const AppContextProviders = ({ children }) => {
  return (
    <NewTaskProvider>
      <ViewTaskProvider>{children}</ViewTaskProvider>
    </NewTaskProvider>
  );
};

export default AppContextProviders;
