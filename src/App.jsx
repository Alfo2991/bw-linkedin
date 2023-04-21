import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Jobs from "../src/components/Jobs/Jobs";
import Company from "../src/components/Jobs/Company";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import Profile from "./components/ProfilePage/Profile";
import Home from "./components/HomePage/Home";

function App() {
  const [userID, setuserID] = useState({});

  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/Jobs"
            element={<Jobs userID={userID} setuserID={setuserID} />}
          />
          <Route path="/company" element={<Company />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Container fluid="md">
          <div className="App">{/* Contenuto non correlato alle rotte */}</div>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
