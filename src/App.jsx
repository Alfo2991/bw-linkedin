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

function App() {
  const [userProfile, setUserProfile] = useState({});

  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/jobs"
            element={
              <Jobs userProfile={userProfile} setUserProfile={setUserProfile} />
            }
          />
          <Route path="/company" element={<Company />} />
          <Route path="/:profile" element={<Profile />} />
          <Route path="/:footer" element={<MyFooter />} />
        </Routes>
        <Container fluid="md">
          <div className="App">{/* Contenuto non correlato alle rotte */}</div>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
