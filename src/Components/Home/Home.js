import emailjs from "emailjs-com";
import React, { useEffect, useRef, useState } from "react";
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
import ReactImg from "../Images/React.png.png";
import ReduxImg from "../Images/Redux.png";
import HoneywellImg from "../Images/HomeyWell.jpg";
import byjusImg from "../Images/ByjusImg.png";
import OracleImg from "../Images/oracle.png";
import GoldmanImg from "../Images/goldman.png";
import PwcImg from "../Images/pwc.png";
import Loading from "../loading/loading";
import ThanksImg from "../Images/thanks.png";
import LocationGif from "../Images/location.gif";
import PhoneGif from "../Images/phonegif.gif";
import mailGif from "../Images/mailgif.gif";

const Home = () => {
  const form = useRef();
  const [loading, setloading] = useState(false);
  const [formFilled, setformFilled] = useState(false);
  const [errors, seterrors] = useState([]);
  const sendEmail = (e) => {
    setloading(true);

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
          setloading(false);
          setformFilled(true);
        },
        (error) => {
          console.log(error.text);
          setloading(false);
        }
      )
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
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
          <span className="desktopOnly">{text}</span>
        </div>
      </div>
    );
  };
  const CardWithBackImg = ({ img, heading, text1, text2 }) => {
    return (
      <div className="cardsm" style={{ backgroundImage: `url(${img})` }}>
        <div
          className="dhooan"
          style={{ margin: "10px 20px", textAlign: "center" }}
        >
          <h3>{heading}</h3>
          <span style={{ display: "block" }}>{text1}</span>
          <span style={{ display: "block" }}>{text2}</span>
        </div>
      </div>
    );
  };
  const CardShadow = ({ text }) => {
    return (
      <div className="messagesContainer">
        <span>{text}</span>
      </div>
    );
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const Validate = (e) => {
    let ok = true;
    seterrors([]);
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (form?.current.user_name.value.trim() == "") {
      seterrors((state) => [...state, "name"]);
      ok = false;
    }
    if (!form?.current.user_email.value.match(mailformat)) {
      seterrors((state) => [...state, "email"]);
      ok = false;
    }
    if (!form?.current.user_phone.value.match(phoneformat)) {
      seterrors((state) => [...state, "phone"]);
      ok = false;
    }

    if (ok) {
      sendEmail();
    }
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
            img="https://elearningindustry.com/wp-content/uploads/2016/06/9-ways-creating-effective-online-training-strategy-employees.png"
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
        <h3 style={{ padding: "10px 0 0 0" }}>
          Technologies that you will master
        </h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          <SmCard
            img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            heading="Java Script"
            text="JavaScript is the world's most popular programming language ,
            JavaScript is the programming language of the Web ,
            JavaScript is easy to learn ,
            Our faculty will teach you the core basics of JavaScript from basic to advanced"
          />
          <SmCard
            img={ReactImg}
            heading="React"
            text="React is a JavaScript library for building user interfaces ,
            React is used to build single-page applications ,
            React allows us to create reusable UI components , Our main focus will be on react"
          />
          <SmCard
            img={ReduxImg}
            heading="Redux"
            text="Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier."
          />
          <SmCard
            img="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            heading="Github"
            text="GitHub is a code hosting platform for collaboration and version control , 
            GitHub lets you (and others) work together on projects , Our faculty teach you the all github processes & commands you will need during your work"
          />
        </div>
      </div>
      <div class="fixed-bg"></div>
      <div>
        <h1>OUR UNIQUE APPROACH FOR STUDENT SUCCESS</h1>
        <p>
          Our Approach for technology Training recognizes critical IT Skills
          that provide early and mid-career professionals opportunities to excel
          in their Careers. The Course curriculum is designed considering key
          and emerging technologies and is advised by Industry Experts. The
          course enables raw Freshers to be industry-ready.
        </p>
      </div>
      <div className="bbblack ">
        <CardWithBackImg
          img=""
          heading="Placement"
          text1="100% PLACEMENT GUARANTEE"
          text2="#PayAfterPlacement"
        />
        <div className="flex">
          <CardShadow text="Interview Q&A Provided which are frequently asked in Companies" />
          <CardShadow text="Real Time Examples provided To Crack your Interviews" />
          <CardShadow text="We Provide live Projects for practice" />
          <CardShadow text="100% job assistance & assurance" />
          <CardShadow text="Backup classes for missed sessions" />
          <CardShadow text="Our Placement Team will schedule Interviews till you get placed" />
          <CardShadow text="Schedule mock exams & mock interviews" />
          <CardShadow text="Our Experienced Trainers will help you to prepare Resume as per MNC’S Standards" />
          <CardShadow text="Carrier Counselling" />
        </div>
      </div>
      <div>
        <h2>Our Mentors & Alumni Working In</h2>
        <h2>(30+ Companies) Like</h2>
        <div className="flex" style={{ margin: "0 0 40px 0" }}>
          <img src={HoneywellImg} alt="img" className="companyLogo"></img>
          <img src={byjusImg} alt="img" className="companyLogo"></img>
          <img src={OracleImg} alt="img" className="companyLogo"></img>
          <img src={GoldmanImg} alt="img" className="companyLogo"></img>
          <img src={PwcImg} alt="img" className="companyLogo"></img>
        </div>
      </div>

      {!formFilled && (
        <div className="flex" style={{ backgroundColor: "black" }}>
          <div className="myform">
            <h2>Contact Us</h2>
            <Form ref={form} onSubmit={Validate}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  style={
                    errors.includes("name") ? { border: "4px solid red" } : {}
                  }
                  type="text"
                  placeholder="Enter Name"
                  name="user_name"
                />
                {errors.includes("name") && (
                  <span className="errorMsg">Name is Required</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  style={
                    errors.includes("email") ? { border: "4px solid red" } : {}
                  }
                  type="email"
                  placeholder="Enter email"
                  name="user_email"
                />
                {errors.includes("email") && (
                  <span className="errorMsg">Enter A Valid Email</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  style={
                    errors.includes("phone") ? { border: "4px solid red" } : {}
                  }
                  type="number"
                  placeholder="Enter Phone Number"
                  name="user_phone"
                />
                {errors.includes("phone") && (
                  <span className="errorMsg">Enter Valid Phone Number</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Query" name="message" />
              </Form.Group>

              {!loading && (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
              {loading && <Loading />}
            </Form>
          </div>
        </div>
      )}
      {formFilled && <img src={ThanksImg} alt="img" className="thanks" />}
      {/* <div className="SocialMedia">
        <img
          className="mediaIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          alt="img"
        />
        <img
          className="mediaIcon"
          src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
          alt="img"
        />
        <img
          className="mediaIcon"
          src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
          alt="img"
        />
      </div> */}
      <div style={{ textAlign: "left" }}>
        <div>
          <img src={LocationGif} alt="gif" style={{ width: "80px" }}></img>
          <span style={{ fontWeight: "500" }}>
            Talent Stariner Pvt Ltd , Raya Road Sadabad Hathras , Uttar Pradesh
            - 281306{" "}
          </span>
        </div>
        <div>
          <img src={PhoneGif} alt="gif" style={{ width: "80px" }}></img>
          <span style={{ fontWeight: "500" }}> 08267049274 </span>

          <span> (Mon to Fri, 11am to 5pm)</span>
        </div>
        <div>
          <img src={mailGif} alt="gif" style={{ width: "80px" }}></img>
          <span style={{ fontWeight: "500" }}> talentstrainer@gmail.com </span>
        </div>
      </div>
      <div>© Talent Strainer Pvt. Ltd. All Rights Reserved</div>
    </div>
  );
};
export default Home;
