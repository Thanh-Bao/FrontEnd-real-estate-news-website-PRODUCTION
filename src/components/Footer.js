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
import "../CSS/Footer.css"

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="new_footer_top">
          {/* z1 */}
          <div className="container my-5">
            <div className="row justify-content-center ">
              <div className="col-lg-4 text-justify text-center social_block">
                <h5>Follow us on social media</h5>
                <div className="social-buttons">
                  {/* facebook  Button */}
                  <a
                    href="https://www.facebook.com/Human-Computer-Interaction-104811304579400/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon facebook">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </div>
                  </a>

                  {/* Github Button */}
                  <a
                    href="https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon github">
                      <i className="fa fa-github" aria-hidden="true" />
                    </div>
                  </a>
                  {/* Youtube Button */}
                  <a
                    href="http://youtube.com/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon youtube">
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </div>
                  </a>

                  {/* TwitterButton */}
                  <a
                    href="http://twitter.com/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon twitter">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-justify text-center" >
                <h5>Bao Bao Real Estate Co., Ltd</h5>
                <p>
                Accurate and reliable news source about real estate market
                   Vietnam
                </p>
                <p id="Copyright1">Copyright © Bao Bao Group 2020.</p>
              </div>
            </div>
          </div>
          {/* z0 */}
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
