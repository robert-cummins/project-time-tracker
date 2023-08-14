import React, { useEffect } from 'react';
import Navbar from "./components/NavBar"
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from "./actions/auth";
import Login from "./components/auth/Login";
import UserProjects from "./components/UserProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/auth/SignUp";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({auth}) => {
  return (auth === true ? <Outlet /> : <Navigate to="/" replace/>)
}

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const userId = useSelector(state => state.auth.currentUser.id)
 
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
 
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={loggedIn ? <Navigate to={`/user/${userId}`} /> : <Login />} />
          <Route path='/signup_page' element={loggedIn ? <Navigate to={`/user/${userId}`}/> : <Signup />} />

          {/* Protected Routes starts from here */}
          <Route element={<ProtectedRoutes auth={loggedIn}/>}>
            <Route path='/user/:id' element={<UserProjects /> } />
          </Route>
                
        </Routes>
    </Router>
  </div>
  );
}

export default App;