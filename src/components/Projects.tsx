import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pedidosRapidos from "../assets/img/proyectos/pedidos-rapidos.webp";
import soccerstore from "../assets/img/proyectos/soccerstore.webp";
import uptask2023 from "../assets/img/proyectos/uptask2023.webp";
import doctorweb from "../assets/img/proyectos/doctorweb.webp";
import sitioWebPersonal from "../assets/img/proyectos/sitio-personal.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsWeb = [
    {
      title: "SoccerStore",
      description:
        "HTML / CSS / SCSS / Bootstrap / JavaScript / TypeScript / React.js / Vite / Node.js / GraphQL / MySQL",
      imgUrl: soccerstore,
      url: "https://soccerstore.netlify.app/",
      github: "https://github.com/MartinLaRosa27/SoccerStore",
    },
    {
      title: "Doctor Web",
      description:
        "HTML / CSS / SCSS / Bootstrap / JavaScript / TypeScript / React.js / Vite / ChatGPT",
      imgUrl: doctorweb,
      url: "https://lrdoctorweb.netlify.app/",
      github: "https://github.com/MartinLaRosa27/Doctor-Web",
    },
    {
      title: "UpTask 2023",
      description:
        "HTML / CSS / SCSS / Bootstrap / JavaScript / TypeScript / React.js / Next.js / Node.js / Express / GraphQL / MySQL",
      imgUrl: uptask2023,
      url: false,
      github: "https://github.com/MartinLaRosa27/UpTask",
    },
    {
      title: "Sitio Web Personal",
      description:
        "HTML / CSS / SCSS / Bootstrap / JavaScript / TypeScript / React.js / Vite",
      imgUrl: sitioWebPersonal,
      url: "https://larosamartin.netlify.app/",
      github: "https://github.com/MartinLaRosa27/Sitio-Web-Personal",
    },
  ];

  const projectsMobile = [
    {
      title: "PedidosRapidos",
      description: "JavaScript / TypeScript / React Native / Tailwindcss",
      imgUrl: pedidosRapidos,
      url: false,
      github: "https://github.com/MartinLaRosa27/PedidosRapidos",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="titulo-secciones">Proyectos</h2>
                  <p>
                    ¡Bienvenido/a a la sección de proyectos! Cada proyecto es
                    una oportunidad para explorar nuevas tecnologías,
                    implementar soluciones creativas y mejorar mis habilidades.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Aplicaciones Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Aplicaciones Móviles
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsWeb.map((project, index) => {
                            return (
                              <ProjectCard key={index} project={project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsMobile.map((project, index) => {
                            return (
                              <ProjectCard key={index} project={project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
            <p className="link-github">
              Más proyectos disponibles en mi cuenta{" "}
              <a href="https://github.com/MartinLaRosa27" target="_blank">
                GitHub
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
