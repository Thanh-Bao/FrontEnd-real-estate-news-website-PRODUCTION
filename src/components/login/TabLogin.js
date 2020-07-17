import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import Forget from "./Forget";

class TabLogin extends Component {
  render() {
    return (
      <div className="container">
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
             
              {/* Modal body */}
              <div className="modal-body">
                <nav>
                  <div
                    className="nav nav-tabs center-tabs text-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active size-tabs"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#login"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <b>Login</b>
                    </a>
                    <a
                      className="nav-item nav-link size-tabs"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <b>Register</b>
                    </a>
                    <a
                      className="nav-item nav-link size-tabs"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#foget"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <b> Forget</b>
                    </a>
                  </div>
                </nav>
                <div className="tab-content space-top-tabs" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="login"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <Login></Login>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <Register />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="foget"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <Forget></Forget>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TabLogin;
