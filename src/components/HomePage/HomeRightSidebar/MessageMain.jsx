import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import MessageMiddle from "./MessageMiddle";

const MessageMain = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setProfiles(data);
        console.log(data);
      } else {
        console.log("Error #1");
      }
    } catch (err) {
      console.log("Errore durante la connessione al server");
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="profile-sub-section mt-0 container message-list">
      <Row className=" pt-3 pb-0">
        <Col xs="8">
          <p className=" pl-3 ">Messaggi </p>
        </Col>
        <Col xs="4" className="d-flex align-items-center ">
          <i className="bi bi-three-dots"></i>
          <i className="bi bi-pencil-square"></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            className="w-25"
            type="search"
            placeholder="Search Nessage here"
          />
        </Col>
      </Row>

      <Row className="p-3 mt-0">
        {profiles &&
          profiles.slice(0, 10).map(({ _id, image, name, surname, title }) => (
            <Col xs="12" key={_id}>
              <MessageMiddle
                _id={_id}
                image={image}
                name={name}
                surname={surname}
                title={title}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default MessageMain;
