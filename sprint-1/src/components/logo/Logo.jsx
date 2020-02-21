import React from 'react';
import logo from '../../assets/logo/logo.svg'

import './Logo.scss';

export default class Logo extends React.Component {
    render() {
        return (
            <h1 className="logo">
                <a href="">
                    <img src={logo} alt="logo that reads the word Brainflix" className="logo__image"/>
                </a>
            </h1>
        )
    }
}
