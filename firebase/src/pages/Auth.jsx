import React from 'react'

function Auth() {
    return (
        <div className='auth'>
            <h1>Auth</h1>
            <div className='auth-container'>
                <input className='auth-input' type="text" placeholder='E-mail' />
                <input className='auth-input' type="password" placeholder='Password' />
            </div>
            <div>
                <button className='auth-button'>Giriş Yap</button>
                <button className='auth-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth