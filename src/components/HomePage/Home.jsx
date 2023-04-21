import { Link } from "react-router-dom";
import MyFooter from "../myFooter";
//import DefaultFeeds from "./DefaultFeeds"; <DefaultFeeds />
import UserPosts from "./UserPosts";
import SinglePost from "./SinglePost";
import SingleNews from "./SingleNews";
import Sidebar from "../mySideBar";
//import NewsFeed from "./NewsFeed";  <NewsFeed />
const Home = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <UserPosts />
      <div
        id="sidebar"
        className="pl-5 ml-5 mt-4 d-flex justify-content-between"
      >
        <Sidebar />
      </div>
      <SinglePost />
      <SingleNews />

      <MyFooter />
    </>
  );
};

export default Home;
