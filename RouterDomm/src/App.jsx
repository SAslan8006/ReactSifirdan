import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About';
import Employe from './pages/Employe';
import NotFoundPage from './pages/NotFoundPage.jsx'
import Contact from './pages/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='employee' element={<Employe />} />
          <Route path='company' element={<Employe />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App
