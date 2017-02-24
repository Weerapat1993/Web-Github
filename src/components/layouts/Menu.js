import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const textMenu = {
      color: '#00BCD4',
      fontWeight: 'bold'
    };
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a href="#/" className="navbar-brand" style={textMenu}>Weerapat</a>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#/">Home <span className="sr-only">(current)</span></a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/portfolio">Portfolio</a></li>
                {/*
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                */}
              </ul>
            </div>
            {/*
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown messages-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <div className="pull-left">
                              <img src="/img/user2-160x160.jpg" className="img-circle" role="presentation" />
                            </div>
                            <h4>
                              Support Team
                              <small><i className="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                  </ul>
                </li>

                <li className="dropdown notifications-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 10 notifications</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-users text-aqua"></i> 5 new members joined today
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                  </ul>
                </li>

                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="/img/user2-160x160.jpg" className="user-image" role="presentation" />
                    <span className="hidden-xs">Alexander Pierce</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src="/img/user2-160x160.jpg" className="img-circle" role="presentation" />

                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>
                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </div>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            */}
          </div>
        </nav>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Menu;
