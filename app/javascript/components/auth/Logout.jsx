import React from "react";
import { logoutUser } from "../../actions/auth";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';


const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  
  return (
    <Button 
      color="inherit"
      onClick={handleClick}
    >
      logout
    </Button>
  );
};

export default Logout;