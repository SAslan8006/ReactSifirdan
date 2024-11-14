import { useState } from 'react'
import './App.css'
import {Bounce,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer 
        autoClose={3000} 
        style={{ fontSize: '16px' }} 
        position='top-center'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
        />
    </>
  )
}

export default App
