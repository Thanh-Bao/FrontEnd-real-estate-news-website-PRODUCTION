/* ################################################################################################################################                                                                                                                                #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */

import React, { Component } from "react";
import Profile from "./Profile.js";
import ProfileLeader from "./ProfileLeader.js";
import data from "../../SIMULATION_DATABASE/data_ProfileAbout.json";

class About extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>
        <ul id="breadcrumb">
          <li>
            <a href="/">
              <span class="fas fa-globe"> </span>
            </a>
          </li>
          <li>
            <a className="disabledHoverBC">
              <span class="far fa-address-card"> </span> About
            </a>
          </li>
          <li></li>
        </ul>

        <div className="container group_card_profile">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="row h-100 py-2">
                <div className="col-12 p-1 h-100">
                  <ProfileLeader />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 h-50">
              <div className="row">
                {data.map((item) => {
                  return (
                    <div className="col-lg-6 col-sm-6 h-50 py-2">
                      <Profile
                        avatar={item.avatar}
                        name={item.fullName}
                        MSSV={item.MSSV}
                        chucVu={item.chucvu}
                        webCaNhan={item.link.webCaNhan}
                        gioiThieu={item.gioithieu}
                        twitter={item.link.fb}
                        github={item.link.youtube}
                        fb={item.link.github}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
