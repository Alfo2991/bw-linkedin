import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { PencilFill, PlusLg } from "react-bootstrap-icons";
import "./Skillsinteressi.css";

const Skills = () => {
  const [contentToShow, setContentToShow] = useState(false);
  const mostraDiPiu = () => {
    setContentToShow(!contentToShow);
  };

  const FrecciaSu = () => <i className="bi bi-chevron-compact-down ml-1"></i>;
  const FrecciaGiu = () => <i class="bi bi-chevron-compact-up ml-1"></i>;
  const skillsList = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "TypeScript",
    },
    {
      name: "React",
    },
    {
      name: "Redux",
    },
    {
      name: "Redux+React",
    },
  ];
  return (
    <>
      <Card id="skills" className="mb-2  ">
        <Card.Body className="pb-0">
          <div className="d-flex flex-row gap-2 justify-content-between ">
            <Card.Title>Skills</Card.Title>
            <span className="d-flex flex-row ml-auto gap-2">
              <Button className="px-3 py-1 mr-2 m-0 quizComp">
                Quiz valutazioni competenze
              </Button>
              <PlusLg size={26} className="mt-1 mr-4" />
              <PencilFill size={20} style={{ marginTop: ".5em" }} />
            </span>
          </div>

          <Card.Text className="mt-3 mb-0">
            {skillsList.slice(0, 3).map((user, i) => (
              <p key={i}>{user.name}</p>
            ))}
            {contentToShow && (
              <Card.Text className="mt-3 mb-0">
                {skillsList.slice(3, 8).map((user, i) => (
                  <p key={i}>{user.name}</p>
                ))}
              </Card.Text>
            )}
          </Card.Text>

          <Card.Footer className="text-center d-flex justify-content-center">
            <Button
              className="btn-connect card-bottom  align-items-center"
              onClick={() => mostraDiPiu()}
            >
              {contentToShow ? `Riduci` : "Mostra tutte le competenze"}{" "}
              {contentToShow ? FrecciaSu() : FrecciaGiu()}
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
export default Skills;
