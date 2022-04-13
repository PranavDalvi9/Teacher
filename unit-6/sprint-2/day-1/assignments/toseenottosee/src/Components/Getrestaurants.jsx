import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { addData } from '../Redux/Actions'
import { useDispatch , useSelector } from 'react-redux'
import {Navigate} from "react-router-dom"



export default function Getrestaurants() {

  const state = useDispatch((store) => store.data)
// const navigate = useNavigate()
console.log(state.data);
if(state === false){
  // navigate("/login")
  <Navigate to={"/login"}></Navigate>
}
else{
  // navigate("/get-restaurants")
}



  const [data, setData]  = useState([])
 useEffect(() =>{
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    console.log(res.data);
    setData(res.data)
  })
 },[])
  return (
    <div>
      <h1>Get-restaurants</h1>

      {
        data.map((e) => (
          <div>{e.title}  <img src={e.image} alt="" width={100} height = {100}/></div>
         
        ))
      }
    </div>
  )
}
