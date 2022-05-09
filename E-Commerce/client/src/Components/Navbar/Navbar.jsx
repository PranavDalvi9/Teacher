import React from 'react'
import "./Navbar.css"

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Navbar() {
  return (
    <div>
      <div className='NavBarMain'>
      <div>Name</div>
      <div>Home</div>
      <div>Men</div>
      <div>Women</div>
      <div>Baby Wears</div>
      <div>Blog</div>
      <div>Contact</div>
      <div><input type="text" placeholder='Search' /></div>

      <div>
      <Avatar src="/broken-image.jpg" />
      </div>

      <div>
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
