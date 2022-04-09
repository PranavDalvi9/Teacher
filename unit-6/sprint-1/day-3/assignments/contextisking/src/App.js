import logo from './logo.svg';
import './App.css';
import RegistrationOne from './Components/RegistrationOne';
import RegistrationTwo from './Components/RegistrationTwo';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Context is King</h1>
      <Routes>
        <Route path = "/one" element = {<RegistrationOne/>} />
        <Route path='/two' element= {<RegistrationTwo/>} />
      </Routes>
      
      {/* <RegistrationOne/>
      <RegistrationTwo/> */}
    </div>
  );
}


export default App;
