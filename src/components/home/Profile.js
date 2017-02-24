import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    }
    return (
      <div>
        <h2 style={bold}>Profile</h2>
        <hr/>
      </div>
    );
  }
}

export default Profile;
