import { Container, Col, Card, Row, Button, Image } from "react-bootstrap";
import "./Profile.css";
import "./ProfileModal.css";
import ProfileEditForm from "./ProfileEditingForm";

const ProfiloUtente = ({ userID }) => {
  return (
    <>
      {" "}
      {userID && (
        <>
          <Card
            style={{
              borderRadius: "9px",
            }}
            className=" mb-4 px-2"
          >
            <Container
              className=" pb-4 "
              style={{
                background: "#fff",
                borderRadius: "7px",
              }}
            >
              <Row className="profile__bg">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/996/859/small/abstract-minimal-earth-tone-long-banner-template-organic-shapes-floral-and-leaves-background-with-copy-space-for-text-facebook-cover-free-vector.jpg"
                  alt=""
                />
              </Row>
              <Row className="profile__photo ml-1">
                <img
                  className="img-fluid"
                  src={userID.image}
                  alt="fotoprofilo"
                />
              </Row>

              <Col style={{ marginLeft: "9em" }}>
                <ProfileEditForm profileDetails={userID} />
              </Col>

              <Row className="user__detail ">
                <Col xs={12} md={8}>
                  <h4 className="name mb-0">
                    {userID.name} {userID.surname}
                  </h4>
                  <p className="my-0 occupation">{userID.title}</p>
                  <p className="my-0 location text-muted">
                    Milano, Lombardia, Italia
                  </p>

                  <p className="my-2 connections">
                    200 follower - 164 collegamenti
                  </p>
                  <div className="d-flex justify-content-start w-100">
                    <Button className="profile__button open-to-btn">
                      Disponibile per
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="add__btn profile__button  mx-3"
                    >
                      Aggiungi sezione profilo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="profile__button"
                    >
                      Altro
                    </Button>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <ul>
                    <li className="education mb-1">
                      <img
                        src="https://strive.school/favicon.ico"
                        alt=""
                        style={{ width: "3em", height: "3em" }}
                        className="mr-2"
                      />{" "}
                      Strive school
                    </li>

                    <li className="education">
                      <img
                        src="https://www.neamedia.it/files/gallery/realizzazione-logo-aziendale-aspire.jpg"
                        alt=""
                        style={{ width: "3em", height: "3em" }}
                        className="mr-2"
                      />{" "}
                      Tech University
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Card>
        </>
      )}{" "}
    </>
  );
};
export default ProfiloUtente;
