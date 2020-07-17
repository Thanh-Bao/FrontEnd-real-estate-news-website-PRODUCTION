import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
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

          <div className="col colLogin colLogin bg-login sp-login">
            <h3 className="text-center cl-login">
              <b>Login</b>
            </h3>
            <div className="input-container">
              <input
                className="input-field inputLogin"
                type="text"
                placeholder="Email/Phone Number"
                name="usrnm"
              />
              <i className="fa fa-user iconLogin" />
            </div>
            <div className="input-container">
              <input
                className="inputLogin"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <i className="fa fa-key iconLogin"></i>
            </div>
            <div className="row">
              <label className="col-1 ">
                <input type="checkbox" />
              </label>
              <label className="col-6 remember ">Remember me</label>
            </div>

            <input
              className="space-bot inputLogin"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
