import React from 'react'
import "./Navbar.css"

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Avatar from '@mui/material/Avatar';

import { useNavigate } from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Navbar() {


  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <div>
      <div className='NavBarMain'>
      <div onClick={()=> navigate("/")}>Name</div>
      <div onClick={()=> navigate("/")}>Home</div>
      <div onClick={()=> navigate("/mens_Fashion")}>Men</div>
      <div onClick={()=> navigate("/womens_Fashion")}>Women</div>
      <div onClick={()=> navigate("/baby_Fashion")}>Baby Wears</div>
      <div onClick={()=> navigate("/blog")}>Blog</div>
      <div onClick={()=> navigate("/contact_us")}>Contact</div>
      <div onClick={()=> navigate("/login")}><input type="text" placeholder='Search' /></div>

      <div onClick={handleLogin}>
      <Avatar src="/broken-image.jpg" />
      </div>

      <div onClick={()=> navigate("/cart")}>
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={5} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
      </div>
      </div>
    </div>
  )
}
