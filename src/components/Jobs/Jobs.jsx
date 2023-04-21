import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Search from "./Search";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs"
    );
    if (response.ok) {
      const res = await response.json();
      const job = res.data;
      console.log(job);
      setPosition(job);
    } else {
      console.log("Error1");
    }
  };
  return (
    <Container>
      <Row>
        <Search />
      </Row>
      <Row md={4} xs={1}>
        {position &&
          position.map((job) => <SingleJob job={job} key={job._id} />)}
      </Row>
    </Container>
  );
};
export default Jobs;
