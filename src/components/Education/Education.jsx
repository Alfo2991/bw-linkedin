import { Card, Container, Row } from "react-bootstrap";
import { PencilFill, PlusLg } from "react-bootstrap-icons";

import "./Education.css";
const Education = () => {
  return (
    <Card
      className="px-2 mt-4 mb-2"
      style={{
        borderRadius: "9px"
      }}
    >
      <span className="d-flex flex-row">
        <h5 className="title__activity mb-4">Formazione</h5>
        <div className="d-flex mr-auto" style={{ marginLeft: "35em" }}>
          <PlusLg size={26} id="" className="mt-4 mr-4" />
          <PencilFill size={20} id="" className="" style={{ marginTop: "1.7em" }} />
        </div>
      </span>

      <div>
        <div className="row w-100">
          <div className="col-md-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXk674kcmHiwGo-4IGvhFdg1-rUUpaDVaRJSjfir0D44dcsAREm7Vgaxm82sJ99aA838&usqp=CAU"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="ml-1"
            />
          </div>
          <div className="col-md-4 jojo text-nowrap">
            <h6>EPicode School </h6>
            <p>
              <small>Front-End Developer</small>
              <br />
              <small className="text-muted ">Gen 2023</small>
              <br />
              HTML, CSS, React, Redux, JS;
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="row">
          <div className="col-md-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
              alt=""
              style={{ width: "3em", height: "3em" }}
              className="mr-2"
            />
          </div>
          <div className="col-md-4 jojo">
            <h6>Google</h6>
            <p>
              <small> Programming & Coding </small>
              <br />
              <small className="text-muted">
                2012 - 2016
                <br />
                Tampa, Florida, USA
              </small>
            </p>
          </div>
        </div>
      </div>
      <Card.Footer className="d-flex justify-content-center text-muted" style={{ backgroundColor: "transparent" }}>
        <Card.Text>Mostra tutti i titoli di studio (2)</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Education;
