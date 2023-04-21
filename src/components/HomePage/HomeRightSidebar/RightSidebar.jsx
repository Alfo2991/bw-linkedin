import { Card, Button, Image, Row, Col } from "react-bootstrap";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <>
      <Card id="right-sidebar" className="py-2" style={{ borderRadius: "7px" }}>
        <span className="d-flex flex-row">
          <Card.Title className="my-auto px-2">
            Aggiungi il tuo feed{" "}
          </Card.Title>
          <i
            className="bi bi-info-square-fill ml-auto my-auto pr-2"
            style={{ color: "gray" }}
          ></i>
        </span>
        <Card.Body id="follow" className="px-1">
          <div className="d-flex flex-row">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94cOdOL6o0f2LYw8hh8diLEpvPffgsDFxNVUuEKwq1i6-RRaI7ZbraYo1iEe1nQpaemM&usqp=CAU"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Samsung</h6>
              <p>Company · Telecomunications & Technologies</p>
              <Button
                type="button"
                className="btn-connect btn btn-primary px-2 py-1"
              >
                <i className="bi bi-plus"></i> Segui
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row my-3">
            <Image
              src="./images/woman.png"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Stefania E</h6>
              <p>Archivista</p>
              <Button
                type="button"
                className="btn-connect btn btn-primary px-2 py-1"
              >
                <i className="bi bi-plus"></i> Segui
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row">
            <Image
              src="https://www.mediakey.tv/fileadmin/user_upload/EPICODE.png"
              alt="samsung logo"
              className="mr-2"
            />
            <span>
              <h6 className="mb-0">Epicode</h6>
              <p>Company · Developing - Coding </p>
              <Button
                type="button"
                className="btn-connect btn btn-primary px-2 py-1"
              >
                <i className="bi bi-plus"></i> Segui
              </Button>
            </span>
          </div>
        </Card.Body>
        <Card.Footer className="pt-2 pb-0">
          <p>
            {" "}
            Persone che potresti conoscere{" "}
            <i className="bi bi-arrow-right ml-2"></i>
          </p>
        </Card.Footer>
      </Card>
      <Card id="right-sidebar" className="mt-2">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt="linkedin adv"
        />
      </Card>
      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href="">About</a>
            <a href="" className="mx-2">
              {" "}
              Accessibility{" "}
            </a>{" "}
            <a href="">Help center</a>
          </Col>
          <Col xs={12}>
            <a href="">
              {" "}
              Privacy e condizioni <i class="bi bi-chevron-down"></i>{" "}
            </a>
            <a href="" className="mx-2">
              {" "}
              Opzioni per gli annunci pubblicitari
            </a>{" "}
          </Col>
          <Col xs={12}>
            <a href=""> Advertising</a>
            <a href="" className="mx-2">
              {" "}
              Servizi alle aziende <i class="bi bi-chevron-down"></i>{" "}
            </a>{" "}
          </Col>
          <Col xs={12}>
            <a href=""> Scarica l'app di Linkedin</a>
            <a href="" className="mx-2">
              {" "}
              more{" "}
            </a>{" "}
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <Image
              id="linkedin-logo"
              src="https://1000marche.net/wp-content/uploads/2020/03/LinkedIn-Logo-1.png"
              alt="linkedin logo"
              className="mr-2"
            />
            <p>Linkedin Corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RightSidebar;
