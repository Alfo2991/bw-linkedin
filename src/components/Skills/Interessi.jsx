import { Card, Image } from "react-bootstrap";
import "./Skillsinteressi.css";

const Interessi = () => {
  return (
    <>
      <Card id="interessi" className="mb-2">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row">
            <Card.Title>Interessi</Card.Title>
          </div>

          <Card.Text className="d-flex flex-row mt-3 mb-0">
            <p className="mr-3">Aziende</p>
            <p>Scuole</p>
          </Card.Text>
          <div className="d-flex flex-row  mt-2 border-bottom">
            <div className="d-flex flex-row mr-5">
              <Image
                src="https://imgs.search.brave.com/U84YLc_mSMDN5qtcWYa3cqu-pHaNDc6sumIHuBhojIo/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/dHFxTTVtV2xWTzU0/SlBqRmxTMUd3SGFG/aiZwaWQ9QXBp"
                alt="startup logo"
              />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">Google</h6>
                <p>2,514 followers</p>
              </span>
            </div>
            <div className="d-flex flex-row ml-5">
              <Image
                src="https://strive.school/favicon.ico"
                alt="startup logo"
              />
              <span className="pl-3 d-flex flex-column justify-content-center">
                <h6 className="mb-0">Strive School</h6>
                <p>2,242 followers</p>
              </span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <p className="mb-0">Mostra tutte le aziende (71)</p>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Interessi;
