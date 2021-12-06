import * as React from 'react';
import s from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import { getAuth } from '../../redux/auth/selectors'

export default function Navigation() {
  const isAuth= useSelector(getAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(anchorEl)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <nav>
      <ul className={s.container}>
        <li >
          <Link  to="/" className={s.text} >
          <IconButton
            size="large"
            edge="start"
            aria-label="home"
            onClick={handleMenu}
            sx={{ mr: 1 }}>
            <HomeIcon />
          </IconButton>
          </Link>
          </li>
{isAuth &&
         <li  >
          <Link  to="/contacts" className={s.text}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          </Link>
        </li>
         }
      </ul>
    </nav>
  );
}
