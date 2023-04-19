import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";

import Sidebar from "./mySideBar";
import Insights from "./Insights";
import Resources from "./Resources";

import "../App.css";
function TopProfile() {
  return (
    <div className="biggerContainer d-flex align-items-stretch">
      <Row>
        <Col md={8} className="bigContainer">
          <div className="profile">
            <div className="profileWall">
              <img
                className="background"
                src="https://img.freepik.com/premium-photo/blue-paper-linkedin-abstract-background_608068-5075.jpg"
                alt=""
              />
              <div className="imageProfile">
                <img
                  src="https://cdn.create.vista.com/api/media/small/40712377/stock-photo-portrait-of-young-happy-smiling"
                  alt=""
                />
              </div>
              <div className="camera">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                </svg>
              </div>
            </div>
            <div className="botContainer">
              <div className="penna">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </div>
              <div className="contLeft">
                <div className="name">Andrea Caforio</div>
                <div className="formazione">
                  Studente presso IPC F. CASTOLDI
                </div>
                <div className="address">
                  Valeggio, Lombardia, Italia ·{" "}
                  <a href="#">
                    <span>Informazioni di contatto</span>
                  </a>
                </div>
                <div className="buttons">
                  <button id="blu">Disponibile per</button>
                  <button id="bluW">Aggiungi sezione del profilo</button>
                  <button id="grigio">Altro</button>
                </div>
              </div>
              <div className="contRight">
                <div className="img"></div>
                <div>Castoldi</div>
              </div>
            </div>
          </div>
          <Insights />
          <Resources />
        </Col>

        <Col md={4} className="sidebarContainer">
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default TopProfile;
