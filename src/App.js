import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import TypeAnim from './components/TypeAnim';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
