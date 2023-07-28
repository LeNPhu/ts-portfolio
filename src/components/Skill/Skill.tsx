import { Col, Row, Tooltip, Typography } from "antd";
import "./Skill.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
interface skill {
  id: number;
  name: string;
  img: string;
}
const items: skill[] = [
  {
    id: 0,
    name: "ReactJS",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 50,
    name: "Typescript",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 100,
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    id: 150,
    name: "Html 5",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 200,
    name: "CSS3",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: 250,
    name: "Ant Design",
    img: "https://camo.githubusercontent.com/cca5b713f9e756f45153ecdb0cf565553ad5bd8112c95b4875a613c984f13425/68747470733a2f2f742e616c697061796f626a656374732e636f6d2f696d616765732f726d737765622f5431423968665863647658585858585858582e737667",
  },
  {
    id: 300,
    name: "Sass",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    id: 350,
    name: "Microsoft SQL Server",
    img: "https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg",
  },
  {
    id: 400,
    name: "Redux",
    img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    id: 450,
    name: "Github",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];
const Skill: React.FC = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="skill-container session" id="skill">
        <Typography.Title>
          Some technologies I have worked with
        </Typography.Title>

        <div>
          <Row gutter={[24, 48]}>
            {items.map((i) => {
              return (
                <Col key={i.id} span={6} className="skill">
                  <AnimationOnScroll
                    animateIn="animate__bounceIn"
                    delay={i.id}
                    animateOnce={true}
                  >
                    <Tooltip title={i.name}>
                      <img className="skill-img" src={i.img}></img>
                    </Tooltip>
                  </AnimationOnScroll>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Skill;
