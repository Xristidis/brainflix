import React from 'react';
import './Video.scss';
import VideoPlaceholder from '../../assets/images/video-list-0.jpg'
import views from '../../assets/icons/SVG/Icon-views.svg' // sometimes assets dont show
import likes from '../../assets/icons/SVG/Icon-likes.svg'


export default class Video extends React.Component {
    
    render() {
        return (
                <section className="main-video__section-wrapper">
                    <div className="main-video__video-wrapper">
                        <img src={VideoPlaceholder} className="main-video__image"/>
                        <div className="main-video__video-buttons">
                            <button src="" className="main-video__play"></button>
                            <div className="main-video__play-bar"></div>
                            <div className="main-video__full-sound"></div>
                        </div>
                    </div>
                    <div className="main-video__data-wrapper">
                        <h1 className="main-video__header">BMX Rampage: 2018 Highlights</h1>
                        <div className="main-video__author-date">
                            <p className="main-video__author">By Red Cow</p>
                            <p className="main-video__date">12/18/2018</p>
                        </div>
                        <div className="main-video__info-wrapper">
                            <div className="main-video__views">
                                <img src={views}className="main-video__view-icon"/>
                                <p className="">1,001,023</p>
                            </div>
                            <div className="main-video__likes">
                                <img src={likes} className="main-video__like-icon"/>
                                <p className="main-video__like-count">110,985</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-video__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
                    </div>
                </section>
        )
    }
}