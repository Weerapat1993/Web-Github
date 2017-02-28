import React, { Component } from 'react';

class List extends Component {

  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title" style={bold}>Todo Lists</h3>

          <div className="box-tools">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            {
              this.props.todos.map((info) => {
                return (
                  <li key={info.id}>
                    <a onClick={this.props.handleDelete.bind(null,info.id)}>
                      {info.name}
                      <span className="label label-danger pull-right">X</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
