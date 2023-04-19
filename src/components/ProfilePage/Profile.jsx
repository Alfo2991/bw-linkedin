import { Col } from "react-bootstrap";
import Attivita from "../Attivita/Attivita";
import Education from "../Education/Education";
import { useEffect } from "react";
import { useParams } from "react-router";
import Esperienze from "../Esperienza/Esperienze";
import "./Profile.css";
import ProfiloUtente from "../ProfilePage/ProfiloUtente";

const Profile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <>
      <Col className="home__wrap pr-5">
        <ProfiloUtente
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
