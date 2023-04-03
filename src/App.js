import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
