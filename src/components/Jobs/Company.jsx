import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { useParams } from "react-router-dom";

const Company = () => {
  const [position, setPosition] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?company=" + params.company
    );
    if (response.ok) {
      const res = await response.json();
      const job = res.data;
      console.log(job);
      setPosition(job);
    } else {
      console.log(
        "Durante il tentativo di recupero dei dati, qualcosa è andato male"
      );
    }
  };
  return (
    <Container>
      <Row md={4} xs={1}>
        {position &&
          position.map((job) => <SingleJob job={job} key={job._id} />)}
      </Row>
    </Container>
  );
};

export default Company;
