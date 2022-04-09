import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import {
    addName,
    addAge,
    addDatebirth

} from "../Components/Redux/Actions";



export default function RegistrationOne() {

    const name = useSelector((store) => store.name)
    const age = useSelector((store) => store.age)
    const dateofBirth = useSelector((store) => store.dateofBirth)
    const dispatch = useDispatch()

    const navigate = useNavigate();
  return (
    <div>
      <h1>REG 1</h1>
      <input type="text" name='Name' placeholder='Name' required onChange={(e)=>{dispatch(addName(e.target.value))}} /><br />
      <input type="number" name='age' placeholder='age' required onChange={(e) => {dispatch(addAge(e.target.value))}} /><br />
      <input type="date" name="BithDate" id="" placeholder='Bith Date' required onChange={(e) => {dispatch(addDatebirth(e.target.value))}} /><br />
      <button disabled = {!name || !age ||  !dateofBirth} onClick={() => navigate("/two")}>Next</button>
    
    </div> 
  )
}
