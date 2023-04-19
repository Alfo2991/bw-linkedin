import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import Attivita from "../Attivita/Attivita";
import Education from "../Education/Education";
import { useEffect } from "react";
import { useParams } from "react-router";
import Esperienze from "../Esperienza/Esperienze";
import "./Profile.css";
import profiloUtente from "./ProfiloUtente";

const Profile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <>
      <Col className="home__wrap pr-5">
        <profiloUtente
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
        <Attivita />

        <Esperienze userProfile={userProfile} setUserProfile={setUserProfile} />
        <Education />
      </Col>
    </>
  );
};
export default Profile;
