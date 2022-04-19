import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Login() {
  const navigate = useNavigate();

  return (
    <div className='App'>

<h1>Login</h1>
        
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="User Name" variant="filled" color="success" focused /><br /><br />

      <TextField label="Password" variant="filled" color="success" focused /> <br /><br />

      <Button className='ButtonDiv' variant="contained">Login</Button> <br /><br />

      <Button className='ButtonDiv' variant="contained"  onClick ={() => {navigate("/register")}}>Register</Button>

  
  

      
  
    </Box>
      
    </div>
  )
}
