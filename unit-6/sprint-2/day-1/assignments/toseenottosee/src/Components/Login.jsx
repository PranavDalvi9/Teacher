
import { useState } from "react"
import React from "react";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { store } from "../Redux/Store";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { change_sucess } from "../Redux/Actions";


export const Login = ()=>{

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [email,setEmail] = useState("");
    const [token,setToken] = useState(false)

    const [password,setPassword] = useState("")

    // const useAuth = useSelector((store)=>
    //     store.isAuth
    // )


    
    // console.log("Auth",useAuth)

    const handelSubmit = ()=>{
        let data = {
            email,
            password
        }
        console.log(data)

        axios.post("https://loginauthapi.herokuapp.com/login", data ).then(function(res){
            // console.log(res.data);
            dispatch(change_sucess(token));
            setToken(true)
            // console.log("tokem2",token)
        }).then(function(res){
           
        })
        
        
    }
    
    // React.useEffect(()=>{
    //     if(useAuth == true){
    //         navigate("/product")
            
    //     }else{
    //         navigate("/login")
    //     }

    // },[useAuth])

    return(
        <div>

<h1>Login</h1>
   <input type="text" placeholder="Enter Email"  onChange={(e)=>{setEmail(e.target.value)}}/>

   <input type="text"  placeholder="Enter pass"  onChange={(e)=>{setPassword(e.target.value)}}/>

   <button onClick={handelSubmit}>Submit</button>


        </div>
    )
}