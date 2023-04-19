import "./App.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import "bootstrap/dist/css/bootstrap.min.css";
//import TopProfile from "./components/TopProfile";
import Profile from "./components/ProfilePage/Profile";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Profile />
      <MyFooter />
    </div>
  );
}

export default App;
