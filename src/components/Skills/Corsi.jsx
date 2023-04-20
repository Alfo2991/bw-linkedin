import { Card } from "react-bootstrap";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import "./Skillsinteressi.css";

const Corsi = () => {
  return (
    <>
      <Card id="corsi" className="mb-2">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Corsi</Card.Title>
            <span className="d-flex flex-row ml-auto">
              <PlusLg size={26} className="mt-1 mr-4" />
              <PencilFill size={20} style={{ marginTop: ".5em" }} />
            </span>
          </div>

          <Card.Text className="mt-3 mb-0">
            <p>Epicode School</p>
            <p>HTML, CSS, JAVASCRIPT, UX/UI, TYPESCRIPT, REACT, REDUX</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Corsi;
