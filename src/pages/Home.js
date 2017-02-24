import React, { Component } from 'react';
import Header from '../components/layouts/Header';
import WorkExperience from '../components/home/WorkExperience';
import Education from '../components/home/Education';
import Skill from '../components/home/Skill';

const tab = {
  height: 80
};

const padding = {
  padding: 10
};

const bold = {
  fontWeight: 'bold'
}
const width100 ={
  width: '100%'
}
class App extends Component {

  render() {
    return (
      <div>
        <Header header="Resume" />
        <section className="content">
          <div className="box box-default">
            <div className="box-body box-profile">
              <div className="row">
                <div className="col-sm-1 bg-primary" style={padding}>
                  <div style={tab}></div>
                  {/*<img className="profile-user-img img-responsive img-circle" src="/img/user4-128x128.jpg" role="presentation" />*/}
                </div>
                <div className="col-sm-4 text-center">
                  <h2 className="profile-username">Mr. Weerapat Thawatchoketawee</h2>
                  <p className="text-muted">Frontend Developer</p>
                </div>
                <div className="col-sm-2 text-center">
                  <img className="profile-user-img img-responsive img-circle" src="/img/user4-128x128.jpg" role="presentation" />
                </div>
                <div className="col-sm-5 text-right">
                  <table style={width100}>
                    <tbody>
                      <tr>
                        <td className="text-right"><a href="mailto:weerapat.thawatchoketawee@gmail.com">weerapat.thawatchoketawee@gmail.com</a></td>
                        <td className="text-center" width="20"><i className="fa fa-envelope text-blue"></i></td>
                      </tr>
                      <tr>
                        <td className="text-right">+66 080-066-6240</td>
                        <td className="text-center" width="20"><i className="fa fa-phone text-blue"></i></td>
                      </tr>
                      <tr>
                        <td className="text-right">Nonthaburi, Thailand</td>
                        <td className="text-center" width="20"><i className="fa fa-map-marker text-blue"></i></td>
                      </tr>
                      <tr>
                        <td className="text-right"><a href="https://www.facebook.com/weerapat.thawatchoketawee" target="_blank">Weerapat Thawatchoketawee</a></td>
                        <td className="text-center" width="20"><i className="fa fa-facebook text-blue"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-md-6">
                  <WorkExperience />
                  <Education />
                </div>
                <div className="col-md-6">
                  <h2 className="text-right" style={bold}>Skills & Competences</h2>
                  <hr/>
                  <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>
                  <Skill />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
