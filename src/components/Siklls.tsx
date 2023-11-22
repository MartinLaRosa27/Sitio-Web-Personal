import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiTypescript, SiGraphql, SiMysql } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp.png";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-uppercase">Habilidades</h2>
              <p>
                ¡Bienvenido/a a la sección de habilidades! Como programador web,
                he cultivado un conjunto diverso de habilidades que me permite
                construir experiencias digitales significativas y eficientes.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaHtml5 />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <FaCss3Alt />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <FaSass />
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <FaBootstrap />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <IoLogoJavascript />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <SiTypescript />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <FaReact />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <IoLogoNodejs />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <SiGraphql />
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <SiMysql />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <FaGithub />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <RiEnglishInput />
                  <h5>Inglés Int./Av.</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
