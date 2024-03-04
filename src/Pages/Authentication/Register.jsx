import React from "react";
import './Authetication.css'
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="LoginMain">
      <div className="container">
        <div className="login">
          <div classNam e="container">
            <form action="/register" method="post">
              <h1>Register Here</h1>
              
              <input type="text" placeholder="Name"  id="logInText" />
              <input type="email" placeholder="Email" id="logInEmail" />
              <input type="password" placeholder="Password" id="logInPassword" />
              <br />
              <input type="checkbox" id="logInCheckbox" />
              <span>Remember me</span>
              <a href="#">Forgot password?</a>
              <button>Register</button>
              <hr />
              <p>Or Connect With</p>
              <hr />
              <ul className="UserIcons">
                <li>
                  <i className="fab fa-facebook-f fa-2x"></i>
                </li>
                <li>
                  <i className="fab fa-twitter fa-2x"></i>
                </li>
                <li>
                  <i className="fab fa-github fa-2x"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </li>
              </ul>
            </form>
            <div className="clearfix"></div>
            <span className="copyright">&copy;2019</span>
          </div>
        </div>

        <div className="register">
          <div className="container">
            <i className="fas fa-user-plus"></i>
            <h2>Hello, friend!</h2>
            <p>If Already Have an Account Log in Here : </p>
            <button className="registerBtn">
              {" "}
              <NavLink to="/login" className="RegisterBtn">
                Login
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
