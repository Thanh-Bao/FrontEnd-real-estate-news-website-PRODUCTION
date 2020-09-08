import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
        <div className="form-group mx-sm-3 mb-2">
            <label ><h4>Title:</h4></label>
                  <input
                    type="text"
                    className="form-search title"
                    placeholder="Enter a Title"
                  />
                </div>
        <CKEditor
            editor={ ClassicEditor }
            data="<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>"
            onInit={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
        </div>
        <div className="container justify-content-center text-center">
        <button style={{"font-size": "30px"}} type="button" class="btn btn-primary my-5">Post</button>
        </div>
    </div>
    );
  }
}

export default New_Topic;
