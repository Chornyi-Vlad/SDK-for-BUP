import React from "react";
import GoogleLogin from "react-google-login";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //***************************instagram/facebook******************************************/
  const [auth, setAuth] = useState(false);
  const [status, setStatus] = useState("unknown");
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "your APP-ID", //change it
        autoLogAppEvents: true,
        xfbml: true,
        version: "v11.0", //choose it
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    window.FB.getLoginStatus(function (res) {
      console.log(res);
      if (res.status === "connected") {
        console.log(res);
        setStatus(res.status);
      }
    });
  }, []);

  useEffect(() => {
    if (status === "connected") {
      setAuth(true);
    }
    if (status === "unknown") {
      setAuth(false);
    }
  }, [status]);

  const facebookLogOut = () => {
    window.FB.logout(function (res) {
      setStatus("unknown");
    });
  };
  // *******************************************google/youtube*********************************************************************************************

  const API_KEY = "Your API-KEY"; //change it

  const [gapiReady, setGapiReady] = useState("false");

  const loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          setGapiReady(true);
        });
      });
    };

    document.body.appendChild(script);
  };

  useEffect(() => {
    loadYoutubeApi();
  }, []);

  const responseGoogle = (response) => {
    console.log(response); //get google token
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>

        <button onClick={facebookLogOut}>facebook LOGOUT</button>

        <a href="https://api.instagram.com/oauth/authorize?client_id=1888342354683903&redirect_uri=https://socialsdk.herokuapp.com/auth/&scope=user_profile,user_media&response_type=code">
          GET MY INSTAGRAM CODE
        </a>
        <GoogleLogin
          clientId="216839396501-majm9prq4ajbruvebunnk19j9egjbroo.apps.googleusercontent.com"
          buttonText="Google login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </header>
    </div>
  );
}

export default App;
