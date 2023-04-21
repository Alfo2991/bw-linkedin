import "../Sidebar/Sidebar.css";
import { useState } from "react";
import { Col } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import StartAPost from "../FeaturedPosts/StartAPost";
import UserPosts from "./UserPosts";
import RightSidebar from "./HomeRightSidebar/RightSidebar";
import HomeLeftSidebar from "../FeaturedPosts/HomeLeftSidebar";
const DefaultFeeds = ({ userID, setuserID }) => {
  const [postsAdded, setPostsAdded] = useState(0);

  return (
    <>
      <Col md={3} style={{ marginTop: "22px", marginLeft: "70px" }}>
        <HomeLeftSidebar userID={userID} setuserID={setuserID} />
      </Col>
      <Col className="home__wrap pr-5" style={{ marginTop: "-701px" }}>
        <StartAPost />

        <UserPosts postsAdded={postsAdded} />
        <NewsFeed userID={userID} setuserID={setuserID} />
      </Col>
      <Col md={3} id="sidebar" className="" style={{ marginTop: "25px" }}>
        <RightSidebar />
      </Col>
    </>
  );
};
export default DefaultFeeds;
