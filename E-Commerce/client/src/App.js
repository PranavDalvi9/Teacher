import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Category from './Components/CategoryOfProducts/Category';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Category/>
    </div>
  );
}

export default App;
