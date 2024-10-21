import { useContext, useState } from 'react'
import './App.css'
// import Button from './components/buttons/';
// // import Input from './components/input/index';
// // import CheckBox from './components/checkbox';
// import Login from './components/login';
// import { MyComponent } from './MyComponent';
// import { MyContext } from './context/MyContext';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Routes>
      <Route path={"/*"} element={<AppRouter />} />
    </Routes>

  )
}

export default App
