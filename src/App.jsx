import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';


import './App.css'

function App() {
  

  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
        </Routes>
    </Router>
  )
}

export default App
