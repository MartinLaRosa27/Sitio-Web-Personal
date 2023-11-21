import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/MartinLaRosa27" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-la-rosa/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/martinlr_27/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Última actualización: Noviembre 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
