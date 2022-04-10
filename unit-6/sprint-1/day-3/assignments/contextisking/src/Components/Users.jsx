import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Users() {

    const[data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8080/addData").then(res => {setData(res.data)})
    },[])
    
    console.log(data)
  return (
    <div>
      <h1>Users</h1>

      <table>
          <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Date Of Birth</th>
          <th>State</th>
          <th>Address</th>
          <th>Pincode</th>
          </tr>
    

    {
        data.map((e) => (
            <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.dateofBirth}</td>
          <td>{e.state}</td>
          <td>{e.address}</td>
          <td>{e.pincode}</td>
          </tr>
        ))
    }
          
          
          
      </table>
    </div>
  )
}
