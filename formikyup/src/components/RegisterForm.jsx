import { useFormik } from 'formik'

function RegisterForm() {

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            yas: '',
            password: '',
            confirmpassword: '',
            term: ''
        },
    })
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit} >
                <div className='inputDiv'>
                    <label>Email:</label>
                    <input id="email" type="text" placeholder='Email Giriniz...' value={values.email} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Yaş:</label>
                    <input id="yas" type="number" placeholder="Yaşınızı Giriniz" value={values.yas} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="Password Giriniz" value={values.password} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <label>Password Tekrar:</label>
                    <input id="confirmpassword" type="password" placeholder="Şifrenizi Tekrar Giriniz" value={values.confirmpassword} onChange={handleChange} />
                </div>
                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <label>Kullanıcı Sözleşmesini Kabul Ediyorum:</label>
                        <input style={{ width: '20px', height: '15px' }} id="term" type="checkbox" value={values.term} onChange={handleChange} />
                    </div>
                </div>
                <button className='saveButton' type="submit">Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm