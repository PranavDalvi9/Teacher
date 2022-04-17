import React, { useState } from 'react'
import axios from 'axios';
import { getClasses2 } from './Redux/Classesss/Action';
import { useDispatch } from 'react-redux';


export default function Class() {
  const dispatch = useDispatch()

    const [class1 , setClass1] = useState("");

    const handleAdd =() => {
        console.log("hello")
        dispatch(getClasses2(class1))

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
