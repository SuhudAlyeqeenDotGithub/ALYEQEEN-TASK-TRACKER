import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TasksPage from "./pages/TasksPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="login" element={<LoginPage/>} />
              <Route path="signup" element={<SignUpPage/>} />
              <Route path="mytasks" element={<TasksPage/>} />
              <Route path="dashboard" element={<DashboardPage/>} />
            </Route>
          </Routes>
      </Router>

  )
}

export default App