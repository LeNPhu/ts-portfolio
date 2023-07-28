import React from "react";
import "./About.scss";
import { Col, Divider, Row, Timeline, Typography } from "antd";
import { CheckOutlined, SyncOutlined } from "@ant-design/icons";
import { AnimationOnScroll } from "react-animation-on-scroll";
import cv from "../../assets/pdf/Lê Nam Phú - Frontend Developer_CV.pdf";
const items = [
  {
    dot: <SyncOutlined spin={true} />,
    label: "SEP 2020 - PRESENT",
    children: (
      <>
        <p className="bold">FPT University</p>
        <p>
          Studying Software Enginnering with a speciliazation in Web Design,
          Graduating in early 2024
        </p>
      </>
    ),
  },
  {
    dot: <SyncOutlined spin={true} />,
    label: "MAY 2023 - PRESENT",
    children: (
      <>
        <p className="bold">SHTP Training</p>
        <p>
          Commisioned by SaiGon Hi-Tech Park to create a landing page/student
          managament system as the Capstone Project required for graduation
        </p>
      </>
    ),
  },
  {
    dot: <SyncOutlined spin={true} />,
    label: "JAN 2023 - PRESENT",
    children: (
      <>
        <p className="bold">I.MIU Group</p>
        <p>
          Developed and maintained code for I.Miu - a website providing recipes
          for individuals and families in Viet Nam
        </p>
        <p></p>
      </>
    ),
  },
  {
    dot: <CheckOutlined style={{ color: "green" }} />,
    label: "SEP 2022 - DEC 2022",
    children: (
      <>
        <p className="bold">General Era Digital Solution Joint Stock Company</p>
        <p>
          Worked as an Intern along wonderful colleagues and management as part
          of FPT University's On-The-Job Training Course
        </p>
        <p></p>
      </>
    ),
  },
];

const About: React.FC = () => {
  return (
    <div className="session about-container" id="about">
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="intro">
              <Typography.Title>About me</Typography.Title>
              <Typography.Text className="overview inter">
                I'm a detail-oriented front-end developer passionate about
                creating beautiful experience with code
              </Typography.Text>
              <Divider />
              <Typography.Text>
                As of 2023, Im a final-year student at FPT University studying
                <span className="bold"> Software Engineering</span>. I have
                experience designing and creating websites, from simple landing
                pages to logically-heavy web applications. My main focus is
                creating an intuitive{" "}
                <span className="bold">User Experience</span> while keeping the
                website efficient.
              </Typography.Text>
              <br />
              <br />
              <Typography.Text>
                I love doing intensive research on aspects that I have yet
                clicked with, and I'm always looking for opportunities to work
                with experienced developers and learn as much as I can. My goal
                at the end of the day is to develop the best experience it's
                user didn't know was there.
              </Typography.Text>
              <br />
              <br />
              <Typography.Text>
                I'm also highly proficient with English with an IELTS band of
                8.0
              </Typography.Text>
              <br />
              <br />
              <Typography.Link href={cv} style={{ fontSize: "1.6rem" }}>
                Grab a copy of my CV!
              </Typography.Link>
            </div>
          </AnimationOnScroll>
        </Col>
        <Col span={12}>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce={true}
          >
            <div className="exp">
              <Typography.Title>My Experience</Typography.Title>
              <Timeline mode="left" items={items}></Timeline>
            </div>
          </AnimationOnScroll>
        </Col>
      </Row>
    </div>
  );
};

export default About;
