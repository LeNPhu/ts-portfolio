import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import Link from "antd/es/typography/Link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { SocialIcon } from "react-social-icons";
const social = [
  {
    url: "https://www.facebook.com/mashjroe/",
    name: "Nam Phú",
  },
  {
    url: "https://www.linkedin.com/in/phu-le-nam-8b0484217/",
    name: "Phu Le Nam",
  },
  {
    url: "https://github.com/LeNPhu",
    name: "Le Nam Phu ",
  },
];
const Contact: React.FC = () => {
  const form = useRef(null);
  const sendEmail = (values: any) => {
    values.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ehygusq",
        "template_lccl8zc",
        form.current,
        "T3hGek_mpqWm5Wc-_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="contact-container session" id="contact">
        <div>
          <h1>Send Me An Email</h1>
          <form ref={form} onSubmit={sendEmail} className="email-form">
            <label>YOUR EMAIL</label>
            <Input type="email" name="user-email" bordered={false} />
            <label>SUBJECT</label>
            <Input type="text" name="user-subject" bordered={false} />
            <label>MESSAGE</label>
            <Input.TextArea name="message" bordered={false} />
            <Button value="Send" htmlType="submit" type="primary">
              Send Message
            </Button>
            <p>
              Or send it with{" "}
              <a href="mailto:lenamphu12345@gmail.com">Your Email</a>
            </p>

            <div>
              <p>I'm Also On</p>
              {social.map((i) => {
                return (
                  <>
                    <SocialIcon
                      style={{ margin: "10px" }}
                      url={i.url}
                    ></SocialIcon>
                  </>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Contact;
