
import './App.css';
import Conatct from './Components/Conatct';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import Loginform from './Components/Loginform';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';



import{ BrowserRouter as Router,Route,Routes} from "react-router-dom"



const App=() =>{
  return (
    <div>

<Router>
  <Navbar/>
  <Routes>

  <Route path="/" element={<Home />}/>
  <Route path="/contact" element={<Conatct />}/>
  <Route path="/loginform" element={<Loginform />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/privacy" element={<Privacy />} />

  </Routes>
  
</Router>

    </div>
  );
}

export default App;
