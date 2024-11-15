import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import HomePage from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />

        </Routes>
    )
}

export default RouterConfig