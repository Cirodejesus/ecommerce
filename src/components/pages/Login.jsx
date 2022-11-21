import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../constants/env'
import { setToken } from '../../helpers/auth'
import LoginTemplate from '../templates/LoginTemplate'

const Login = () => {
const nav = useNavigate() 

const [error, setError] = useState()

// Fuction: handleSubmit funciona para el envio del formulario.
const handleSubmit = (e) => {
  e.preventDefault()
  setError()
  //  objecto para el email
  const data = {
    email: e.target.email.value,
    password: e.target.password.value
  }
/**.then quiero ver que respuesta me envia backend
 * .catch si la resp falla, quiero extender ese error */
  axios
  .post(`${API_URL}/public/login`, data)
  .then(resp => {
    setToken(resp.data.data.token)
    nav("/")
  })
  .catch((err) => {
    setError(err)
  })
}


  return (
  <LoginTemplate>
     <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input 
        type="email"
          placeholder='Correo electrónico'
          name='email'
          require
          />
      </div>
      <div className='mb-4'>
        <input 
        type="password" 
        placeholder='Contraseña'
        name='password'
        required
        />
      </div>
      <div className='text-center pt-1 mb-12 pb-1'>
        <button className='bg-gradient w-full' type='submit'>
            Ingresar
        </button>
        <Link className='text-gray-500' to='/registro'>
          ¿Deseas registrarte?
        </Link>
      </div>
      {error && (
        <p className='text-center p-2 bg-red-100 text-red-800'>
          {error?.response?.data?.data}
        </p>
      )}
      </form>
  </LoginTemplate>
  )
}

export default Login
