import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import RightSidebar from "./components/mySideBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <MyNav/>
        {/* <RightSidebar/> */}
        <MyFooter/>
       
    </div>
  );
}

export default App;
