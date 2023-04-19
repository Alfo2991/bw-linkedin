import "./App.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import TopProfile from "./components/TopProfile";

import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
//import TopProfile from "./components/TopProfile";
import Profile from "./components/ProfilePage/Profile";

function App() {
  return (
    <div>
      <MyNav />
      <Container fluid="md">
        <div className="App">
          <TopProfile />
        </div>
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
