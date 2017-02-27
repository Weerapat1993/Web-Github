import React, { Component } from 'react';
import Linker from '../Linker';

class Project extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="box box-widget">
          <div className="box-header with-border">
            <div className="user-block">
              <img className="img-circle" src={ this.props.code } role="presentation" />
              <span className="username"><a href={`#/${ this.props.url }`}>{this.props.title}</a></span>
              <span className="description">{ this.props.detail }</span>
            </div>
            <div className="box-tools">
              <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
              </button>
              <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
            </div>
          </div>
          <div className="box-body">
            <a href={`#/${ this.props.url }`}>
              <img src={this.props.img} className="img-responsive pad" role="presentation" />
            </a>
          </div>
          <div className="box-footer">
            <b>Website :</b> <Linker href={this.props.link} />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
