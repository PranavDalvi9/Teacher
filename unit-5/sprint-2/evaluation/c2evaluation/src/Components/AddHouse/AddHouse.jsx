import axios from 'axios'
import { useState, useEffect } from "react";

export const AddHouse = () => {

  const [houses, sethouses] = useState({ 
    "name" :"",
     "ownerName" :"", 
     " address" :"", " areaCode" :"", " rent" :"", " preferredTenant" :"", "image" :""

   });

const formSubmit = (e) => {
  
  e.preventDefault()
  function postData(url){
  axios.post(url,houses).then(console.log('posted'))
  }
  postData('http://localhost:8080/houses')

}   

const onChangeForm = (e) => {

    const {id,value} = e.target
    sethouses({  ...houses, [id]:value  })
    // console.log(houses)

}

  return (
    <div className="addHouseContainer">



{/* <input id='' placeholder='Enter '  onChange={onChangeForm}  id='' placeholder='Enter '  onChange={onChangeForm} className='px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400' required />
<input id='' placeholder='Enter '  onChange={onChangeForm}  type='submit' className='px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500'  /> */}



      <form onSubmit={formSubmit}>
        <label>name</label>
        <input id='name' placeholder='Enter '  onChange={onChangeForm}  type="text" className="name" required />
        <br />
        <label>ownerName</label>
        <input id='ownerName' placeholder='Enter '  onChange={onChangeForm}  type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input id='address' placeholder='Enter address '  onChange={onChangeForm}  type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input id='areaCode' placeholder='Enter AreaCode'  onChange={onChangeForm}  type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input id='rent' placeholder='Enter rent '  onChange={onChangeForm}  type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input id='bachelar'  onChange={onChangeForm}  checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input id='married' placeholder='Enter '  onChange={onChangeForm}  checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input id='' placeholder='Enter '  onChange={onChangeForm}  type="text" className="image" required />
        <br />
        <input id='' placeholder='Enter '  onChange={onChangeForm}  className="submitBtn" type="submit" />
      </form>
    </div>
  );
};