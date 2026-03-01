import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StarBackground from './StarBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <StarBackground />

        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              VASUDEVA KRISHNA
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <div style={{ paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer" style={{ padding: '2rem 5%' }}>
          <div style={{
            fontSize: '1.8rem',
            color: '#ffd700',
            fontFamily: "'Cinzel Decorative', serif",
            textShadow: '0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.4)',
            letterSpacing: '2px',
            animation: 'pulse 3s infinite alternate'
          }}>
            ॐ नमो भगवते वासुदेवाय नमः
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
