// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export default function Home() {

  const [data , setData] = useState([])


  fetch("http://localhost:8080/add-city")
.then((res) => res.json())
.then((res) => setData(res))
.catch((err) => console.log(err))

// console.log(data)
  return (
    <div>
      <h1>HOME</h1>

      <table>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>


{}
        
      </table>
    </div>
  )
}
