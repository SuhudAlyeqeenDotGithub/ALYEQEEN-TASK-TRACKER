import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NewTaskProvider from "./contexts/newTaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewTaskProvider>
      <App />
    </NewTaskProvider>
  </StrictMode>
);
