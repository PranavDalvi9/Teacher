import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className='LoginDiv'>

        
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="Enter Name" variant="filled" color="success" focused /><br /><br />

      <TextField label="Enter Email" variant="filled" color="success" focused /><br /><br />

      <TextField label="Enter Mobile Number" variant="filled" color="success" focused /><br /><br />

      <TextField label="Enter Username" variant="filled" color="success" focused /><br /><br />

      <TextField label="Enter Password" variant="filled" color="success" focused /> <br /><br />

      {/* <Button variant="contained">Login</Button><br /> */}

     <div>
     <Button className='ButtonDiv' variant="contained">Register</Button><br /><br />

<Button className='ButtonDiv' variant="contained"  onClick ={() => {navigate("/login")}}>Login</Button>
     </div>
  
    </Box>
      
    </div>
  )
}
