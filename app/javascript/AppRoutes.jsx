import React from 'react';
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = ({loggedIn}) => {
 console.log(loggedIn)
  return (
    <Router>
      <Routes>
        {loggedIn ?
          <Route exact path='/' element={<ProtectedRoute />} />
          :
          <>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/' element={<Login />} />
          </>
        }
      </Routes>
    </Router>
  )
}

export default AppRoutes