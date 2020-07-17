import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col colLogin">
            <button className="fb btnLogin">
              <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </button>
            <button className="twitter btnLogin">
              <i class="fa fa-twitter fa-fw"></i> Login with Twitter
            </button>
            <button className="google btnLogin">
              <i class="fa fa-google fa-fw"></i> Login with Google
            </button>
            </div>

            <div className="col colLogin bg-login sp-login">
              <h3 className="text-center cl-login">
                <b>Register</b>
              </h3>
              <div className="input-container">
                <input
                  className="input-field inputLogin"
                  type="text"
                  placeholder="Email/Phone number"
                  name="usrnm"
                />
              </div>
              <div className="input-container">
                <input
                  className="inputLogin"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  className="inputLogin"
                  type="password"
                  name="password"
                  placeholder="Repeat Password"
                  required
                />
              </div>

              <input
                className="space-bot inputLogin"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
