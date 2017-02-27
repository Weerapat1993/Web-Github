import React, { Component } from 'react';
import Header from '../../components/layouts/Header';
import Image from '../../components/Image';
import Linker from '../../components/Linker';
class Tos extends Component {

  HistoryBack() {
    window.history.back();
  }
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div>
        <Header header="Tree of Savior Fansite Thailand" small="ฐานข้อมูลเกมส์ Tree of Savior" />
        <section className="content">
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img className="img-circle" src="/images/code/Laravel.png" role="presentation" />
                <span className="username"><a onClick={this.HistoryBack}>Tree of Savior Fansite Thailand</a></span>
                <span className="description">ฐานข้อมูลเกมส์ Tree of Savior</span>
              </div>
              <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <Image src="/images/portfolio/project4.png" />
                </div>
              </div>
              <h3 style={bold}>รายละเอียดเว็บไซต์</h3>
              <b>ชื่อ Project : </b> Tree of Savior Fansite Thailand ฐานข้อมูลเกมส์ Tree of Savior<br/>
              <b>เว็บไซต์ :</b> <Linker href="http://www.treeofsavior-th.com/" /> <br/>
              <b>เครื่องมือที่ใช้พัฒนา :</b> <span className="text-red" style={bold}>Laravel</span>
            </div>
            <div className="box-footer text-center">
              <a onClick={this.HistoryBack} className="btn btn-default"><i className="fa fa-arrow-left"></i> กลับ</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Tos;
