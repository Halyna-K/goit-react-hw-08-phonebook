import s from "./Navigation.module.css";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useDispatch,useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';
import { getName } from '../../redux/auth/selectors';

  const styles = {
    avatar: {
      marginRight: 10,
      color: 'black',
      backgroundColor: 'teal'
    },
    name: {}
  }

export default function UserMenu() {
  const dispatch = useDispatch();
   const contact = useSelector(getName);

  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  return (
      <div className={s.container}>
      <Avatar alt='name' src="/images/avatar/1.jpg" style= {styles.avatar} >{contact.name}
      </Avatar>
          <Typography style= {styles.name} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome, {contact.name}
          </Typography>

        <Button
        type="button"
        variant="none"
        onClick={handleLogout}
        size="small"
        color="grey"
      > <LogoutIcon/>
      </Button>
      </div>
  );
}
