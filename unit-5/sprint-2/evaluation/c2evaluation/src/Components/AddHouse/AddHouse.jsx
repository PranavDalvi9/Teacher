import { useState } from "react";

import axios from "axios";


export const AddHouse = () => {

const[data, setData] = useState({})

const handleChange = (e) =>{
  // console.log(e.target.value);
  const{id, value} = e.target;


  setData({ ...data, [id]:value})
}

const submitOn =(e) =>{
  e.preventDefault();
  console.log(data)
  axios.post("http://localhost:8080/houses", (data))
}

  return (
    <div className="addHouseContainer">
      <form onSubmit={submitOn}>

        {/* <input type="text" /> */}
        
        <label>name</label>
        <input type="text" className="name" id="name" onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" id="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address" id="address" required onChange={handleChange} />
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" id="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input type="text" className="rent" id="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" id="preferredTenant" value={"bachelor"} onChange={handleChange}/>
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" id="preferredTenant" value={"married"} onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={""} type="text" className="image"  />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
