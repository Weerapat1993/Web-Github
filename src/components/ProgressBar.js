import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    var skill_width = {
      width: '30%'
    };
    var width = {
      width: this.props.percent+'%'
    };
    var width60 = {
      width: 60
    };
    return (
      <tr>
        <td style={skill_width} className="text-right">
            <span className={`label label-${ this.props.color }`}>{this.props.name}</span>
        </td>
        <td>
          <div className="progress active">
            <div
              className={`progress-bar progress-bar-${ this.props.color } progress-bar-striped`}
              role="progressbar"
              aria-valuenow={this.props.percent}
              aria-valuemin="0"
              aria-valuemax="100"
              style={width}>
            </div>
          </div>
        </td>
        <td style={width60}>
          {this.props.percent} %
        </td>
      </tr>
    );
  }
}

export default ProgressBar;
