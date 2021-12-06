import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getAuth } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isAuth = useSelector(getAuth);
  return isAuth ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;


// const PrivateRoute = ({isAuth, component: C}) => {
//     return (
//         <>
//         {isAuth ? <C/> : <Navigate to='/login'/>}

//         </>
//     )
// }
// export default PrivateRoute;
