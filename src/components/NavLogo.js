import React from 'react'
import '../styles/index.css';
import { Link } from 'react-router-dom';

function NavLogo() {
    return (
        <div>
            <Link to='/' style={{ all:'unset' }}>     
                <div className='navLogo'>
                    <img  className='leftLogo' src='https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg' alt='logo'></img>
                    <p className='textLogo'>Cooworking <span className='textSpan'>Space</span></p>
                </div>
            </Link>
        </div>
    )
}

export default NavLogo