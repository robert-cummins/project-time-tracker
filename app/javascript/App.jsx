import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import NormalRoute from "./components/NormalRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import React from "react";


const App = () => {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <h1>HELLO</h1>
        <Routes>
          <Route exact path='/' element={<NormalRoute />} />
          <Route exact path='/protected_route' element={<ProtectedRoute /> }/>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;