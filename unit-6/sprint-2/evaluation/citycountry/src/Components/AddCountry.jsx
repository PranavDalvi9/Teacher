import React, { useState } from 'react';
import 


export default function AddCountry() {
const[country , setCountry] = useState("");


const handleADD =() => {
    console.log("hello");
    console.log(country)

    fetch("http://localhost:8080/add-country" , {
        method: "POST",
        body: JSON.stringify({country}),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}


  return (
    <div>
      <input type="text" placeholder='Enter Country' onChange={ (e)=> {setCountry(e.target.value)}}/>
      <button onClick={handleADD}>ADD</button>
    </div>
  )
}
