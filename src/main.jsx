import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContextProvider from "./context/MyContext.jsx"
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextProvider>,
)
