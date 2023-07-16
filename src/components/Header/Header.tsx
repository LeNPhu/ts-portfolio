import { Anchor } from "antd";
import "./Header.scss";
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
  return (
    <header className="header-container">
      <h1 className="logo">N.P</h1>
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
    </header>
  );
};

export default Header;
