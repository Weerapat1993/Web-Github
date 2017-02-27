import React, { Component } from 'react';
import Header from '../../components/layouts/Header';
import Image from '../../components/Image';
class E_Student extends Component {
  HistoryBack() {
    window.history.back();
  }
  render() {
    const bold = {
      fontWeight: 'bold'
    };
    return (
      <div>
        <Header header="E-Student" small="ระบบลงทะเบียนเรียนออนไลน์" />
        <section className="content">
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img src="/images/code/Laravel.png" role="presentation" />
                <span className="username"><a onClick={this.HistoryBack}>E-Student</a></span>
                <span className="description">ระบบลงทะเบียนเรียนออนไลน์</span>
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
                  <Image src="/images/portfolio/project1.png" />
                </div>
              </div>
              <h3 style={bold}>รายละเอียดเว็บไซต์</h3>
              <b>ชื่อ Project : </b> E-Student ระบบลงทะเบียนเรียนออนไลน์ <br/>
              <b>เว็บไซต์ :</b> <span className="text-red">ยังไม่ได้ OnSite</span> <br/>
              <b>เครื่องมือที่ใช้พัฒนา :</b> <span className="text-red" style={bold}>Laravel</span>

              <h3 style={bold}>ระบบภายในเว็บไซต์</h3>
               - ระบบทั้งหมดจะถูกแยกออกมาเป็นแต่ละ Role ดังข้อมูลต่อไปนี้

              <ol>
                <li><b className="text-red">Administrator (ผู้ใช้งานระบบ)</b>
                  <ul>
                    <li>ระบบ สถิตการใช้งาน - Menu ตรวจสอบ ฐานข้อมูลทั้งหมด</li>
                    <li>ฐานข้อมูลผู้ใช้งานระบบ - แบ่งข้อมูลออกเป็น 4 ระดับ ดังนี้
                      <ul>
                        <li className="text-red">Administrator - สามารถจัดการได้ทุกระบบยกเว้น Student</li>
                        <li className="text-yellow">Finance - สามารถตรวจสอบการชำระเงิน & อนุมัติการลงทะเบียน ได้</li>
                        <li className="text-green">Teacher - สามารถพิมพ์ใบรายชื่อนักเรียน & ส่งเกรด ได้</li>
                        <li className="text-blue">Student - สามารถลงทะเบียน & ตรวจสอบเกรด ได้</li>
                      </ul>
                    </li>
                    <li>ฐานข้อมูลระดับการศึกษา - แบ่งข้อมูลออกเป็น 6 ระดับ ดังนี้
                      <ul>
                        <li className="text-muted">Course - หลักสูตร</li>
                        <li className="text-red">Level - ระดับชั้น</li>
                        <li className="text-yellow">Faculty - ภาควิชา</li>
                        <li className="text-blue">Major - สาขาวิขา</li>
                        <li className="text-green">Work - สาขางาน</li>
                        <li className="text-muted">Term - ภาคเรียน</li>
                      </ul>
                    </li>
                    <li>ฐานข้อมูลการลงทะเบียน - แบ่งข้อมูลเป็น 4 ระดับ ดังนี้
                      <ul>
                        <li className="text-yellow">Budget - ข้อมูลค่าใช้จ่าย</li>
                        <li className="text-red">Budget Pack - ข้อมูลค่าใช้จ่ายมารวมกันเป็น Package</li>
                        <li className="text-blue">Subject - ข้อมูลวิชา</li>
                        <li className="text-purple">Pacakge - ข้อมูล Package</li>
                      </ul>
                    </li>
                    <li>ระบบคำนวณเกรดเฉลี่ย - สามารถคำนวนเกรดเฉลี่ยปัจจุบันได้</li>
                    <li>ระบบเพิ่มข้อมูลข่าวสาร - สามารถเพิ่มข้อมูลข่าวสารเองได้</li>
                    <li>ระบบปฏิทินการศึกษา - แจ้งกำหนดการในแต่ละปีการศึกษา</li>
                    <li>ระบบตั้งค่าการใช้งาน - สามารถปรับแต่งข้อมูลตามต้องการได้</li>
                  </ul>
                </li>
                <li><b className="text-yellow">Finance (การเงิน)</b>
                  <ul>
                    <li className="text-yellow">ระบบตรวจสอบการชำระเงิน - สามารถตรวจสอบผู้ที่ชำระเงินและไม่ชำระเงินได้</li>
                    <li className="text-green">อนุมัติการลงทะเบียน - สำหรับผู้กู้ กยศ.</li>
                  </ul>
                </li>
                <li><b className="text-green">Teacher (ครู - อาจารย์)</b>
                  <ul>
                    <li>ใบรายชื่อนักเรียน - สามารถพิมพ์ใบรายชื่อนักเรียน & ส่งเกรด ได้</li>
                    <li className="text-primary">ฐานข้อมูลข้อมูลนักเรียน - เหมือนกับฐานข้อมูล Student ด้านบน</li>
                    <li>ฐานข้อมูลวิชาที่ลงทะเบียน - สามารถตรวจสอบผู้ที่สอบผ่าน และ สอบตก ได้</li>
                  </ul>
                </li>
                <li><b className="text-blue">Student (นักเรียน)</b>
                  <ul>
                    <li>ระบบลงทะเบียน - แบ่งออกเป็น 3 ประเภท ดังนี้
                      <ul>
                        <li className="text-blue">ลงทะเบียนปกติ - ลงทะเบียนเป็น Package ใช้กับภาคเรียนปกติ</li>
                        <li className="text-green">ลงทะเบียนเพิ่มเติม - ลงทะเบียนเป็นรายวิชา ใช้กับภาคเรียนฤดูร้อน</li>
                        <li className="text-red">ลงทะเบียนซ่อม - ลงทะเบียนเพิ่มเติมสำหรับผู้ที่สอบไม่ผ่าน</li>
                      </ul>
                    </li>
                    <li>ระบบตรวจสอบการชำระเงินของนักศึกษา (ภาระค่าใช้จ่าย / ทุน)
                      <ul>
                        <li className="text-yellow">ตรวจสอบการชำระเงิน</li>
                        <li className="text-green">พิมพ์ใบชำระเงิน</li>
                      </ul>
                    </li>
                    <li>ระบบผลการศึกษา - ตรวจสอบผลการเรียนแต่ละภาคการศึกษา</li>
                  </ul>
                </li>
              </ol>
              <h4 style={bold}>ระบบต่างๆที่ User ทั่วไปสามารถใช้งานได้</h4>
              <ul className="text-blue">
                <li>ประวัติส่วนตัว - แสดงข้อมูลผู้ใช้งานแต่ละบุคคล ทุก Role สามารถดูได้</li>
                <li>ระบบเปลี่ยนรหัสผ่าน - เปลี่ยนรหัสผ่าน ทุก Role สามารถเปลี่ยนได้</li>
                <li>แสดงข้อมูลข่าวสาร - สามารถดูข้อมูลข่าวสารจากหน่วยงานได้ ทุก Role สามารถดูได้</li>
              </ul>
              <h4 style={bold}>ระบบต่างๆที่ Guest สามารถใช้งานได้</h4>
              <ul className="text-muted">
                <li>หลักสูตรที่เปิดสอน - ดูข้อมูลหลักสูตรจาก ฐานข้อมูลทั้งหมดได้</li>
                <li>ปฏิทินการศึกษา - ดูข้อมูลกำหนดการในแต่ละปีการศึกษา</li>
              </ul>
              <h3 style={bold}>ER-Diagram</h3>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <Image src="/images/er-diagram/ER_E-student.png" />
                </div>
              </div>
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

export default E_Student;
