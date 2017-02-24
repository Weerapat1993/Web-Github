import React, { Component } from 'react';

class Header extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <section className="content-header">
        <h1 style={bold}>
          {this.props.header}
        </h1>
        <ol className="breadcrumb">
          <li><a href="#/"><i className="fa fa-home"></i> Home</a></li>
          <li><a href="#">Layout</a></li>
          <li className="active">Top Navigation</li>
        </ol>
      </section>
    );
  }
}

export default Header;
