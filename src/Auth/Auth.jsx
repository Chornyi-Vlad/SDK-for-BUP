import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const code = location.search.slice(6);

  const data = {
    client_id: "your client_id", //change it
    client_secret: "your client_secret", //change it
    code,
    grant_type: "authorization_code",
    redirect_uri: "your redirect_url", //change it
  };

  const formData = new FormData();
  for (const key in data) {
    formData.set(key, data[key]);
  }
  const getToken = () => {
    axios
      .post("https://api.instagram.com/oauth/access_token", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data); // this is your token
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>Auth page</h2>
      <Link to={"/"}>GO HOME</Link>
      <h1> {code}</h1>
      <button onClick={getToken} type="button">
        get token
      </button>
    </>
  );
};

export default Auth;
