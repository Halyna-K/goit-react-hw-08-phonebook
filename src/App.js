import "./App.css";
import { useEffect,lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import PrivateRoute from './components/routes/Private';
import PublicRoute from './components/routes/Public';
import ButtonAppBar from "./components/Navigation/AppBar";
import { currentThunk } from './redux/auth/thunks';
import { useFetchContactsQuery } from './redux/auth/slices';
import { getAuth, getRefresh } from './redux/auth/selectors';
// import Home from './components/pages/Home/Home';
// import Contacts from './components/pages/Contacts/Contacts';
// import Login from './components/pages/auth/Login';
// import Register from './components/pages/auth/Register';
// import NotFound from './components/pages/NotFound/NotFound';

 const Home = lazy(() =>
   import("./components/pages/Home/Home" /* webpackChunkName: "Home" */))
 const Contacts = lazy(() =>
   import("./components/pages/Contacts/Contacts" /* webpackChunkName: "Contacts" */));
 const Login = lazy(() =>
   import("./components/pages/auth/Login" /* webpackChunkName: "Login" */));
 const Register = lazy(() =>
   import("./components/pages/auth/Register" /* webpackChunkName: "Register" */));
 const NotFound = lazy(() =>
   import("./components/pages/NotFound/NotFound" /* webpackChunkName: "NotFound" */));


function App () {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuth);
  const isRefresh = useSelector(getRefresh);
  const {data} = useFetchContactsQuery();

    useEffect(() => {
  if (!isAuth)
    data &&
     dispatch(currentThunk(data))
    },[data,dispatch,isAuth])

  return (
    !isRefresh && (
    <div className="App">
      <ButtonAppBar/>
      <main>
        <div className="container">
        <Suspense fallback={<CircularProgress />}>
         <Routes>
          <Route
              path="/"
              element={
                <PublicRoute restricted redirectTo="/contacts" >
                 <Home/>
               </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute restricted redirectTo="/login" >
                  <Contacts />
                 </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <Register/>
                 </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Login/>
                 </PublicRoute>
              }
            />
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
    )
  );
}

export default App;
