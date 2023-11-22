import { Col } from "react-bootstrap";

export const ProjectCard = (props: {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
}) => {
  const handleClick = () => {
    window.open(props.url, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => handleClick()}>
        <img src={props.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  );
};
