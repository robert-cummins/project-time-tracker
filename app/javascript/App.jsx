import React, { useEffect } from 'react';
import Navbar from "./components/NavBar"
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from "./actions/auth";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/SignUp";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({auth}) => {
  return (auth === true ? <Outlet /> : <Navigate to="/login_page" replace/>)
}

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn);
  
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
 
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={loggedIn ? <ProtectedRoute /> : <Navigate to="/login_page" />} />
          <Route path='/signup_page' element={loggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route path='/login_page' element={loggedIn ? <Navigate to="/" /> : <Login />} />

          {/* Protected Routes starts from here */}
          <Route element={<ProtectedRoutes auth={loggedIn}/>}>
            <Route path='/' element={<ProtectedRoute /> } />
          </Route>
                
        </Routes>
    </Router>
  </div>
  );
}

export default App;