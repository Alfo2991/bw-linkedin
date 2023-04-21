import { Link } from "react-router-dom";
import MyFooter from "../myFooter";
import Profile from "../ProfilePage/Profile";
const Home = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Profile userProfile={userProfile} setUserProfile={setUserProfile} />
      <div id="sidebar" className="pl-5 ml-5 mt-4"></div>
      <MyFooter />
    </>
  );
};

export default Home;
