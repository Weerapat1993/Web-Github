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
        <div className="row">
          <div className="col-md-12">
            {this.state.interestData.map(info =>
                <div className="col-xs-12">
                <span className={`label label-${ info.color }`} key={info.id} >{info.name}</span>
                </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
