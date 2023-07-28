import { Layout, theme } from "antd";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Project from "../../components/Project/Project";
import Skill from "../../components/Skill/Skill";
import { Content } from "antd/es/layout/layout";

const Index: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content>
        <div style={{ background: colorBgContainer }}>
          <Header />
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </div>
      </Content>
    </Layout>
  );
};

export default Index;
