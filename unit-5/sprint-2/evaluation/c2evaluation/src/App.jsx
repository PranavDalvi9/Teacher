// import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        <AddHouse />
      </button>
      {/* Show component based on state */}
      <Rentals/>
      <br />
    </div>
  );
}

export default App;