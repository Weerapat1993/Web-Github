import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <li>
        <i className={this.props.icon}></i>

        <div className="timeline-item">
          <span className="time">{this.props.location}</span>

          <h3 className="timeline-header">{this.props.header}</h3>
          <div className="timeline-body">
            {this.props.body}
          </div>
        </div>
      </li>
    );
  }
}

export default Timeline;
