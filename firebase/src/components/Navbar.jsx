import { signOut } from 'firebase/auth';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        toast.success("Çıkış Başarılı ")
        navigate('/auth')

    }
    return (
        <div className='navbar'>
            <div className='navbar-left'>Firbase</div>
            <div onClick={handleLogout} className='navbar-right'><FaSignOutAlt />Çıkış Yap</div>
        </div>
    )
}

export default Navbar