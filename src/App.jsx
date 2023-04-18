import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Insights from './components/Insights'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <MyNav/>
        <Insights/>
        <MyFooter/>
       
    </div>
  );
}

export default App;
