import React from 'react'
import "./Teacher.css"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Teacher() {
  return (
    <div>

    <Box className='formTeacher'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <TextField label="Enter Name" variant="filled" color="success" focused /><br /><br />

      <TextField label="Enter Age" variant="filled" color="success" focused /><br /><br />

      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup><br /><br />

      <FormLabel id="demo-radio-buttons-group-label">Classes</FormLabel>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

      <Button variant="contained">Add</Button>


    </FormControl>


    {/* <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </FormGroup> */}

  
    </Box>

      
    </div>
  )
}
