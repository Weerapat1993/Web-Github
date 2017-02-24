import React, { Component } from 'react'

class TimeIcon extends Component {
  render () {
    return (
      <li>
        <i className={this.props.icon}></i>
      </li>
    )
  }
}

export default TimeIcon;
