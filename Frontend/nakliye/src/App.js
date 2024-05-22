import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import  Register from './components/Register.jsx'
import Customer from './components/Customer';
import Carrier from './components/Carrier'

function App() {

  //  Burda router lar belirleniyor
  return (
    <div className="App">
         <Routes>
            <Route  path={"/login"} element={<Login/>} />
             <Route path={"/register"} element={<Register/>} /> 
             <Route path={"/customer"} element={<Customer/>} /> 
             <Route path={"/carrier"} element={<Carrier/>} /> 
            <Route path={"*"} element={<Navigate to={"/login"} />} />
        </Routes>
    </div>
  );
}

export default App;
