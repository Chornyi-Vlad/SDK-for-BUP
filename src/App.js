import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "470141627940051",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v11.0",
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
  }, []);

  const getData = () => {
    axios
      .get(
        "https://api.instagram.com/oauth/authorize?client_id=1888342354683903&redirect_uri=https://socialsdk.herokuapp.com/&scope=user_profile,user_media&response_type=code"
      )
      .then((response) => {
        console.log(response);
      });
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
        <a href="https://api.instagram.com/oauth/authorize?client_id=1888342354683903&redirect_uri=https://socialsdk.herokuapp.com/&scope=user_profile,user_media&response_type=code">
          link
        </a>
        <Link to={"/auth"}>GOOOOOOO</Link>
      </header>
    </div>
  );
}

export default App;
