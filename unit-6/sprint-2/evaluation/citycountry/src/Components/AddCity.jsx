import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function AddCity() {
const [name, setName] = useState("")
const [population , setPopulation] = useState("")
const [countryr , setCountryr] = useState("")

const countryData = useSelector((store) => store.cityData.countryData)
    console.log("ctryadd", countryData)

const HandleAdd = () => {
    console.log("hello")

    fetch("http://localhost:8080/add-city" , {
        method: "POST",
        body: JSON.stringify({name, population, countryr}),
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
        <input type="text" placeholder='Enter City Name' onChange={(e) => setName(e.target.value)}/><br/>

        <input type="text"  placeholder='Enter Population' onChange={(e) => setPopulation(e.target.value)}/><br/>

        {/* <input type="text" placeholder='Enter countryr' onChange={(e) => setCountryr(e.target.value)}/><br/> */}

        <select name="" id="">
        {
          countryData.map((e) => (
            <option key={e.id} value="">{e}</option>
          ))
        }
          
        </select>

        <button onClick={HandleAdd}>ADD</button>
    </div>
  )
}
