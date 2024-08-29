import React from 'react'
import LoginForm from './LoginForm'
import '../../styles/Login.css'
import '../../styles/Buttton.css'
import ButtonContinue from '../ButtonContinue'
function Login() {
  return (
    <div className='form'>
      <div className='loginContainer'>
        <h1>Login</h1>
        <div className='form'>
          <LoginForm text="Ingresar"/>
            <hr className='separator'></hr>
          <h2>No tienes cuenta</h2>
        </div>
        <ButtonContinue text="Registrar" />

      </div>

    </div>
    
  )
}

export default Login