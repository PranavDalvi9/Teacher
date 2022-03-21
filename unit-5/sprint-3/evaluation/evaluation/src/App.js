// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;


import { useEffect } from "react";
import { AllRoutes } from "./Routes/Routes";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) => {
          console.log(data)
        })
  })


  return (
    <div className="App">

      <AllRoutes />
    </div>
  );
}

export default App;

