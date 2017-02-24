import React, { Component } from 'react';
import Header from '../components/layouts/Header';
class About extends Component {
  render() {
    return (
      <div>
        <Header header="About" />
        <section className="content">
          About
        </section>
      </div>
    );
  }
}

export default About;
