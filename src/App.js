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
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/courses">Our Courses</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="courses" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
