import React from 'react'
import "./Home.css"

export default function Login() {
  return (
    <div>
        <h1 className='marginAutotext'>Login</h1>
        <label>User Name : </label>
        <input type="text" /><br /><br />

        <label>Password : </label>
        <input type="text" /><br /><br />

      <button>Login</button>

    </div>
  )
}
