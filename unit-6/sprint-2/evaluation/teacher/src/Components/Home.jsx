import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"

// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Home.css"



export default function Home() {


  const [data, setData] = useState([])
  const [pagNum, setPagNum] = useState(1)
  const[doctor, setDoctor] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:2344/teacher`,{
      params:{
        page:pagNum,
        size:4,
        name:doctor

      }
    }).then((res) => setData(res.data));
    console.log("updated");
  }, [pagNum, doctor])
  console.log("data", data)

  return (
    <div >
      <h1 className='marginAutotext' className="App">Home</h1>
{/* className="App" */}
      <div className='marginAuto'>
      <Box
      sx={{
        width: "90%",
        maxWidth: '100%',
      
      }}
    >
      <TextField fullWidth label="ENTER TEACHER" id="fullWidth" onChange={(e)=>{setDoctor(e.target.value)}} />
    </Box> <br />
      </div>

      {/* <input type="text"  placeholder='Enter Doctor' onChange={(e) => {setDoctor(e.target.value) ; console.log("doc",doctor)}}/>
      <button>Search</button> */}


      <div className='individualTec'>
      {
        data.map((e) => (


          <div className='IndiviTeachDat' >
            <h3>Name : {e.name}</h3>
            <h3>Age : {e.age}</h3>
            <h3>Gender : {e.gender}</h3>
            <h3>classes : {e.classes.length}</h3>
            <div className='classFlex'>
            <h3>Classes :</h3>
              {
                e.classes.map((el) => (
                  <p>{el.class1}</p>
                ))
              }
            </div>

          </div>
        ))
      }

      </div>
      

      <div className='PaginationClass'>
        <button onClick={()=>{setPagNum(pagNum-1)}}>Previous</button>
        <button onClick={()=>{setPagNum(1)}}>1</button>
        <button  onClick={()=>{setPagNum(2)}}>2</button>
        <button onClick={()=>{setPagNum(3)}}>3</button>
        <button onClick={()=>{setPagNum(4)}}>4</button>
        <button onClick={()=>{setPagNum(5)}}>5</button>
        <button onClick={()=>{setPagNum(pagNum+1)}}>Next</button>
      </div>
    </div>
  )
}
