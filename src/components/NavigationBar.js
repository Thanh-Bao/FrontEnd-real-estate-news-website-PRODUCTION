/* ################################################################################################################################                                                                                                                                #
#    _____ _               _   _                                      _                           ___   ___ ___   ___              #
#   / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
#  | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
#  | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
#  | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



import React, { Component } from "react";
import "../CSS/NavigationBar.css";

class NavigationBar extends Component {

  
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="/">
                    <img
                      src="media/logo.png"
                      alt="real estate news"
                    />
                  </a>

                  {/* menu button for mobile */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* ___________________________________________ */}
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <div
                        id="google_translate_element"
                        className="nav-link"
                      ></div>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="/home">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-home"></i> HOME
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="/search">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-search"></i> SEARCH
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="/newTopic">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                          <i className="far fa-edit"></i> POST
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="about">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                          <i className="far fa-address-card"></i> ABOUT
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="more">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-info-circle"></i> MORE
                          </span>
                        </li>
                      </a>

                      <a className="nav-link loginButton " data-toggle="modal" data-target="#myModal">
                        <li className=" btn btn-outline-primary  ml-md-4">
                          <span>
                            <i className="fa fa-sign-in"></i> LOGIN
                          </span>
                        </li>
                      </a>


                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  

  
}




export default NavigationBar;
