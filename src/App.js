import './App.css';
import Top from './components/Top'
import Home from './components/Home';
import Guides from './components/Guides';
import Flight from './components/Flight';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Top />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/guides" element={<Guides />} />
          <Route exact path="/flights" element={<Flight />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
