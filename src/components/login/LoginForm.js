import React from 'react'
import ButtonContinue from '../ButtonContinue'

function LoginForm() {
  return (
    <div>
        <form className='form'>
            <input type='username' id='username' maxLength= '30' className='inputForm' name='username' placeholder='Escribe tu usuario' required />
            <input type='username' id='username' maxLength= '30' className='inputForm' name='username' placeholder='Escribe tu contrasena' required />
        </form>
        <ButtonContinue text="Continuar" />

    </div>
  )
}

export default LoginForm