import { useFormik } from 'formik'
import { registerFormSchemas } from './../schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            console.log(values) //form değerlerini konsola yazdırma
            action.resetForm() //formu sıfırlama

        }, 1000)
    }
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            yas: '',
            password: '',
            confirmpassword: '',
            term: ''
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit

    })
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit} >
                <div className='inputDiv'>
                    <label>Email:</label>
                    <input id="email" type="text" placeholder='Email Giriniz...' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Yaş:</label>
                    <input id="yas" type="number" placeholder="Yaşınızı Giriniz" value={values.yas} onChange={handleChange} />
                    {errors.yas && <p className='input-error'>{errors.yas}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="Password Giriniz" value={values.password} onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Password Tekrar:</label>
                    <input id="confirmpassword" type="password" placeholder="Şifrenizi Tekrar Giriniz" value={values.confirmpassword} onChange={handleChange} />
                    {errors.confirmpassword && <p className='input-error'>{errors.confirmpassword}</p>}
                </div>
                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <label>Kullanıcı Sözleşmesini Kabul Ediyorum:</label>
                        <input style={{ width: '20px', height: '15px' }} id="term" type="checkbox" value={values.term} onChange={handleChange} />
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}
                </div>
                <button className='saveButton' type="submit">Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm