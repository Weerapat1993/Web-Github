import React, { Component } from 'react'

class Linker extends Component {
  render () {
    return (
        <a href={this.props.href} target="_blank">
          {this.props.href}
        </a>
    )
  }
}

export default Linker;
