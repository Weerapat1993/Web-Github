import React, { Component } from 'react';
import Header from '../components/layouts/Header';
class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header header="Portfolio" />
        <section className="content">
          Portfolio
        </section>
      </div>
    );
  }
}

export default Portfolio;
