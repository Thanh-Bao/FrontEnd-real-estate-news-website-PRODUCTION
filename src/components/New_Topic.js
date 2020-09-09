import React, { Component } from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class New_Topic extends Component {

  render() {
    return (
      <div >
        <div id="align-top"></div>
        <div id="align-top"></div>
        <ul id="breadcrumb">
          <li>
            <a href="/">
              <span class="fas fa-globe"> </span>
            </a>
          </li>
          <li>
            <a className="disabledHoverBC">Post</a>
          </li>
          <li></li>
        </ul>
        {/* ////// end breadcrumb /////////// */}
        <h2 className="mt-5 pt-5">Share your news with us</h2>
        <div className="container">
          <div className="form-groups sm-12">
            <label ><h4>Title:</h4></label>
            <input
              type="text"
              className="form-search_title"
              placeholder="Enter title here"
            />
          </div>

          <CKEditor
            editor={ClassicEditor}
            data="<p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                    <p></p>
                    <p></p>"

          />


        </div>
        <div className="container justify-content-center text-center">
          <button style={{ "font-size": "30px" }} type="button" class="btn btn-primary my-5">Post</button>
        </div>
      </div>
    );
  }
}

export default New_Topic;
