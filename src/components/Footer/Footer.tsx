import { MailOutlined, PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import "./Footer.scss";
import React from "react";
import { BackTop } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Thank you for hanging around</p>
        <p>
          Visit the{" "}
          <a href="https://github.com/LeNPhu/ts-portfolio">Repository</a>
        </p>
      </div>
      <div>
        <p>My other contacts</p>
        <p>
          <PhoneOutlined /> <Paragraph copyable>084 383 0295</Paragraph>
        </p>
        <p>
          <MailOutlined />{" "}
          <Paragraph copyable>lenamphu12345@gmail.com</Paragraph>
        </p>
      </div>
      <div>
        <p>Designed and Built by Le Nam Phu</p>
        <p>© Le Nam Phu 2023</p>
      </div>
      <div className="last ">
        <BackTop className="rocket-btn ">
          <RocketOutlined />
          <p className="fly">Fly up!</p>
        </BackTop>
      </div>
    </div>
  );
};

export default Footer;
