import React, { useState } from 'react'

const index = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='max-w-lg w-full rounded-lg flex flex-col gap-4 border-2 p-10'>
                <h1 className='text-2xl font-bold'>Giriş Yap</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 flex-1'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder='E-mail'
                            className='outline-none flex-1 border-black border-2 px-2 py-1.5 rounded-lg'
                            type='text'
                            id='email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                            placeholder='Password'
                            className='outline-none flex-1 border-black border-2 px-2 py-1.5 rounded-lg'
                            type='password'
                            id='password' />
                    </div>
                    <button type='submit' className='bg-purple-700 rounded-lg flex-1 text-white py-2 px-2 hover:bg-purple-500 transition-colors'>Giriş Yap</button>
                </form>
            </div>

        </div>
    )
}

export default index
