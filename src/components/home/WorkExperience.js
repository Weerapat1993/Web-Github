import React, { Component } from 'react';
import Timeline from '../Timeline';
import TimeLabel from '../TimeLabel';
import TimeIcon from '../TimeIcon';

class WorkExperience extends Component {
  render() {
    const bold = {
      fontWeight: 'bold'
    }
    return (
      <div>
        <h2 style={bold}>Work Experience</h2>
        <hr/>
        <ul className="timeline timeline-inverse">
          <TimeLabel bg="bg-blue" label="30 Oct 1993" />
          <Timeline
            icon="fa fa-envelope bg-blue"
            location="Bangkok, Thailand"
            header="Test"
            body="Sarah Young accepted your friend request" />
          <TimeIcon icon="fa fa-clock-o bg-gray" />
        </ul>
        <br/>
      </div>
    );
  }
}

export default WorkExperience;
