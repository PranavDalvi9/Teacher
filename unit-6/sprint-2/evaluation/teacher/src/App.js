import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Teacher from './Components/Teacher';

function App() {
  return (
    <div >
      <h1>Teachers</h1>

      <button>Login</button>
      <button>Home</button>
      <button>Add Teacher</button>
      <button>Logout</button>

      <Login/>
      <Teacher/>
    </div>
  );
}

export default App;
