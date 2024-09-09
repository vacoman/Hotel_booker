import React from 'react'
import NavLogo from '../components/NavLogo'
//import Login from './../components/SignIn/Login'
import CreateAccount from './../components/Register/CreateAccount';

function RegisterPage() {
  return (
    <div>
        <NavLogo/>
        <CreateAccount text ='Create account'/>
    </div>

  )
}

export default RegisterPage