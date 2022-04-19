import React from 'react'

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Teacher from './Components/Teacher';
import Home from "./Components/Home"
import { useNavigate } from 'react-router-dom';
import {Route, Routes} from "react-router-dom"
import Class from './Components/Class';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Register from './Components/Register';


function App() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className='App' >
      {/* <h1>Teachers</h1> */}

      {/* <div className='marginAutotext'>
      <button onClick={() =>{navigate("/login")}}>Login</button>
      <button onClick={() =>{navigate("/")}}>Home</button>
      <button onClick={() =>{navigate("/teacher")}}>Add Teacher</button>
      <button onClick={() => {navigate("/class")}}>Add Class</button>
      <button onClick={() =>{navigate("/")}}>Logout</button>
      </div> */}

      <div className='NavbarDiv'>
        <Box sx={{ width: 'auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" onClick ={() => {navigate("/")}} />
          <Tab label="Add Teacher" onClick ={() => {navigate("/teacher")}} />
          <Tab label="Add Class" onClick ={() => {navigate("/class")}} />
          <Tab label="Login" onClick ={() => {navigate("/login")}} />
        </Tabs>
      </Box>
    </Box>
      </div>


      

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/teacher' element = {<Teacher/>}/>
        <Route path='/class' element= {<Class/>}/>
        <Route path='/' element = {<Home/>}/>
      </Routes>
      {/* <Home/>
      <Login/>
      <Teacher/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
