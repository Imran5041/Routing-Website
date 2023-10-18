import './App.css';
import { Route,Redirect, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './Pages/HomePage/Home';
import About from './Pages/AboutPage/About';
import Services from './Pages/ServicePage/Services';
import Contacts from './Pages/ContactPage/Contacts';



function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route  exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Services />} />
          <Route  exact path="/contact" element={<Contacts />} />
          
    </Routes>
    
    


    </div>
  );
}

export default App;
