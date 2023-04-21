import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SinglePost from "./SinglePost";
const UserPosts = ({ postsAdded }) => {
  const [posts, setPosts] = useState(null);
  const [numOfPosts, setNumOfPosts] = useState(20);

  const [postsChanged, setPostsChanged] = useState(0);
  const [postId, setpostId] = useState(null);
  const [postIdDetails, setpostIdDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const fetchPostDetails = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setpostIdDetails(data);
      } else {
        console.error("Fetch Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, [postId]);

  const handleEdit = (id) => {
    setpostId(id);
    handleShowModal();
  };

  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (response.status === 401) alert("Non puoi eliminare altri post");

      if (response.ok) {
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            text: postIdDetails.text,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (response.status === 401) alert("Non puoi aggiornare gli altri post");
      if (response.ok) {
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error("Fetch fallita");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postsAdded, postsChanged]);

  return (
    <>
      {posts &&
        posts
          .slice(posts.length - numOfPosts, posts.length)
          .reverse()
          .map((post) => <SinglePost post={post} handleEdit={handleEdit} />)}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{postIdDetails?.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              as="textarea"
              className="border-0"
              rows={3}
              value={postIdDetails?.text}
              onChange={(e) =>
                postIdDetails({
                  ...postIdDetails,
                  text: e.target.value,
                })
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpdatePost}>
            Aggiorna
          </Button>
          <Button variant="danger" onClick={handleDeletePost}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UserPosts;
