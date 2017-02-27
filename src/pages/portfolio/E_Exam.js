import React, { Component } from 'react';
import Header from '../../components/layouts/Header';
import Linker from '../../components/Linker';
class E_Exam extends Component {

  HistoryBack() {
    window.history.back();
  }
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div>
        <Header header="E-Exam" small="ระบบรับสมัครสอบออนไลน์" />
        <section className="content">
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img className="img-circle" src="/images/code/Laravel.png" role="presentation" />
                <span className="username"><a onClick={this.HistoryBack}>E-Exam</a></span>
                <span className="description">ระบบรับสมัครสอบออนไลน์</span>
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
                  <img src="/images/portfolio/project2.png" className="img-responsive pad" role="presentation" />
                </div>
              </div>
              <h3 style={bold}>รายละเอียดเว็บไซต์</h3>
              <b>ชื่อ Project : </b> E-Exam ระบบสมัครสอบออนไลน์ สำนักงาน ก.พ.<br/>
              <b>เว็บไซต์ :</b> <Linker href="http://job2.ocsc.go.th/test1/" /> <br/>
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

export default E_Exam;
