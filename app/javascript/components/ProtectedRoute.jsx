import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  if(loggedIn){
    return (
      <div className="w-11/12 max-w-6xl mx-auto mt-8 text-2xl">
        This is a protected route. It should only be visible to a user who is signed in.
      </div>
    );
  } else {

    return <h1>You need to be logged in to see this</h1>
  }
    
}

export default connect()(ProtectedRoute);