import "../FeaturedPosts/FeaturedPosts";
import Profile from "../ProfilePage/Profile";

const Home = ({ userProfile, setUserProfile }) => {
  return (
    <>
      <Profile userProfile={userProfile} setUserProfile={setUserProfile} />
      <div id="sidebar" className="pl-5 ml-5 mt-4">
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
