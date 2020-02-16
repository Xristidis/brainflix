import React from 'react';
import './NextVideo.scss';



export default class NextVideo extends React.Component {
    

    
    render() {
        return (
            <section className="next-video">
                <h3>Next Video</h3>
                <div className="next-video__list-wrapper">
                    <div className="next-video__wrapper">
                        <img className="next-video__thumbnail" src="" alt=""/>
                        <div className="next-video__info-wrapper">
                            <div className="next-video__description">Become A Travel Pro In One Easy Lesson</div>
                            <div className="next-video__author">Scotty Canmer</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}