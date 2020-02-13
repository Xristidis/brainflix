import React from 'react';
import logo from '../../assets/logo/logo.svg';
import portrait from '../../assets/images/Mohan-muruge.jpg';
// import Logo from './Logo';

import './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 class="header__logo">
                    <a href="">
                        <img src={logo} alt="logo that reads the word Brainflix" class="logo__image"></img>
                    </a>
                </h1>
                <form>
                    <input placeholder="Search" className="header__search" type="text"/>
                </form>
                    <div className="header__button-photo-wrapper">
                        <button className="header__button">UPLOAD
                        <i className="button__operator"></i>
                        </button>
                        <div className="header__img-wrapper">
                        <img src={portrait}className="header__img" alt="side profile of human" id=""></img>
                    </div>
                    </div>
                {/* <Logo /> can i create a cpmpnanet of logo and insert it here?*/} 
            </header>
        )
    }
}



