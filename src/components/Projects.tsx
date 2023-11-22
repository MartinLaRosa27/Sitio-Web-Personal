import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import agrimaster from "../assets/img/proyectos/agrimaster.webp";
import construmall from "../assets/img/proyectos/construmall.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsPersonal = [
    {
      title: "SoccerStore",
      description:
        "html, scss, JavaScript, TypeScript, React.js, Vite, Node.js, MySQL & GraphQL",
      imgUrl: agrimaster,
      url: "https://soccerstore.netlify.app/",
    },
  ];

  const projectsVirtualPro = [
    {
      title: "Agrimaster",
      description:
        "html, scss, JavaScript, TypeScript, React.js, Vite, Node.js & MySQL",
      imgUrl: agrimaster,
      url: "https://www.agrimastersrl.com.bo/",
    },
    {
      title: "Construmall",
      description:
        "html, scss, JavaScript, TypeScript, React.js, Vite, Node.js & MySQL",
      imgUrl: construmall,
      url: "https://www.construmall.com.bo/",
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
                  <h2 className="text-uppercase">Proyectos</h2>
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
                        <Nav.Link eventKey="first">Personales</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">VirtualPro</Nav.Link>
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
                          {projectsPersonal.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsVirtualPro.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
