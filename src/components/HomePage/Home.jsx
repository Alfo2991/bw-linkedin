import { Link } from "react-router-dom";
import MyFooter from "../myFooter";
import Profile from "../ProfilePage/Profile";

const Home = ({ userID, setuserID }) => {
  return (
    <>
      <Profile userID={userID} setuserID={setuserID} />
      <div id="sidebar" className="pl-5 ml-5 mt-4"></div>
      <MyFooter />
    </>
  );
};

export default Home;
