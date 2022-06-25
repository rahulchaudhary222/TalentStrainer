import emailjs from "emailjs-com";
import React, { useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormLabel,
  Form,
  Button,
} from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlnhk8a",
        "template_czehp1f",
        form.current,
        "gna_OGLQ8is6lv4DQ"
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
  const Card = ({ img, heading, text }) => {
    return (
      <div className="cardbig dhooan">
        <img src={img} alt="img"></img>
        <h3>{heading}</h3>
        <span>{text}</span>
      </div>
    );
  };
  const SmCard = ({ img, heading, text }) => {
    return (
      <div className="cardsm" style={{ display: "flex" }}>
        <img src={img} alt="img"></img>
        <div className="dhooan" style={{ margin: "10px 20px" }}>
          <h3>{heading}</h3>
          <span>{text}</span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bbgradient">
        <h2 style={{ padding: "10px 0" }}>Our Services</h2>
        <div className="flex">
          <Card
            img="https://myviewboard.com/blog/wp-content/uploads/2020/08/MP0027-01-scaled.jpg"
            heading="Classroom Training"
            text="Experienced Faculty team provides the training suitable for all
            aspiring IT Professionals"
          />
          <Card
            img="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/07/12/online-class.png?itok=8x33zwrQ"
            heading="Online Training"
            text="Classroom Type Enviroment provided classes online on best available platforms by the same faculty as Classroom Programme"
          />
          <Card
            img="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png"
            heading="Placement & Staffing"
            text="We will arrange the interview schedule through our clients when students need Placement Training."
          />
        </div>
      </div>
      <div className="bbblack">
        <div style={{ padding: "20px" }}>
          <SmCard
            img="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            heading="HTML"
            text="HTML is the standard markup language for Web pages ,
            With HTML you can create your own Website , 
            HTML is easy to learn
            Our Expert Faculty will teach you the core basics of html within a few days
            You will Enjoy It!"
          />
          <SmCard
            img="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            heading="CSS"
            text="CSS is the language we use to style an HTML document ,
            CSS describes how HTML elements should be displayed ,
            Our faculty will teach you CSS from basic to advanced."
          />
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="user_name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="user_email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              name="user_phone"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Query" name="message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Home;
