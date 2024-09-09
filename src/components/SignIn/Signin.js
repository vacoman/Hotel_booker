import React from 'react'
import Form from './Form'
import '../../styles/Login.css'
import '../../styles/Buttton.css'
import ButtonContinue from '../ButtonContinue'
import { Link } from 'react-router-dom'


function Login(props) {
  const {text} = props;
  return (
    <div className='form'>
      <div className='loginContainer'>
        <h1>{text}</h1>
        <div className='form'>
          <Form nombre ='correo' correo ='Password'/>
          <Form nombre ='contraseña' correo ='Password'/>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <ButtonContinue text=' Sign in'/>
            </Link>
              <hr className='separator'></hr>
            <h2>Don't have an account?</h2>
          <Link to='/Register' style={{ textDecoration: 'none' }}>
          <ButtonContinue text="Create Account" />
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Login