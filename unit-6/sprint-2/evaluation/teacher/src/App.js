import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Teacher from './Components/Teacher';
import Home from "./Components/Home"
import { useNavigate } from 'react-router-dom';
import {Route, Routes} from "react-router-dom"

function App() {
  const navigate = useNavigate();
  return (
    <div >
      <h1>Teachers</h1>

      <button onClick={() =>{navigate("/login")}}>Login</button>
      <button onClick={() =>{navigate("/")}}>Home</button>
      <button onClick={() =>{navigate("/teacher")}}>Add Teacher</button>
      <button onClick={() =>{navigate("/")}}>Logout</button>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/teacher' element = {<Teacher/>}/>
        <Route path='/' element = {<Home/>}/>
      </Routes>
      {/* <Home/>
      <Login/>
      <Teacher/> */}
    </div>
  );
}

export default App;