import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} sticky="top">
        <Container>
          <Navbar.Brand href="https://Code-With-Abdul-67.github.io/Cyber-Lunerr-Portfolio">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.reddit.com/user/One-Alternative-7613/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={navIcon1} alt="reddit-link" />
                </a>
                <a
                  href="mailto:xlunerr76@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={navIcon2} alt="mail-link" />
                </a>
                <a
                  href="https://github.com/Code-With-Abdul-67"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={navIcon3} alt="github-link" />
                </a>
              </div>
              <a
                href="/CV.pdf"
                className="resumebtn"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download Resume
              </a>
              <button className="vvd">
                <span></span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
