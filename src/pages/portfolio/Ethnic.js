import React, { Component } from 'react';
import Header from '../../components/layouts/Header';
import Image from '../../components/Image';
import Linker from '../../components/Linker';
class Ethnic extends Component {

  HistoryBack() {
    window.history.back();
  }
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div>
        <Header header="ASEAN Ethnic Groups" small="ฐานข้อมูลกลุ่มชาติพันธุ์ข้ามแดนอาเซียน" />
        <section className="content">
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img src="/images/code/Laravel.png" role="presentation" />
                <span className="username"><a onClick={this.HistoryBack}>ASEAN Ethnic Groups</a></span>
                <span className="description">ฐานข้อมูลกลุ่มชาติพันธุ์ข้ามแดนอาเซียน</span>
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
                  <Image src="/images/portfolio/project3.png" />
                </div>
              </div>
              <h3 style={bold}>รายละเอียดเว็บไซต์</h3>
              <b>ชื่อ Project : </b> ASEAN Ethnic Groups ฐานข้อมูลกลุ่มชาติพันธุ์ข้ามแดนอาเซียน<br/>
              <b>เว็บไซต์ :</b> <Linker href="http://asean-ethnic-groups.com/" /> <br/>
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

export default Ethnic;
