import { setUserProperties } from "firebase/analytics";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/login-image.jpg";
import ios from "../images/ios-app.jpg";
import android from "../images/android-app.jpg";
import facebook from "../images/facebook.png";

export default function Login() {
  const { login, googleSignIn } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailfilled, setEmailFilled] = useState(false);
  const [passwordfilled, setPasswordFilled] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setPasswordFilled(true);
    } else {
      setPasswordFilled(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    //try catch block to define asynchronous behavior and catch potential errors)
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  const isEnabled = email.length > 0 && password.length > 0;

  return (
    <div>
      <div className="main__container">
        <div className="left__container">
          <div className="image__container">
            <img src={image} />
          </div>
        </div>
        <div className="right__container">
          <div className="first__container">
            <h1 class="logo__header"> Instagram</h1>
            <div className="form__container">
              <form onSubmit={handleSubmit} className="form">
                <input
                  style={{ fontFamily: "FreightLight" }}
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                  className={`input ${emailfilled ? "filled" : ""}`}
                  type="email"
                  ref={emailRef}
                  required
                />
                <label className="first__label">
                  {" "}
                  Phone number, &nbsp; username, &nbsp; or email
                </label>
                <input
                  style={{ fontFamily: "FreightLight" }}
                  onChange={(e) => {
                    handlePassChange(e);
                  }}
                  className={`input ${passwordfilled ? "filled" : ""}`}
                  type="password"
                  ref={passwordRef}
                  required
                />
                <label className="second__label"> Password</label>

                <button disabled={!isEnabled} className="submit__button">
                  Log In
                </button>
                {error && <p> {error} </p>}
              </form>
              <div className="mid__container">
                <hr></hr>
                <p> OR </p>
                <hr></hr>
              </div>
              <div className="facebook__container">
                <img className="facebook__image" src={facebook} />

                <p>Log in with Facebook</p>
              </div>
              <p className="forgot__password"> Forgot your password? </p>
            </div>
          </div>
          <div className="second__container">
            <p>Don't have an account? &nbsp;</p>
            <div className="signup-button">
              <Link to="/signup">Sign Up </Link>
            </div>
          </div>
          <div className="third__container">
            <p> Get the app.</p>
            <div className="image__container">
              <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
                <img src={ios} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DBD2A51CE-E2B6-4CFA-BFF2-BF30334E27E5%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img src={android} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
