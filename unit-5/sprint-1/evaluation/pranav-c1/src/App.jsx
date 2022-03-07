import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  // const data = ["Books", "Pens", "Notebooks",  "InkPens"]
  const [addBook, setAddBook] = useState(13)
  return (
  <div className="items">

    <span>Books:</span>

    <button className="addBook" onClick={ () => {
      setAddBook(addBook+1)
    }}>+</button>

    <button className="remBook" onClick={ () => {
      setAddBook(addBook-1)
    }}>-</button>

    <span className="totalBooks">{addBook}</span>
  </div>
  );
}

export default App;
