import React from 'react';
import NavLogo from '../components/NavLogo';
import ButtonContinue from './../components/ButtonContinue';
import { Link } from 'react-router-dom';
//import SigninPage from './SigninPage';
//import RegisterPage from './RegisterPage';

function HomePage() {
  return (
    <div>
      <NavLogo />
        <Link to='/signin' style={{ textDecoration: 'none' }}>
          <ButtonContinue text='Sign in' />
        </Link>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <ButtonContinue text='Create Account' />
        </Link>

    </div>
  );
}

export default HomePage;
