import React, { useState } from 'react';
import Form from '../SignIn/Form';
import ButtonContinue from '../ButtonContinue';
import { Link } from 'react-router-dom';

function Register(props) {
  const { text } = props;
  
  // Estados para las contraseñas y el mensaje de error
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el registro
  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
    } else {
      setError('');
      // Aquí puedes hacer la lógica para enviar el formulario o redirigir
      alert('Registro exitoso');
    }
  };

  return (
    <div className='form'>
      <div className='loginContainer'>
        <h1>{text}</h1>
        <div className='form'>
          <Form nombre="Nombre" />
          <Form nombre="Apellido" />
          <Form nombre="Usuario" />
          <Form nombre="Address" />
          <Form nombre="Email" />
          
          {/* Inputs para la contraseña y confirmación */}
          <input 
            type="password" 
            placeholder="Password" 
            className='inputForm' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Confirm password" 
            className='inputForm' 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />

          {/* Mostrar mensaje de error si las contraseñas no coinciden */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        {/* Botón de registro */}
        <Link to='/' style={{ textDecoration: 'none' }}>
        <button style={{ all: 'unset' }} onClick={handleRegister}>
          <ButtonContinue text="Register" />
        </button>
        </Link>

        <hr className='separator' />
        <h2>Already have an account?</h2>
        <Link to='/signin' style={{ textDecoration: 'none' }}>
          <ButtonContinue text="Sign in" />
        </Link>
      </div>
    </div>
  );
}

export default Register;
