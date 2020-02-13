import React from 'react';
import logo from '../../assets/logo/logo.svg'

import './Logo.scss';

const Logo = () => {
    return (
        <h1 class="logo">
            <a href="">
                <img src={logo} alt="logo that reads the word Brainflix" class="logo__image"></img>
            </a>
        </h1>
    )
}

export default Logo