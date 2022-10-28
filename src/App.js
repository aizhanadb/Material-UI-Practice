import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/signInUp/SignIn";
import SignUp from "./components/signInUp/SignUP";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Login } from "@mui/icons-material";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <SignUp/>
      <SignIn/>
      {/* <Dashboard /> */}
    </div>
  );
}
