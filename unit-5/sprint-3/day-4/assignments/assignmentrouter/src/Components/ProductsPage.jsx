import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsPage = () => {

  const [prod, setProd] = useState([])

useEffect(() =>{
  axios.get("http://localhost:8080/Data").then(({data}) => {
    console.log("data",data);
    setProd([...data])
  })
},[])


  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {prod.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
              justifyContent: "space-evenly",
              width: "500px",
              margin: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="name">{el.name}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      })}
    </>
  );
};
