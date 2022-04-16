import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_country } from '../Redux/CityData/Action';

// import 

export default function AddCountry() {
const[country , setCountry] = useState("");

const dispatch = useDispatch();

const countryData = useSelector((store) => store.cityData.countryData)
console.log("coun" , countryData)

const handleADD =() => {
    console.log("hello");
    console.log(country)
    // countryData
    console.log("coun" , countryData)
    fetch("http://localhost:8080/add-country" , {
        method: "POST",
        body: JSON.stringify({country}),
        headers:{
            "Content-Type": "application/json"
        }
    })  
    .then((res) => res.json())
    .then((res) => dispatch(add_country(country)))
    .catch((err) => console.log(err))
}


  return (
    <div>
      <input type="text" placeholder='Enter Country' onChange={ (e)=> {setCountry(e.target.value)}}/>
      <button onClick={handleADD}>ADD</button>
    </div>
  )
}
