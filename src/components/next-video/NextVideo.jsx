import React from 'react';
import './NextVideo.scss';

export default class NextVideo extends React.Component {
        constructor() {
          super();
          this.state = {
            videos: [
                { 
                id: '12345', 
                title: "Become A Travel Pro In One Easy Lesson", 
                channel: "Todd Welch", 
                image: require("../../assets/images/video-list-1.jpg" )
                },
                { 
                id: '12346',
                title: "Les Houches The Hidden Gem Of The Chamonix",
                channel: "Cornelia Blair",
                image: require("../../assets/images/video-list-2.jpg")
                },
                { 
                id: '12347',
                title: "Travel Health Useful Medical Information For",
                channel: "Glen Harper",
                image: require("../../assets/images/video-list-3.jpg" )
                },
                { 
                id: '12348',
                title: "Cheap Airline Tickets Great Ways To Save",
                channel: "Emily Harper",
                image: require("../../assets/images/video-list-4.jpg" )
                },
                { 
                id: '12349',
                title: "Take A Romantic Break In A Boutique Hotel",
                channel: "Ethan Owen",
                image: require("../../assets/images/video-list-5.jpg" )
                },
                { 
                id: '12350',
                title: "Choose The Perfect Accommodations",
                channel: "Lydia Perez",
                image: require("../../assets/images/video-list-6.jpg" )
                },
                { 
                id: '12351',
                title: "Cruising Destination Ideas",
                channel: "Timothy Austin",
                image: require("../../assets/images/video-list-7.jpg" )
                },
                { 
                id: '12352',
                title: "Train Travel On Track For Safety",
                channel: "Scotty Cranmer",
                image: require("../../assets/images/video-list-8.jpg" )
                },
            ]
          };
        }

    render() {
        return (
            <section className="next-video">
                <h3 className="next-video__header">Next Video</h3>
                <div className="next-video__list-wrapper">
                {this.state.videos.map(videoObj => {
                    return (
                        <div key={videoObj.id} className="next-video__wrapper">
                            <img className="next-video__thumbnail" src={"" + videoObj.image + ""} alt=""/>
                            <div className="next-video__info-wrapper">
                                <div className="next-video__description">{videoObj.title}</div>
                                <div className="next-video__author">{videoObj.channel}</div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </section>
        )
    }
}