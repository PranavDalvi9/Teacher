import React from 'react'
import { PinInput } from 'react-input-pin-code';

export default function Pin() {

    const [values, setValues] = React.useState(['', '', '','']);

  return (
    <div className="App">
        <div className='codeName'>
        <h1>Pin Input</h1>
        <p >Enter Your Verification Code</p>
        </div>
       <PinInput className="InputText"
      values={values}
      onChange={(value, index, values) => {setValues(values); console.log(values)}}
    />
    </div>
  )
}
