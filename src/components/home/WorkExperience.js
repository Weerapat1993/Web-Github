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
          <TimeLabel bg="bg-blue" label="1 Mar 2017" />
          <Timeline
            icon="fa fa-envelope bg-blue"
            location="Bangkok, Thailand"
            header="Dotography Co, Ltd."
            body="Position : Front-end Developer" />
          <TimeLabel bg="bg-green" label="1 July 2016" />
            <Timeline
              icon="fa fa-envelope bg-green"
              location="Bangkok, Thailand"
              header="Internet Pubilc Thailand Co, Ltd."
              body="Position : PHP Developer" />
          <TimeIcon icon="fa fa-clock-o bg-gray" />
        </ul>
        <br/>
      </div>
    );
  }
}

export default WorkExperience;
