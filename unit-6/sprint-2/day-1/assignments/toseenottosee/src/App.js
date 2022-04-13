import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Login from "./Components/Login";
import { Login } from './Components/Login';
import Signup from "./Components/Signup";
import Getrestaurants from "./Components/Getrestaurants";

function App() {
  return (
    <div className="App">
     <h1>hello</h1>


     <Routes>
       <Route path='/login' element = {<Login/>}/>

       <Route path='/signup' element = {<Signup/>}/>

       <Route path='/get-restaurants' element = {<Getrestaurants/>}/>
     </Routes>
    </div>
  );
}

export default App;
