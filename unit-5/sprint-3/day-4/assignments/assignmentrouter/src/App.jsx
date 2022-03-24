import { Route ,Routes} from "react-router-dom";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { ProductsDetailsPage } from "./Components/ProductsDetailsPage";
import { ProductsPage } from "./Components/ProductsPage";
// import { Routes } from "./Components/Routes";

function App() {
  return (
    <div className="App">
   
      <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/products" element = {<ProductsPage/>}/>
      <Route path="/products/:id" element = {<ProductsDetailsPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
