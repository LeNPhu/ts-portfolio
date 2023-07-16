import { MailOutlined, PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import "./Footer.scss";
import React from "react";
import { BackTop, Typography } from "antd";

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
          <PhoneOutlined />{" "}
          <Typography.Text copyable>084 383 0295</Typography.Text>
        </p>
        <p>
          <MailOutlined />{" "}
          <Typography.Text copyable>lenamphu12345@gmail.com</Typography.Text>
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
