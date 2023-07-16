import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Project from "../../components/Project/Project";
import Skill from "../../components/Skill/Skill";

const Index: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
