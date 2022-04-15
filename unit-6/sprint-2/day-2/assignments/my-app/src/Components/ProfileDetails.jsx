import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../Redux/Login/Action"


export default function ProfileDetails() {
    // var token = "49b032d1552a1d15f799ddbc96e8ad11";
    // var username = "masai"
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({})

    const userName = useSelector((store) => store.login.userName)
    const token = useSelector((store) => store.login.token);

    useEffect(() =>{
        fetch (`https://masai-api-mocker.herokuapp.com/user/${userName}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((res) => setUserData(res))
        .catch((err) => console.log(err))
    },[]);


    const handleLogout = () => {
        // console.log("hello")
        dispatch(logout())
    }

// console.log("usDatata", userData)
  return (
   <>
    <div>
      <h3>Name: {userData.name}</h3>
      <h4>Email: {userData.email}</h4>
      <h4>Mobile: {userData.mobile}</h4>
      <h4>Username: {userData.username}</h4>
      <h4>Description: {userData.description}</h4>
      <br /><br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>

    
   </>
  )
}
