import React from "react";
import Card from "react-bootstrap/Card";

const Sidebar = () => {
  return (
    <div className="sidebarcard">
      <Card>
        <Card.Body className="cardbody">
          <Card.Title className="title1">Altri Profili consultati</Card.Title>
          <Card.Text className="align-itens-center text-align nome">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="profile-image"
              className="profileimg"
            />
            <span>
              <span>
                Mario Rossi · <span className="primo">1°+</span>
              </span>
            </span>
          </Card.Text>
          <button className="btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="send"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
            Messagio
          </button>
        </Card.Body>

        <Card.Body>
          <hr className="hr1" />
          <Card.Text className="align-itens-center text-align nome">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="profile-image"
              className="profileimg"
            />
            <span>
              <span>
                Mario Rossi · <span className="primo">2°</span>
              </span>
            </span>
          </Card.Text>
          <button className="btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="send"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
            Messagio
          </button>
        </Card.Body>

        <Card.Body>
          <hr className="hr1" />
          <Card.Text className="align-itens-center text-align nome">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="profile-image"
              className="profileimg"
            />
            <span>
              <span>
                Mario Rossi · <span className="primo">3°+</span>
              </span>
            </span>
          </Card.Text>
          <button className="btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="send"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
            Messagio
          </button>
        </Card.Body>

        <Card.Body>
          <hr className="hr1" />
          <Card.Text className="align-itens-center text-align nome">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="profile-image"
              className="profileimg"
            />
            <span>
              <span>
                Mario Rossi · <span className="primo">4°+</span>
              </span>
            </span>
          </Card.Text>
          <button className="btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="send"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
            Messagio
          </button>
        </Card.Body>
        <hr className="hr2" />
        <Card.Title className="title2">
          Visualizza Altro
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down ms-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Card.Title>
      </Card>
    </div>
  );
};

export default Sidebar;
