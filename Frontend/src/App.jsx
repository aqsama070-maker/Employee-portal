import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddEmployee";
import Login from "./components/Login";
import Register from "./components/Register";
import FrontPage from "./components/FrontPage";
import Employee from "./components/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/view" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
