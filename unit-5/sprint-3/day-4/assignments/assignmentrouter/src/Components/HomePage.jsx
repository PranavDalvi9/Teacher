import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {

const [prod, setProd] = useState([])

useEffect(() =>{
  axios.get("http://localhost:8080/Data").then(({data}) => {
    console.log(data);
    setProd([...data])

  })
},[])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        
        {/* Iterate over products and show links */}
        {prod.map((el) => {
          return <Link to={``}>{/* Show product image and name */}</Link>;
        })}
      </div>
    </>
  );
};
