import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Jobs.css";

const SingleJob = ({ job }) => {
  return (
    <Card className="cardStyle1 mt-3 ml-3 mr-3 mb-3">
      <Card.Body>
        <Card.Link className="job1 mt-2" href={job.url}>
          {job.title}
          <span>
            <small>({job.job_type})</small>
          </span>
        </Card.Link>
        <Card.Text></Card.Text>
        <Link to={`/${job.company_name}`}>
          <Card.Subtitle className="mt-2 textM">
            {job.company_name}
          </Card.Subtitle>
        </Link>
        <Card.Text>{job.candidate_required_location}</Card.Text>

        <Card.Text className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="green"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
          </svg>
          <small className="ml-1">Actively recruiting</small>
        </Card.Text>

        <Card.Text>{job.publication_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleJob;
