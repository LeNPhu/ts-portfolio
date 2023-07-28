import { Anchor, Switch, Typography } from "antd";
import "./Header.scss";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Theme, useTheme } from "../../config/Theme/ThemeContext";

const items = [
  {
    key: "home",
    href: "#home",
    title: "Home",
  },
  {
    key: "about",
    href: "#about",
    title: "About",
  },
  {
    key: "skill",
    href: "#skill",
    title: "Skill",
  },
  {
    key: "project",
    href: "#project",
    title: "Projects",
  },
  {
    key: "contact",
    href: "#contact",
    title: "Contact",
  },
];

const Header: React.FC = () => {
  const { themes, setTheme } = useTheme();
  const updateTheme = () => {
    const newTheme = themes === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    console.log(themes);
  };
  return (
    <header className="header-container">
      <Typography.Title level={2} className="logo inter">
        N.P
      </Typography.Title>
      <Anchor
        className="anchor"
        //  <p>Home</p>
        // <p>About</p>
        // <p>Services</p>
        // <p>Porfolio</p>
        // <p>Contact</p>
        direction="horizontal"
        items={items}
      ></Anchor>
      <Switch
        style={{ fontSize: "3rem" }}
        defaultChecked
        checkedChildren={<BsSunFill />}
        unCheckedChildren={<BsMoonFill />}
        onChange={updateTheme}
      ></Switch>
    </header>
  );
};

export default Header;
