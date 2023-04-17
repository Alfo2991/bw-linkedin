import React from "react";
import { Container, Row, Col, Image, Form, Dropdown } from "react-bootstrap";
import { BsQuestionCircleFill, BsFillGearFill } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Container id="footer">
      <Row className="pb-2 mt-5">
        <Image
          className="footer-logo"
          src="https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png"
          alt="linkedin logo"
          style={{ width: 120 }}
        />
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Row >
            <div className="footer-container d-flex justify-content-between ">
              <div className="mr-3">
                <ul>
                  <li>
                  <a href="#" className="listFooter text-decoration-none">About</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Community Guidelines</a>
                  </li>

                  <li>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="privacyeterms btn btn-link "
                      >
                        Privacy & Terms
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="drop-menu" href="#/action-1">
                          Privacy Policy
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-2">
                          User Agreement
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-3">
                          Cookie Policy
                        </Dropdown.Item>
                        <Dropdown.Item className="drop-menu" href="#/action-4">
                          Copyright Solutions
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Sales solutions</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Safety Center</a>
                  </li>
                </ul>
              </div>

              <div className="mr-3">
                <ul>
                  <li>
                  <a href="#" className="listFooter text-decoration-none">Accessibility</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Careers</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Ad Choices</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Mobile</a>
                  </li>
                </ul>
              </div>

              <div className="mr-3">
                <ul>
                  <li>
                  <a href="#" className="listFooter text-decoration-none">Talent Solutions</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Marketing Solutions</a>
                  </li>
                  <li>
                  <a href="#" className="listFooter text-decoration-none">Advertising</a>
                  </li>

                  <li>
                  <a href="#" className="listFooter text-decoration-none">Small Business</a>
                  </li>
                </ul>
              </div>

              <div id="footer-settings" className="mr-3">
                <div className="ml-2">
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
                  <a href="#" className="listFooter text-decoration-none">Questions?</a>
                  <p> Visit our Help Center. </p>
                </div>

                <div className="ml-2">
                  <BsFillGearFill id="footer-icons" />
                  <a href="#" className="listFooter text-decoration-none"> Manage your account and privacy</a>
                  <p>Go to your Settings.</p>
                </div>

                <div className="ml-2">
                  <div>
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
                  
                    <a href="#" className="listFooter text-decoration-none"> Recommendation transparency</a>
                  <p>Learn more about Recommended Content.</p>
                </div></div>
              </div>

              <div>
                <Col xs={12} md={6} lg={3} className="selectLanguage ">
                  <Form>
                    <Form.Group controlId="languages">
                      <Form.Label>Select Language</Form.Label>
                      <Form.Control as="select">
                        <option>Inglese(English)</option>
                        <option>Italiano(Italian)</option>
                        <option>Russo(Russian)</option>
                        <option>Francese(French)</option>
                        <option>Tedesco(German)</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-start">
          <p>Linkedin Corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
