// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styling.css"

export default function Home() {
const navigate = useNavigate()
  const [data , setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/add-city")
    .then((res) => res.json())
    .then((res) => setData(res))
  },[])


//   fetch("http://localhost:8080/add-city")
// .then((res) => res.json())
// .then((res) => setData(res))
// // .catch((err) => console.log(err))

// console.log(data)
  return (
    <div>
      <h1>HOME</h1>
      {/* <div>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/add-city")}}>Add city</button>
        <button onClick={() => {navigate("/add-country")}}>add country</button>
      </div> */}

      <div>
        <button>Filter by country</button>
        <button>sort by accesding</button>
        <button>sort by descending</button>
      </div>

      <table>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>


{
  data.map((e) => (
    <tr>     
          <td>{e.id}</td>
          <td>{e.countryr}</td>
          <td>{e.name}</td>
          <td>{e.population}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
    </tr>
  ))
}
        
      </table>
    </div>
  )
}
