import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "@formspree/react";
import { toast } from "react-hot-toast";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE);

  if (state.succeeded) {
    toast.success("Mensaje enviado con éxito!", {
      style: {
        background: "#333",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "80px",
      },
    });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-uppercase">Contacto</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Nombre"
                          name="firstName"
                          id="firstName"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Dirección de email"
                          id="email"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          placeholder="Mensaje"
                          id="message"
                          name="message"
                          required
                        />
                        <button
                          type="submit"
                          className="btn-enviar"
                          disabled={state.submitting}
                        >
                          <span>{"Enviar"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
