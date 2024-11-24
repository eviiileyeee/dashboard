import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/th (1).jpg";
import { Button } from "react-bootstrap";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
  // Separate state for shopping cart menu
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const isCartMenuOpen = Boolean(cartAnchorEl);
  
  // Separate state for profile menu
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  // Shopping cart menu handlers
  const handleCartClick = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  // Profile menu handlers
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <nav className="container-fluid w-100">
          <div className="row d-flex align-items-center">
            <div className="col-sm-2 part-1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="ml-2 mt-1"> ECOM</span>
              </Link>
            </div>

            <div className="col-sm-3  d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7  d-flex align-items-center justify-content-end part-3">
              <Button className="rounded-circle mr-3">
                <MdLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdLanguage />
              </Button>
              
              {/* Shopping Cart Button and Menu */}
              <Button 
                className="rounded-circle mr-3"
                onClick={handleCartClick}
                aria-controls={isCartMenuOpen ? 'cart-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isCartMenuOpen ? 'true' : undefined}
              >
                <MdOutlineShoppingCart />
              </Button>
              <Menu
                id="cart-menu"
                anchorEl={cartAnchorEl}
                open={isCartMenuOpen}
                onClose={handleCartClose}
                onClick={handleCartClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleCartClose}>Cart Item 1</MenuItem>
                <MenuItem onClick={handleCartClose}>Cart Item 2</MenuItem>
                <Divider />
                <MenuItem onClick={handleCartClose}>View Cart</MenuItem>
                <MenuItem onClick={handleCartClose}>Checkout</MenuItem>
              </Menu>

              <Button className="rounded-circle mr-3">
                <MdOutlineEmail />
              </Button>
              <Button className="rounded-circle mr-3">
                <FaRegBell />
              </Button>

              {/* Profile Button and Menu */}
              <div className="myAccWrapper">
                <Button 
                  className="myAcc d-flex align-items-center"
                  onClick={handleProfileClick}
                  aria-controls={isProfileMenuOpen ? 'profile-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isProfileMenuOpen ? 'true' : undefined}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://harendra.netlify.app/assets/p.jpg" alt="User" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Harendra</h4>
                    <p className="mb-0">@eviiileyeee</p>
                  </div>
                </Button>
                <Menu
                  id="profile-menu"
                  anchorEl={profileAnchorEl}
                  open={isProfileMenuOpen}
                  onClose={handleProfileClose}
                  onClick={handleProfileClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleProfileClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleProfileClose}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleProfileClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleProfileClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleProfileClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;