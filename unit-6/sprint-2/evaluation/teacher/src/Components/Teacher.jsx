// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Teacher() {

    const [name , setName] = useState("");
    const [gender, setGender] = useState("");
    const [age , setAge] = useState("")
    const [class1, setClass1] = useState([])

    const [data , setData] = useState([])
  
    useEffect(()=> {
      axios.get('http://localhost:2344/class').then((res)=> setData(res.data));
      // console.log("data1",data[0].age)
    },[])
    // console.log("data",data)


    // axios.post("http://localhost:2344/teacher",)


    const handleAdd = () => {
        // console.log("hello")
        const userData = {
            name,
            gender,
            age,
            classes: class1
        }
        console.log(userData)

        axios.post("http://localhost:2344/teacher",userData).then((res) => {console.log("res",res)})
    }

    const addClass = (str) =>{
        setClass1([...class1, str])
        console.log(class1)
    }

  return (
    <div>
      <h1>Add Teacher</h1>
    <label>Name : </label>
      <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value) }/><br /><br />
      
      {/* <label>Gender : </label>
      <div>
          
          <label>
              <input type="radio" 
                // checked = "male"
                value={"male"}
                onChange =  {(e)=> {setGender(e.target.value) ; console.log(gender)}}
               />Male
          </label><br />

          <label>
              <input type="radio" 
                // checked = "Female"
               />Female
          </label><br />

          <label>
              <input type="radio" 
                // checked = "Other"
               />Other
          </label><br />
      </div><br /> */}

<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e) => {setGender(e.target.value);  
            // console.log(e.target.value)
            }}  />
        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e) => {setGender(e.target.value);  
        // console.log(e.target.value)
        }} />
        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={(e) => {setGender(e.target.value) ;  
            // console.log(e.target.value)
            }}/>
      </RadioGroup>
    </FormControl>

      

        <label>Age : </label>
      <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value) } /><br /><br />


     <label>Classes</label>
      {
          data.map((e) => (
            <div>
            
            <input type="checkbox"
            onChange={(ab)=>{addClass(e._id)}}

            />{e.class1}
        </div>
          ))
      } <br /> 

{/* <FormGroup>
    <h3>Classes</h3>
    {
        data.map((ab) => (
            <FormControlLabel control={<Checkbox/>} label={ab.class1} onClick ={(e) => {addClass(e.target.value) ; console.log(e.target.value)}} />
        ))
    }
      
</FormGroup> */}


    <button onClick={ handleAdd}>ADD</button>

    </div>
  )
}
