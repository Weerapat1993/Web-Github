import React, { Component } from 'react';
import data from './data/interest';

class Interest extends Component {
  constructor() {
    super();
    this.state = {
      interestData: data
    }
  }
  render() {
    const bold = {
      fontWeight: 'bold'
    };

    return (
      <div>
        <h2 style={bold}>Interest</h2>
        <hr/>

        <p>
          {this.state.interestData.map(info =>
            <span className={`label label-${ info.color }`} key={info.id} >{info.name}</span> 
          )}
        </p>
      </div>
    );
  }
}

export default Interest;
