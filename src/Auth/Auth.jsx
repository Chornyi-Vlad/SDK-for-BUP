import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const code = location.search.slice(6);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://api.instagram.com/oauth/access_token",
      data: {
        client_id: 1888342354683903,
        client_secret: "5ce1d616eba6db19d2cd20e55166b20d",
        code,
        grant_type: "authorization_code",
        redirect_uri: "https://socialsdk.herokuapp.com/auth/",
      },
    }).then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <h2>Auth page</h2>
      <h1> {code}</h1>
    </>
  );
};

export default Auth;
