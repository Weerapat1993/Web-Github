import React, { Component } from 'react';
import Header from '../components/layouts/Header';
import Project from '../components/portfolio/Project';
class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header header="Portfolio" />
        <section className="content">
          <div className="row">
            <Project code="/images/code/Laravel.png" link="http://203.154.106.14/sstc" url="portfolio/e-student" title="E-Student" detail="ระบบลงทะเบียนเรียนออนไลน์" img="/images/portfolio/project1.png" />
            <Project code="/images/code/Laravel.png" link="http://job2.ocsc.go.th/test1/" url="portfolio/e-exam" title="E-Exam" detail="ระบบรับสมัครสอบออนไลน์" img="/images/portfolio/project2.png" />
            <Project code="/images/code/Laravel.png" link="http://asean-ethnic-groups.com/" url="portfolio/ethnic" title="ASEAN Ethnic Groups" detail="ฐานข้อมูลกลุ่มชาติพันธุ์ข้ามแดนอาเซียน" img="/images/portfolio/project3.png" />
            <Project code="/images/code/Laravel.png" link="http://www.treeofsavior-th.com/" url="portfolio/tos" title="Tree of Savior Fansite Thailand" detail="ฐานข้อมูลเกมส์ Tree of Savior" img="/images/portfolio/project4.png" />
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
