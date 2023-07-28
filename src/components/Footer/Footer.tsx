import { MailOutlined, PhoneOutlined, RocketOutlined } from "@ant-design/icons";
import "./Footer.scss";
import React from "react";
import { BackTop, Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div>
        <Typography.Text>Thank you for hanging around</Typography.Text>
        <br />
        <Typography.Text>
          Visit the{" "}
          <a href="https://github.com/LeNPhu/ts-portfolio">Repository</a>
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>My other contacts</Typography.Text>

        <br />
        <Typography.Text>
          <PhoneOutlined />{" "}
          <Typography.Text copyable>084 383 0295</Typography.Text>
        </Typography.Text>
        <br />
        <Typography.Text>
          <MailOutlined />{" "}
          <Typography.Text copyable>lenamphu12345@gmail.com</Typography.Text>
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>Designed and Built by Le Nam Phu</Typography.Text>
        <br />
        <Typography.Text>© Le Nam Phu 2023</Typography.Text>
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
