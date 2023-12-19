import { Col } from "react-bootstrap";
import Swal from "sweetalert2";

export const ProjectCard = (props: { project: any }) => {
  const handleClick = () => {
    if (props.project.github) {
      Swal.fire({
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: `Deploy`,
        confirmButtonColor: "#7066E0",
        denyButtonText: `Repositorio`,
        denyButtonColor: "#7066E0",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(props.project.url, "_blank");
        } else if (result.isDenied) {
          window.open(props.project.github, "_blank");
        }
      });
    } else {
      window.open(props.project.url, "_blank");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => handleClick()}>
        <img src={props.project.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.project.title}</h4>
          <span>{props.project.description}</span>
        </div>
      </div>
    </Col>
  );
};
