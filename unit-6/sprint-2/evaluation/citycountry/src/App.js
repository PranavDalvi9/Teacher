import logo from './logo.svg';
import './App.css';
import AddCountry from './Components/AddCountry';
import AddCity from './Components/AddCity';
import { useNavigate} from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>CITY COUNTRY</h1>
      <div>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/add-city")}}>Add city</button>
        <button onClick={() => {navigate("/add-country")}}>add country</button>
      </div>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/add-country' element={<AddCountry/>}/>
        <Route path='/add-city' element={<AddCity/>}/>
      </Routes>
        {/* <AddCountry/> 
        <AddCity/>
        <Home/> */}
    </div>
  );
}

export default App;
