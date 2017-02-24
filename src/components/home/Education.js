import React, { Component } from 'react';

class Education extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    const logo_width = {
      width: 50,
      height: '100%'
    };
    return (
      <div>
        <h2 style={bold}>Education</h2>
        <hr/>
        <ul className="products-list product-list-in-box">
          <li className="item">
            <div className="product-img">
              <img src="/images/logo-tni.png" style={logo_width} role="presentation" />
            </div>
            <div className="product-info">
              <a className="product-title">Bachelor of Science and Technology (2012 - 2015)
                <span className="label label-success pull-right">Grade : 3.17</span></a>
                  <span className="product-description">
                    Thai-Nichi Institude of Technology <br/>
                    Faculty : Infromation Technology / Major : Multimedia Technology
                  </span>
            </div>
          </li>
          <li className="item">
            <div className="product-img">
              <img src="/images/logo-dsn.jpg" style={logo_width} role="presentation" />
            </div>
            <div className="product-info">
              <a className="product-title">Secondary Education (2010 - 2012)
                <span className="label label-warning pull-right">Grade : 2.98</span></a>
                  <span className="product-description">
                    Debsirin Nonthaburi School
                  </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
