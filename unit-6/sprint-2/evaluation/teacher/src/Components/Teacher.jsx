import React from 'react'

export default function Teacher() {
  return (
    <div>
      <h1>Add Teacher</h1>
    <label>Name : </label>
      <input type="text" placeholder='Name' /><br /><br />
      
      <label>Gender : </label>
      <div>
          
          <label>
              <input type="radio" 
                // checked = "Male"
               />Male
          </label><br />

          <label>
              <input type="radio" 
                // checked = "Male"
               />Female
          </label><br />

          <label>
              <input type="radio" 
                // checked = "Male"
               />Other
          </label><br />
      </div><br />

        <label>Age : </label>
      <input type="number" placeholder='Age' /><br /><br />

        <label>Classes : </label>
      <input type="text" placeholder='Classes'/>
      <button>Add Class</button>

      
    </div>
  )
}
