import { Col, Container } from "react-bootstrap";
import ProfiloUtente from "../ProfilePage/ProfiloUtente";
import Attivita from "../Attivita/Attivita";
import Education from "../Education/Education";
import { useEffect } from "react";
import { useParams } from "react-router";
import Esperienze from "../Esperienza/Esperienze";
import Skills from "../Skills/Skills";
import Corsi from "../Skills/Corsi";
import Interessi from "../Skills/Interessi";
import Sidebar from "../mySideBar";
import myFooter from "../myFooter";
import "./Profile.css";
import "./ProfileModal.css";

const Profile = ({ userID, setuserID }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <>
      <Container className=" d-flex justify-content-between">
        <div>
          <Col className="profilepage pr-5">
            <ProfiloUtente userID={userID} setuserID={setuserID} />
            <Attivita />

            <Esperienze userID={userID} setuserIDe={setuserID} />
            <Education />
            <Skills />
            <Corsi />
            <Interessi />
          </Col>
        </div>
        <div>
          <Sidebar />
        </div>
      </Container>
      <myFooter />
    </>
  );
};
export default Profile;
