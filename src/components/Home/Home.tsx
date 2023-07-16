import React from "react";
import "./Home.scss";
import { Parallax } from "react-parallax";
import background from "../../assets/images/background.jpg";

const Home: React.FC = () => {
  return (
    <Parallax
      className=""
      strength={-1000}
      bgImage={background}
      bgImageStyle={{ objectFit: "cover", objectPosition: "50%" }}
    >
      <div className="home-container session" id="home">
        <div className="hello-container animate__animated animate__zoomIn">
          <h1 className="hello">Hello there! </h1>
          <h1>I'm Lê Nam Phú,</h1>
          <h1>a Web Developer</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
