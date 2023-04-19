import "./App.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import Profile from "./components/ProfilePage/Profile";

function App() {
  return (
    <div>
      <MyNav />
      <Container fluid="md">
        <div className="App">
          <Profile />
        </div>
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
