import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {



  const [list, setList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) => {
          console.log(data);
          setList([...data])
        })
  },[])


  
  // get all books when user lands on the page
  // populate them as mentioned below


  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer" style={{display: "flex" , flexWrap: "wrap" , gap:"4%", }}>
        {
          list.map((e) => (
            <div style={{textAlign:"center", height: "400px"}}>
              <img src= {e.image_url} alt="" />
              <h3>{e.title}</h3>
              <p>{e.price}</p>
              
         
              
            </div>
          ))
        }
      </Main>
    </div>
  );
};
