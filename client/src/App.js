import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;