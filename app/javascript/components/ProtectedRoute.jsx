import React from "react";

const ProtectedRoute = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-8 text-2xl">
      This is a protected route. It should only be visible to a user who is signed in.
    </div>
  );
}

export default ProtectedRoute;