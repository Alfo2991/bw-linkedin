import { Card, Container, Row } from "react-bootstrap";
import "./IntestazioneProf.css";

const IntestazioneProf = () => {
  return (
    <>
      <Card
        className="px-2 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <Row>
          <h5 className="title__deco">Informazioni</h5>
        </Row>
        <Row className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus dolore error recusandae non nihil qui praesentium cum
          veritatis aliquam aut, nam, officiis earum iure rerum eum corporis
          repudiandae nobis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit.
        </Row>
      </Card>
      <Card
        className="px-2 mt-4 mb-2"
        style={{
          borderRadius: "9px",
        }}
      >
        <div>
          <h5 className="title">Attività</h5>
        </div>
        <div
          className="card mb-3"
          style={{ overflow: "hidden", margin: "10px", borderRadius: "9px" }}
        >
          <small className="text-muted py-2 px-2">Link · 1anno</small>
          <div className="row g-0" style={{ backgroundColor: "#f9fafb" }}>
            <div className="col-md-6">
              <img
                src="https://cdn.create.vista.com/api/media/small/40712377/stock-photo-portrait-of-young-happy-smiling"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h6 className="card-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </h6>
                <p className="card-text">lorem</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default IntestazioneProf;
