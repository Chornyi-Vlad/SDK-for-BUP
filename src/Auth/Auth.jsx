import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const code = location.search.slice(6);

  //   const getToken = () => {
  //     axios({
  //       method: "post",
  //       url: "https://api.instagram.com/oauth/access_token",
  //   data: {
  //     client_id: 1888342354683903,
  //   client_secret: "5ce1d616eba6db19d2cd20e55166b20d",
  //   code,
  //   grant_type: "authorization_code",
  //   redirect_uri: "https://socialsdk.herokuapp.com/auth/",
  //   },
  //   headers: {
  //     'Content-Type', 'multipart/form-data; boundary=' + boundary,
  //     accept: "*/*",
  //     "Accept-Encoding": "gzip, deflate, br",
  //     connection: "keep-alive",
  //     cookie:
  //       "csrftoken=gzTvoJjk9o4xUzL5c79yyWeVsr4dX4i0; ig_did=C2BDA394-EED0-4015-A2AC-CB834D09C979; ig_nrcb=1; mid=YgtlCAAEAAFnmF_06AKe-WIEa7-0",
  //   },
  //     }).then((response) => console.log(response.data));
  //   };

  const data = {
    client_id: "1888342354683903",
    client_secret: "5ce1d616eba6db19d2cd20e55166b20d",
    code,
    grant_type: "authorization_code",
    redirect_uri: "https://socialsdk.herokuapp.com/auth/",
  };

  //   const boundary = String(Math.random()).slice(2);
  //   const boundaryMiddle = "--" + boundary + "\r\n";
  //   const boundaryLast = "--" + boundary + "--\r\n";

  //   let body = ["\r\n"];
  //   for (let key in data) {
  //     // добавление поля
  //     body.push(
  //       'Content-Disposition: form-data; name="' +
  //         key +
  //         '"\r\n\r\n' +
  //         data[key] +
  //         "\r\n"
  //     );
  //   }

  //   body = body.join(boundaryMiddle) + boundaryLast;
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
        console.log(res.data);
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
