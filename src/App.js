
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Science from './components/Science';
import { Switch,Route} from 'react-router';

function App() {


  return (
    <div className="App">

  <Navbar/>

 

  <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/business" component={Business}/>
         <Route exact path="/entertainment" component={Entertainment}/>
         <Route exact path="/health" component={Health}/>
         <Route exact path="/sports" component={Sports}/>
         <Route exact path="/technology" component={Technology}/>
         <Route exact path="/science" component={Science}/>
         <Route component={Home}/>
   
       </Switch>
   

   <Footer/>
    </div>
  );
}

export default App;
