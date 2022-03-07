import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const data = ["Books", "Pens", "Notebooks",  "InkPens"]
  const [addBook, setAddBook] = useState(13);
  const [addPen, setPen] = useState(10);
  const [addNotebook, setNotebook] = useState(44);
  const [addInkpen, setAddInkpen] = useState(78);
  return (
    <>
      <div className="items">
        <span>Books:</span>

        <button
          className="addBook"
          onClick={() => {
            setAddBook(addBook + 1);
          }}
        >
          +
        </button>

        <button
          className="remBook"
          onClick={() => {
            // if(addBook > 13){
              setAddBook(addBook - 1);
            // }
           
          }}
        >
          -
        </button>

        <span className="totalBooks">{addBook}</span>
      </div>

      <div className="items">
        <span>Pens:</span>

        <button
          className="addPen"
          onClick={() => {
            setPen(addPen + 1);
          }}
        >
          +
        </button>

        <button className="remPen"
         onClick={() => {
          setPen(addPen - 1);
        }}
        >
        -
    </button>

        <span className="totalPens">{addPen}</span>
      </div>

      <div className="items">
        <span>Notebooks:</span>

        <button
          className="addNotebook "
          onClick={() => {
            setNotebook(addNotebook + 1);
          }}
        >
          +
        </button>

        <button
          className="remNotebook "
          onClick={() => {
            setNotebook(addNotebook - 1);
          }}
        >
          -
        </button>

        <span className="totalNotebooks">{addNotebook}</span>
      </div>

      <div className="items">
        <span>InkPens:</span>

        <button
          className="addInkpen "
          onClick={() => {
            setAddInkpen(addInkpen + 1);
          }}
        >
          +
        </button>

        <button
          className="remInkpen "
          onClick={() => {
            setAddInkpen(addInkpen - 1);
          }}
        >
          -
        </button>

        <span className="totalInkpens">{addInkpen}</span>
      </div>
    </>
  );
}

export default App;
