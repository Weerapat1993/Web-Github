import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class Skill extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div>
        <h2 style={bold}>Skills</h2>
        <table className="table">
          <tbody>
            <ProgressBar name="UI/UX Design" percent="60" color="success" />
            <ProgressBar name="HTML" percent="90" color="warning" />
            <ProgressBar name="CSS" percent="70" color="info" />
            <ProgressBar name="PHP" percent="90" color="primary" />
            <ProgressBar name="Javascript" percent="80" color="warning" />
            <ProgressBar name="Node.js" percent="80" color="success" />
            <ProgressBar name="Laravel" percent="90" color="danger" />
            <ProgressBar name="Vue.js" percent="70" color="primary" />
            <ProgressBar name="React" percent="40" color="info" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Skill;
