import React, { useState } from 'react'
import axios from 'axios';
export default function Class() {

    const [class1 , setClass1] = useState("");

    const handleAdd =() => {
        // console.log("hello")
        axios.post("http://localhost:2344/class",{class1}).then((res) => {console.log("res",res)})

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
