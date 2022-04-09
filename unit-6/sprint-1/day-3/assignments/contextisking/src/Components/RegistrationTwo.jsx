import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {Navigate} from "react-router-dom"


import {
  addName,
  addAge,
  addDatebirth,
  addState,
  addAddress,
  addPincode,
  addMakePost

} from "../Components/Redux/Actions";
// import {reducer} from "../Components/Redux/Actions"



export default function RegistrationTwo() {

  const name = useSelector((store) => store.name)
  const age = useSelector((store) => store.age)
  const dateofBirth = useSelector((store) => store.dateofBirth)
  const state = useSelector((store) => store.state)
  const address = useSelector((store) => store.address)
  const pincode = useSelector((store) => store.pincode)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const PostData = () =>{
    console.log("data post")
   const adding =  dispatch(addMakePost())
  }

  if(!name || !age ||  !dateofBirth){
  return <Navigate to ="/one"/>
  // return  navigate("/one")
   
  }
  return (
    <div>
      <h1>REG 2</h1>
      <input type="text" name="" id="" placeholder='State' required  onChange={(e) => {dispatch(addState(e.target.value))} } /><br />
      <input type="text" placeholder='Address' required onChange={(e) => {dispatch(addAddress(e.target.value))} } /><br />
      <input type="number" name="" id="" placeholder='Pincode' required onChange={(e) => {dispatch(addPincode(e.target.value))}} /><br />
      <button disabled = {!name || !age ||  !dateofBirth || !state || !address || !pincode}  onClick={() => {dispatch(addMakePost())}}>submit</button>
      
    </div>
  )
}
