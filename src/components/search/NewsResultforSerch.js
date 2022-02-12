import React, { Component } from "react";

class newsResultforSerch extends Component {
  render() {
    return (
      <div className="card my-3" style={{ maxWidth: "100%"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <a href={this.props.path} className="title-card-link">
              <img
                src={this.props.linkImg}
                className="card-img"
                alt="Bao Bao news"
              />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body mt-4">
              <a href={this.props.path} className="title-card-link">
                <h4 className="card-title">{this.props.title}</h4>
              </a>
              <p className="card-text">{this.props.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  <i class="far fa-clock"></i> {" " + this.props.date}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newsResultforSerch;
