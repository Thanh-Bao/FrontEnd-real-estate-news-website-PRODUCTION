import React, { Component } from "react";

class Forget extends Component {
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
                <b>Username or email address</b>
              </h3>
              <div className="input-container">
                <input
                  className="input-field inputLogin"
                  type="text"
                  placeholder="Email/Phone Number"
                  name="usrnm"
                />
              </div>

              <input
                className="space-bot inputLogin"
                type="submit"
                value="Next"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;
