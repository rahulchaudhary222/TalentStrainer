import "./App.css";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Logo from "./Components/Images/logo.png";
function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <span>Talent Stariner</span>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/ContactUs">Contact Us</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ContactUs" element={<Home />} />
          <Route path="courses" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
