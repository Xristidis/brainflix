import React from 'react';
import portrait from '../../assets/images/Mohan-muruge.jpg';
import './Button.scss'

export default class Button extends React.Component {
    render() {
        return (
            <div className="header__button-photo-wrapper">
                    <button className="header__button">UPLOAD
                        <img className="button__operator"></img>
                    </button>
                    
                <div className="header__img-wrapper">
                    <img src={portrait}className="header__img" alt="side profile of human" id=""></img>
                </div>
            </div>
        )
    }
}