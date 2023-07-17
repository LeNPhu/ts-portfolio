import { Carousel, Image, Tag, Tooltip } from "antd";
import "./Project.scss";
import imiu from "../../assets/images/imiu.png";
import sbd from "../../assets/images/safe-building.png";
import msg from "../../assets/images/mashenger.png";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { AnimationOnScroll } from "react-animation-on-scroll";
const project = [
  {
    id: 0,
    url: "https://imiu-web.vercel.app/",
    name: "I.MIU",
    desc: "A web application that use customer's provided info to suggest meals and recipes daily catering to different dietary preferences and restrictions ",
    tags: [
      {
        color: "#61DAFB",
        name: "ReactJS",
      },
      {
        color: "#E44D26",
        name: "Html5",
      },
      {
        color: "#2965F1",
        name: "CSS3",
      },
      {
        color: "#764ABC",
        name: "Redux Query",
      },
    ],
  },
  {
    id: 1,
    url: "https://mashenger.vercel.app/",
    name: "Mashenger",
    desc: "A fully operational real-time messaging app using Google Firebase, providing a platform for individuals to communicate with each other, regardless of their physical location",
    tags: [
      {
        color: "#61DAFB",
        name: "ReactJS",
      },
      {
        color: "#E44D26",
        name: "Html5",
      },
      {
        color: "#2965F1",
        name: "CSS3",
      },
      {
        color: "#764ABC",
        name: "Redux",
      },
      {
        color: "#5F30E5",
        name: "Axios",
      },
      {
        color: "#FFCE36",
        name: "Firebase",
      },
    ],
  },
  {
    id: 2,
    url: "https://safe-building-web.vercel.app/login",
    name: "Safe Building",
    desc: "A web application used for managing apartments. Functionalities include registering and managing tenants, flat info, building info, import and export leashing contracts, and more",
    tags: [
      {
        color: "#61DAFB",
        name: "ReactJS",
      },
      {
        color: "#E44D26",
        name: "Html5",
      },
      {
        color: "#2965F1",
        name: "CSS3",
      },
      {
        color: "#764ABC",
        name: "Redux",
      },
      {
        color: "#5F30E5",
        name: "Axios",
      },
    ],
  },
];

const contentStyle: React.CSSProperties = {
  margin: 0,

  height: "300px",
  width: "630px",

  objectFit: "cover",
};
const Project: React.FC = () => {
  const [slide, setSlide] = useState(0);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);

    setSlide(currentSlide);
  };

  return (
    <div className="project-container session" id="project">
      <h1>Some of my work</h1>
      <div className="carousel-container">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          {" "}
          <Carousel
            afterChange={onChange}
            arrows={true}
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
          >
            <div>
              {" "}
              <Image src={imiu} style={contentStyle} />
            </div>
            <div>
              <Image src={msg} style={contentStyle} />
            </div>
            <div>
              <Image src={sbd} style={contentStyle} />
            </div>
          </Carousel>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="project-name" key={project[slide].name}>
          <Tooltip title="Click here to visit the website!">
            <h2>
              {" "}
              <a href={project[slide].url}>{project[slide].name}</a>
            </h2>
          </Tooltip>
          <p>{project[slide].desc}</p>
          <div>
            {project[slide].tags.map((t) => {
              return (
                <Tag key={t.name} color={t.color}>
                  {t.name}
                </Tag>
              );
            })}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Project;
