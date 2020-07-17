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

class Button_Quick_view extends Component {
  render() {
    return (
      <div>
        <div className="btnLeft">
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target={"#" + this.props.id}
            >
              <i className="fa fa-eye"></i> Quick view
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id={this.props.id}
              tabIndex={-1}
              role="dialog"
              aria-labelledby=""
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content ">
                  <div className="modal-header  header_quick_view ">
                    <h5 className="modal-title  mt-2  ">
                      {this.props.QuickView_title}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-times-circle closeBtn"></i>
                      </span>
                    </button>
                  </div>
                  <div className="modal-body text-justify ">
                    {this.props.QuickView_content}
                  </div>
                  <div className="modal-footer justify-content-center">
                    <a href={this.props.QuickView_to_Full_View} className="btn btn-primary btnRight ">
                      <i className="fa fa-newspaper-o"></i> Full view
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Button_Quick_view;
