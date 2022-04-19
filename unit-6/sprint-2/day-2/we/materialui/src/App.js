import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Teacher from './Components/Teacher';
import Login from './Components/Login';
import Register from './Components/Register';
import Class from './Components/Class';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <h1>Material UI</h1>
      <Navbar/>
      <Search/>
      {/* <Teacher/> */}
      {/* <Login/> */}
      {/* <Register/> */}

      <Class/>
    </div>
  );
}

export default App;
