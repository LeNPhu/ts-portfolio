import { MailOutlined, PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import "./Footer.scss";
import React from "react";
import { BackTop } from "antd";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Thank you for visiting</p>
        <p>
          Visit the <a href="#">Repository</a>
        </p>
      </div>
      <div>
        <p>My other contacts</p>
        <p>
          <PhoneOutlined /> 084 383 0295
        </p>
        <p>
          <MailOutlined /> lenamphu12345@gmail.com
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
