import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Class() {
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
  
      <TextField label="Enter Class" variant="filled" color="success" focused /><br /><br />

      <Button variant="contained">Add Class</Button>
  
    </Box>
      
    </div>
  )
}
