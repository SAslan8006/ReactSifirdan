import { useEffect, useState } from 'react'
import './App.css'
import {Bounce,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import RouterConfig from './router/RouterConfig';
import StorageService from './services/StorageService';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import BasketDetails from './components/BasketDetails';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = StorageService.read("currentUser");
    if (!currentUser && window.location.pathname !== '/register') {
      navigate("/login");
    }
  }, [])
  return (
    <>
     
         <div className='App' style={{ height: '100vh' }}>
      {StorageService.read("currentUser") && <Navbar/>}
      <Spinner />
      <RouterConfig /> 
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
      <BasketDetails />
    </div>

    </>
  )
}

export default App
