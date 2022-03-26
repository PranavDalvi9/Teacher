import axios from 'axios'
import "./Rentals.css";
import { useState, useEffect } from "react";

export const Rentals = () => {

  const [houses,sethouses] = useState([]);

  useEffect(( )=>{
    function fetchData(url) { 
    axios.get(url).then(res=>{sethouses(res.data)})
    }
    fetchData('http://localhost:8080/houses')
    console.log(houses,"houses")
  },[]);

  const sortid= () => {
    let newarr = [];
    newarr = houses.sort((a,b)=>(b.id-a.id))
    console.log(houses)
    sethouses((houses)=>(newarr))
  }
  const alh= () => {
    let newarr = [];
    houses.sort((a,b)=>{return a.areaCode -b.areaCode})
    sethouses(newarr)
  }
  const ahl= () => {
    let newarr = [];
    houses.sort((a,b)=>{return b.areaCode -a.areaCode})
    sethouses(newarr)
  }
  const rlh= () => {
    let newarr = [];
    newarr = houses.sort((a,b)=>{return a.rent -b.rent})
    sethouses(newarr)
  }
  const rhl= () => {
    let newarr = [];
    newarr = houses.sort((a,b)=>{return b.rent - a.rent})
    sethouses(newarr)
  }

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={sortid} className="sortById">Sort by ID</button>
        <button onClick={rlh} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={rhl} className="sortByRentDesc">Rent High to low</button>
        <button onClick={alh} className="sortByAreaAsc">Area Low to high</button>
        <button onClick={ahl} className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};