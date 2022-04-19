import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Navbar() {


    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };


  return (
    <div className='navBarMain'>
          <Box sx={{ width: 'auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" onClick ={() => {console.log("here")}} />
          <Tab label="Add Teacher" onClick ={() => {console.log("here2")}} />
          <Tab label="Add Class" onClick ={() => {console.log("here3")}} />
          <Tab label="Login" onClick ={() => {console.log("here3")}} />
        </Tabs>
      </Box>
    </Box>
    </div>
  )
}
