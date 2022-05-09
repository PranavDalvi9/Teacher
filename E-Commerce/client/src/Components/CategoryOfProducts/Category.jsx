import React from 'react'
import "./Category.css"
import { useNavigate } from 'react-router-dom'

export default function Category() {

  const navigate = useNavigate()

  return (
    <div className='Category'>
      <div onClick={() => navigate("/mens_Fashion")}><p className='CategoryName'>Men's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => navigate("/womens_Fashion")}><p className='CategoryName'>Women's Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
      <div onClick={() => navigate("/baby_Fashion")}><p className='CategoryName'>Babay Fashion</p><p className='CategoryShopNow'>Shop Now</p></div>
    </div>
  )
}
