import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const code = location.search.slice(6);
  return (
    <>
      <h2>Auth page</h2>
      <h1> {code}</h1>
    </>
  );
};

export default Auth;
