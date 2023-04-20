import { Col, Container } from "react-bootstrap";
import Attivita from "../Attivita/Attivita";
import Education from "../Education/Education";
import { useEffect } from "react";
import { useParams } from "react-router";
import Esperienze from "../Esperienza/Esperienze";
import "./Profile.css";
import ProfiloUtente from "../ProfilePage/ProfiloUtente";
import Skills from "../Skills/Skills";
import Corsi from "../Skills/Corsi";
import Interessi from "../Skills/Interessi";
import Sidebar from "../mySideBar";
import Footer from "../myFooter";

const Profile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <>
      <Container className=" d-flex justify-content-between">
        <div>
          <Col className="profilepage pr-5">
            <ProfiloUtente
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
            <Attivita />

            <Esperienze
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
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
      <Footer />
    </>
  );
};
export default Profile;
