import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isAuth = useSelector(getAuth);
  const shouldRedirect = isAuth && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;

// import { Navigate } from 'react-router';

// const PublicRoute = ({isAuth, component: C}) => {
//     return (
//         <>
//         {isAuth ? <Navigate to='/contacts'/> : <C/>}

//         </>
//     )
// }
// export default PublicRoute;
