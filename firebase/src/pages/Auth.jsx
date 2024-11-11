import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    return (
        <div className='auth'>
            <h1>Auth</h1>
            <div className='auth-container'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='auth-input' type="text" placeholder='E-mail' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='auth-input' type="password" placeholder='Password' />
            </div>
            <div className='auth-button-container'>
                <button className='auth-button-google'> <FaGoogle style={{ marginRight: '3px', marginTop: '2px' }} />Google Giriş</button>
                <button className='auth-button-giris'>Giriş Yap</button>
                <button onClick={register} className='auth-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth