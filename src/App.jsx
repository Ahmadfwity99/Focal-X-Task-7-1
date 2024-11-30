import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/Pages/Home/Home';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/Focal-X-Task-7-1' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;