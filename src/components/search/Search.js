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
import $ from "jquery";
import data from "../../SIMULATION_DATABASE/data_BlockNews.json";
import "../../CSS/BreadCrumb.css";
import NewsResultforSerch from "./NewsResultforSerch.js";

class Search extends Component {
  getUserLocation = () => {
    $.getJSON("https://ipinfo.io?token=e4c3670fe0f797", function (data) {
      $("#ip").html(data.ip);
      $("#hostname").html(data.hostname);
      $("#country").html(data.country);
      $("#region").html(data.region);
      $("#city").html(data.city);
      $("#timezone").html(data.timezone);
      $("#loc").html(data.loc);
    });
  };
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
            <a className="disabledHoverBC">Search</a>
          </li>
          <li></li>
        </ul>
        {/* ////// end breadcrumb /////////// */}

        <div className="container  my-3 pb-2">
          <div className="row">
            <div className="col-12">
              <form className="form-inline d-flex justify-content-center">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-search"
                    placeholder="What do you want to search ?"
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fas fa-search"></i> Search by keyword
                </button>
              </form>
              <div className="collapse" id="collapseExample">
                <h5
                  className="justify-content-center text-center mt-4"
                  style={{ color: "gray" }}
                >
                  Found 3 posts that suits you
                </h5>
                <NewsResultforSerch
                  path={data[5].linkTopic}
                  linkImg={data[5].imgsrc}
                  title={data[5].title}
                  content={data[5].description}
                  date="10/7/2020"
                />
                <NewsResultforSerch
                  path={data[3].linkTopic}
                  linkImg={data[3].imgsrc}
                  title={data[3].title}
                  content={data[3].description}
                  date="16/7/2020"
                />
                <NewsResultforSerch
                  path={data[2].linkTopic}
                  linkImg={data[2].imgsrc}
                  title={data[2].title}
                  content={data[2].description}
                  date="30/7/2020"
                />
              </div>
            </div>
          </div>
        </div>

        {/* //////////bengin table ////////////////// */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-12">
              <div className=" text-justify text-center ">
                {this.getUserLocation()}
                <h2 className="title">
                  <i className="fa fa-street-view"></i> Search by your location
                </h2>
                <table className="table table-bordered getUserLocationTable">
                  <thead className=" table-">
                    <tr>
                      <th scope="col" colSpan="2">
                        Your info
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Public IP</th>
                      <td id="ip"></td>
                    </tr>
                    <tr>
                      <th scope="row">ISP</th>
                      <td id="hostname"></td>
                    </tr>

                    <tr>
                      <th scope="row">Country</th>
                      <td id="country"></td>
                    </tr>

                    <tr>
                      <th scope="row">Area</th>
                      <td id="region"></td>
                    </tr>

                    <tr>
                      <th scope="row">City</th>
                      <td id="city"></td>
                    </tr>

                    <tr>
                      <th scope="row"> Timezone</th>
                      <td id="timezone"></td>
                    </tr>

                    <tr>
                      <th scope="row">Coordinates</th>
                      <td id="loc"></td>
                    </tr>
                  </tbody>
                </table>
                {/* <tr> */}
                {/* <th scope="row" colSpan="2"> */}
                {/* bengin button */}
                <div className="mt-3">
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#SearchLocation"
                  >
                    <i className="fa fa-search-plus"></i> Search by location
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="SearchLocation"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h5 className="modal-title">
                            <span className="loader loader1"></span>
                            <span className="title">Searching...</span>
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
                        <div className="modal-body">
                          <h4 className="notification">
                          Found 1 posts that suits you
                          </h4>
                          <div className="searchResultBox">
                            <a href={data[4].linkTopic}>
                              <br />
                              <h5 className="title_result mb-3">
                                {data[4].title}
                              </h5>
                              <br />
                              <img
                                className="searchTocpicResultIMG"
                                src={data[4].imgsrc}
                              ></img>
                              <br />
                            </a>
                            <p className=" text-justify mx-3 searchTocpicResult">
                              {data[4].description}
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <a
                            href={data[4].linkTopic}
                            className="btn btn-primary btnSearchBox "
                          >
                            <i className="fa fa-newspaper-o"></i> Open
                          </a>

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

                {/* end button */}
                {/* </th> */}
                {/* </tr> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
