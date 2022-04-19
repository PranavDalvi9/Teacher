import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <div>

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

      <Button variant="contained">Login</Button><br />

      <Button variant="contained">Register</Button>
  
    </Box>
      
    </div>
  )
}
