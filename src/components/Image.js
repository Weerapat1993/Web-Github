import React, { Component } from 'react'

class Image extends Component {
  render () {
    return (
      <div className="text-center">
        <a href={this.props.src}>
          <img src={this.props.src} className="img-responsive pad" role="presentation"/>
        </a>
      </div>
    )
  }
}

export default Image;
