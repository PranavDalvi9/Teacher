import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {


  const [data , setData] = useState([])
  
  useEffect(()=> {
    axios.get('http://localhost:2344/teacher').then((res)=> setData(res.data));
    // console.log("data1",data[0].age)
  },[])
  console.log("data",data)

  return (
    <div>
      <h1>Home</h1>

{
  data.map((e) => (
    <div>
    <h3>Name : {e.name}</h3>
    <h3>Age : {e.age}</h3>
    <h3>Gender : {e.gender}</h3>
    <h3>Classes :</h3>
    {/* {
      e.classe.map((el) => (
        <p>{el.class1}</p>
      ))
    } */}
    <div>

    </div>
    
    </div>
  ))
}
      
    </div>
  )
}