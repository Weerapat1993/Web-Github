import React, { Component } from 'react';

class TimeLabel extends Component {
  render() {
    return (
      <li className="time-label">
        <span className={this.props.bg}>
          {this.props.label}
        </span>
      </li>
    );
  }
}

export default TimeLabel;
