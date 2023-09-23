import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from "./Pages/About";
import Contact from './Pages/Contact'



function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
