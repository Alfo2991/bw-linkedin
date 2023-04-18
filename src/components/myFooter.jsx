import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container className="mt-5 mb-5 textf">
      <Row>
        <Col lg={12}></Col>
        <Col lg={2}>
          <div>
            <ul className="textf">
              <li>Informazioni</li>
              <li>Linee guida della community</li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="privacyeterms text-left bg-transparent border-0 text-dark font-weight-bold"
                  >
                    Privacy &amp; Terms
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="drop-menu" href="#/action-1">
                      Informativa sulla privacy
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu" href="#/action-2">
                      Contratto di licenza
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu" href="#/action-3">
                      Informativa sui cookie
                    </Dropdown.Item>
                    <Dropdown.Item className="drop-menu" href="#/action-4">
                      Informativa sul copyright
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>Sales Solutions</li>
              <li>Centro sicurezza</li>
            </ul>
          </div>
        </Col>
        <Col lg={2}>
          {" "}
          <div>
            <ul className="textf">
              <li>Accessibilità</li>
              <li>Carriera</li>
              <li>Opzioni per gli annunci pubblicitari</li>
              <li>Mobile</li>
            </ul>
          </div>
        </Col>
        <Col lg={2}>
          {" "}
          <div>
            <ul className="textf">
              <li>Talent Solutions </li>
              <li>Soluzioni di marketing</li>
              <li>Pubblicità</li>
              <li>Piccole imprese</li>
            </ul>
          </div>
        </Col>
        <Col lg={3}>
          <div className="d-flex mb-3">
            <div className="d-flex align-items-center">
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
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
              </svg>
            </div>
            <div className="d-flex flex-column">
              <span>Domande?</span>
              <span>Visita il nostro Centro assistenza.</span>
            </div>
          </div>
          <div className="d-flex ">
            <div className="d-flex align-items-center">
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
                <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
              </svg>
            </div>
            <div className="d-flex flex-column">
              <span>Gestisci il tuo account e la tua privacy</span>
              <span>Vai alle impostazioni</span>
            </div>
          </div>
          <div className="d-flex t">
            <div className="d-flex align-items-center">
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
                <path d="M12 4.11V19.6l-3-2a9 9 0 01-4-7.49V6.44l7-2.33M12 2L3 5v5.11a11 11 0 004.9 9.16L12 22l4.1-2.73a11 11 0 004.9-9.16V5z"></path>
              </svg>
            </div>
            <div className="d-flex flex-column">
              <span>Trasparenza sui contenuti consigliati</span>
              <span>Scopri di più sui contenuti consigliati.</span>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="d-flex flex-column">
            <label>Seleziona lingua</label>
            <select name="language">
              <option value="Italian">Italian (Italia)</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Albanian">Albanian</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="Swahili">Swahili</option>
              <option value="Hindu">Hindu</option>
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
