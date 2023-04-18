import { Container, Button, Card, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <Container>
      <Row className="d-flex flex-row align-items-center px-2">
        <Card className="cardImgsideBar d-flex flex-row mt-1">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="fotoTonde align-self-start"
          />
          <Card.Body className="flex-column">
            <Card.Title className="ms-5">
              <Link to={`/profile/1`} className="link-sidebar">
                John Doe
              </Link>
              <span className="text-muted fs-6 ms-1">• 3°+</span>
            </Card.Title>
            <Card.Text className="ms-5">Software Engineer</Card.Text>
            <Button className="my-2 bottoneSideBar">
              <BsFillPersonPlusFill className="me-2" />
              Collegati
            </Button>
          </Card.Body>
        </Card>
      </Row>
      <Row className="d-flex flex-row align-items-center px-2">
        <Card className="cardImgsideBar d-flex flex-row mt-1">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150" 
            alt="Profile Picture"
            className="fotoTonde align-self-start"
          />
          <Card.Body className="flex-column">
            <Card.Title className="ms-5">
              <Link to={`/profile/2`} className="link-sidebar">
                Jane Doe
              </Link>
              <span className="text-muted fs-6 ms-1">• 3°+</span>
            </Card.Title>
            <Card.Text className="ms-5">Product Manager</Card.Text>
            <Button className="my-2 bottoneSideBar">
              <BsFillPersonPlusFill className="me-2" />
              Collegati
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default RightSidebar;