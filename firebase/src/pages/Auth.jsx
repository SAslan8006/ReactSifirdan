import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Auth() {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            console.log(user)
            if (user) {
                toast.success("Kayıt Başarılı")
                setEmail("")
                setPassword("");
                console.log(user)
            }
        } catch (error) {
            toast.error(error.message)

        }

    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            console.log(user)
            if (user) {
                toast.success("Giriş Başarılı " + user.email)
                setEmail(user.email)
                setToken(user.accessToken);
                console.log(user)
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message)

        }

    }

    const provider = new GoogleAuthProvider();
    const googlelogin = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;
            console.log(credential)
            if (user) {
                toast.success("Giriş Başarılı " + user.email)
                setEmail(user.email)
                setToken(user.accessToken);
                console.log(user)
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message)

        }

    }

    return (
        <div className='auth'>
            <h1>Auth</h1>
            <div className='auth-container'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='auth-input' type="text" placeholder='E-mail' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='auth-input' type="password" placeholder='Password' />
            </div>
            <div className='auth-button-container'>
                <button onClick={googlelogin} className='auth-button-google'> <FaGoogle style={{ marginRight: '3px', marginTop: '2px' }} />Google Giriş</button>
                <button onClick={login} className='auth-button-giris'>Giriş Yap</button>
                <button onClick={register} className='auth-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth