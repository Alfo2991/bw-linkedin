import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import { IoSend } from "react-icons/io5";

import SingleExperience from "./SingleExperience";

const Esperienze = () => {
  const [experiences, setEsperienze] = useState([]);

  const [esperienza, setEsperienza] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "" || null,
    description: "",
    area: "",
  });
  const params = useParams();

  const [addEsperienza, setAddEsperienza] = useState(false);

  const closeAddEsperienza = () => setAddEsperienza(false);
  const showAddEsperienza = () => setAddEsperienza(true);

  const sendEsperienza = async (e) => {
    e.preventDefault();
    const exp = {
      ...esperienza,
    };
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/61e68379c2c1880015ab949c/experiences`,
        {
          method: "POST",
          body: JSON.stringify(exp),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI
            `,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setEsperienza(data);
        alert("Commento aggiunto!");
      } else {
        console.log("error");
        alert("qualcosa non ha funzionato! Controlla");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const getEsperienze = async (profileID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI
            `,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const experiences = await response.json();
        return experiences;
      } else {
        console.log("qualcosa non ha funzionato! Riprova");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEsperienzeById = async () => {
    try {
      const resp = await getEsperienze(params.id);
      setEsperienze(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getEsperienzeById(), []);

  return (
    <>
      {" "}
      {experiences && (
        <>
          <Card
            className="px-2 mt-4 mb-2"
            style={{
              borderRadius: "9px",
            }}
          >
            <span className="d-flex flex-row mb-3">
              <h5 className="title__activity mb-4">Esperienza</h5>
              <div className="d-flex mr-auto" style={{ marginLeft: "35em" }}>
                <PlusLg
                  size={26}
                  id=""
                  className="mt-4 mr-4"
                  onClick={showAddEsperienza}
                />
              </div>
            </span>

            {experiences.map(
              ({
                company,
                _id: id,
                role,
                area,
                startDate,
                endDate,
                description,
              }) => (
                <>
                  <div className="">
                    <SingleExperience
                      key={id}
                      company={company}
                      id={id}
                      role={role}
                      area={area}
                      description={description}
                      startDate={startDate}
                      endDate={endDate}
                    />
                  </div>
                </>
              )
            )}
          </Card>
          <Modal show={addEsperienza} onHide={closeAddEsperienza}>
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi posizione lavorativa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={sendEsperienza}>
                <Form.Group>
                  <Form.Label>Compagnia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome compagnia"
                    required
                    value={esperienza.company}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        company: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ruolo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ruolo"
                    value={esperienza.role}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        role: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Descrizione attività"
                    value={esperienza.description}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Luogo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Luogo"
                    required
                    value={esperienza.location}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        location: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Data inizio</Form.Label>
                  <Form.Control
                    type="date"
                    value={esperienza.startDate}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        startDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Data fine</Form.Label>
                  <Form.Control
                    type="date"
                    value={esperienza.endDate}
                    onChange={(e) =>
                      setEsperienza({
                        ...esperienza,
                        endDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  <IoSend size={26} />
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}{" "}
    </>
  );
};
export default Esperienze;
