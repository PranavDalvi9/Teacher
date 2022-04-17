import React, { useState } from 'react'
import axios from 'axios';
import { cLoad1 , cSucc1, cFal1 } from './Redux/Classesss/Action';
import { useDispatch } from 'react-redux';


export default function Class() {
  const dispatch = useDispatch()

    const [class1 , setClass1] = useState("");

    const handleAdd =() => {
        // console.log("hello")
        dispatch(cLoad1())
        axios.post("http://localhost:2344/class",{class1})
        .then((res) => {dispatch(cSucc1(res.data.class1))})
        .catch((err) => {dispatch(cFal1(err))})

    }
 
  return (
    <div>
      <h1>Add Class</h1>

        <label>Class :  </label>
      <input type="text" placeholder='Add Class' onChange={ (e) => {setClass1(e.target.value)}}/><br/><br />

        <button onClick={handleAdd}>Add</button>

    </div>
  )
}
