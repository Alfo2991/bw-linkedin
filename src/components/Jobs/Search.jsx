import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleJob from "./SingleJob";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [job, setJob] = useState([]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const fetchSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
        searchQuery +
        "&limit=10"
    );
    if (response.ok) {
      const res = await response.json();
      setJob(res.data);
    } else {
      alert("Error #1");
    }
  };
  return (
    <Container>
      <Row md={8} className="mx-auto mt-2">
        <Col>
          <Form onSubmit={fetchSearch}>
            <Form.Control
              style={{ width: "80%" }}
              type="search"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Cerca per qualifica, competenza o azienda"
            />
          </Form>
        </Col>
      </Row>
      <Row md={3} className="mx-auto mb-5">
        {job &&
          job.map((search) => <SingleJob job={search} key={search._id} />)}
      </Row>
    </Container>
  );
};
export default Search;
