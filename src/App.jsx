import "./App.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import TopProfile from "./components/TopProfile";
import Insights from "./components/Insights";

function App() {
  return (
    <div className="App">
      <MyNav />
      <TopProfile />
      <Insights />
      <MyFooter />
    </div>
  );
}

export default App;
