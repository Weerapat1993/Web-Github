import React, { Component } from 'react';

class Education extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    }
    return (
      <div>
        <h2 style={bold}>Language</h2>
        <table className="table">
          <tbody>
            <tr>
              <td><b>Thai</b></td>
              <td className="text-success"><b>Good</b></td>
            </tr>
            <tr>
              <td><b>English</b></td>
              <td className="text-danger"><b>Poor</b></td>
            </tr>
            <tr>
              <td><b>Japanese</b></td>
              <td className="text-warning"><b>Normal</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Education;
