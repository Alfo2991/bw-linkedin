import "./App.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import TopProfile from "./components/TopProfile";

function App() {
  return (
    <div className="App">
      <MyNav />
      <TopProfile />
      {/* <RightSidebar/> */}
      <MyFooter />
    </div>
  );
}

export default App;
