import './App.css';
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMeDetail from './components/AboutMeDetail';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar colorDedo">
      <Link to="/">Vishal Kashyap</Link>
      <nav>
        <div>
          <Link to="/home" >Home</Link>
          <Link to="/myproject" > My Projects </Link>
          <Link to="/skills" >Skills</Link>
          <Link to="/aboutme" > About me </Link>
        </div>
      </nav>
      <Link className="contactmee" to="/contactus" > Contact Me</Link>
    </header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/myproject" element={<Projects />}></Route>
        <Route path="/aboutme" element={<AboutMeDetail />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
