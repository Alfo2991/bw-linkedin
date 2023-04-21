import { useState, useEffect } from "react";
import "../FeaturedPosts/FeaturedPosts";
import SingleNews from "./SingleNews";
import "../Sidebar/Sidebar.css";
import "./Home.css";
import SinglePost from "./SinglePost";
import { Col, Container, Row } from "react-bootstrap";
import RightSidebar from "./HomeRightSidebar/RightSidebar";

const NewsFeed = ({ userID, setuserID }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmOWYxZTA4ZjNkNzAwMTRjM2U5ODciLCJpYXQiOjE2ODE4OTExMDMsImV4cCI6MTY4MzEwMDcwM30.T_dtXS4sdwETVn1QxaN0Er8czTLxIHXKZ40FnaiXnEI`,
          },
        }
      );
      if (response.ok) {
        let responseJson = await response.json();
        console.log("NEWSFEED:", responseJson);
        setPosts(responseJson);
        return posts;
      } else {
        console.log("Error #1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="feed" className="d-flex align-items-center flex-column">
      {posts
        .filter((post) => post.user)
        .slice(0, 6)
        .map((post) => (
          <SingleNews
            image={post.user.image}
            name={post.user.name}
            surname={post.user.surname}
            title={post.user.title}
            text={post.text}
            id={post._id}
            key={post._id}
          />
        ))
        .reverse()}
    </div>
  );
};
export default NewsFeed;
