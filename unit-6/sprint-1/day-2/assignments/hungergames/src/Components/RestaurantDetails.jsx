
import "./RestaurantDetails.css"
import React, { useEffect, useState } from 'react'
import axios from "axios";
// import { useEffect } from "react";

export default function RestaurantDetails() {

    const[data, setData] = useState([]);
    const[filterdata, setFilterdata] = useState([])
    const[rating, setRating] = useState(3)
    const[payMent, setPayMent] = useState("card")

useEffect(() => {
 axios.get("http://localhost:8080/get-restaurants", {
   params:{
     _page : 1,
     _limit: 5,
     Rating:rating,
     Payment:payMent
   }
 }).then(res => setData(res.data));
    // console.log("new",data);
    console.log(rating)
}, [rating, payMent])


  const AllData = () =>{
    axios.get("http://localhost:8080/get-restaurants").then(res => setData(res.data));
    // console.log("new",data);
    console.log(rating)
  }



const handelSort = ()=>{
  const sortdata = [...data]
 sortdata.sort(function(a,b){

     return a.Costfor2 - b.Costfor2

 })
 setData(sortdata)
 console.log("asc",data)
}

const handelSortDesc = ()=>{
  const sortdata = [...data]
 sortdata.sort(function(a,b){

     return b.Costfor2 - a.Costfor2

 })
 setData(sortdata)
}

  return (
    <div id="RestaurantDetails">
      <div id='sorting'>
          <button onClick={() => {setRating(4)}}>Rating 4+</button>
          <button onClick={() => {setRating(3)}}>Rating 3+</button>
          <button onClick={() => { setRating(2)}}>Rating 2+</button>
          <button onClick={() => {setRating(1)}}>Rating 1+</button>
          <button onClick={() => {setPayMent("card")}}>Card Payment</button>
          <button onClick={() => {setPayMent("online")}}>Online Payment</button>
          <button onClick={() => {
            handelSort()
          }} >Ascending</button>
          <button onClick={() =>{
            handelSortDesc()
          }}>Decending</button>
          <button onClick={() => {AllData()}}>All</button>
      </div>

      <div className='productsDis'>
          {
              data.map((e) => (
                <div className='indivProd'>
              
                <div id="ProdAllinfo">
                    <div className="LeftImage">
                        <img src= {e.image} alt="" />
                    </div>
                    <div className="leftProdDet">
                      <div className="ProdName">{e.Name}</div>
                      <div className="ProdCat">{e.Category}</div>
                      <div className="Costfor2">Cost ₹{e.Costfor2} for two</div>
                      <div className="paymentMode">Accepts {e.Payment} Payment only</div>
                      
                    </div>
    
                    <div className="rightProdDet">
                        <div className="RatingProd">{e.Rating} ★</div>
                        <div>{e.Votes} votes</div>
                        <div>{e.Reviews} reviews</div>
                    </div>
                    
                </div>
    
                <div>
                    <button className="orderNow">Order Online ></button>
                </div>
    
                
              </div>
              ))
          }
      </div>

    </div>
  )
}
