import logo from './logo.svg';
import './App.css';
import AddCountry from './Components/AddCountry';
import AddCity from './Components/AddCity';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <h1>CITY COUNTRY</h1>

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
