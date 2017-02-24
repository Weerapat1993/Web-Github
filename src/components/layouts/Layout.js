import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div className="warpper">
        <Menu/>
        <div className="content-wrapper">
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
