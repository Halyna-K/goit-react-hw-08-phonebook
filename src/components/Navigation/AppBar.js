import * as React from 'react';
import { useSelector } from "react-redux";
import { getAuth } from '../../redux/auth/selectors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const styles = {
  container: {
    color: '#212529',
    justifyContent: 'space-around',
    backgroundColor: '#1c5d67'
  },
}

export default function MenuAppBar() {
  const isAuth= useSelector(getAuth)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 2}}  >
      <AppBar position="static">
        <Toolbar style= {styles.container} >
        <Navigation/>
          {!isAuth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem to="/login" onClick={handleClose}>
                  <AuthNav/>
                </MenuItem>
              </Menu>
            </div>
          ) : (
          <MenuItem onClick={handleClose}>
            <UserMenu/>
          </MenuItem>
        )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
