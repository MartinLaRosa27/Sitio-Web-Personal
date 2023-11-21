import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills" className={"navbar-link text-uppercase"}>
              habilidades
            </Nav.Link>
            <Nav.Link href="#projects" className={"navbar-link text-uppercase"}>
              Proyectos
            </Nav.Link>
            <Nav.Link href="#connect" className={"navbar-link text-uppercase"}>
              contacto
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/MartinLaRosa27" target="_blank">
                {" "}
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-la-rosa/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/martinlr_27/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
