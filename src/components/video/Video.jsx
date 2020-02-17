import React from 'react';
import './Video.scss';
import VideoPlaceholder from '../../assets/images/video-list-0.jpg'
import views from '../../assets/icons/SVG/Icon-views.svg'
import likes from '../../assets/icons/SVG/Icon-likes.svg'
import play from '../../assets/icons/PNG/Icon-play.png'
import duration from '../../assets/icons/PNG/Icon-scrubber-control.png'
import fullscreen from '../../assets/icons/PNG/Icon-fullscreen.png'
import volume from '../../assets/icons/PNG/Icon-volume.png'

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  var aDay = 24*60*60*1000;
  console.log(timeSince(new Date(Date.now()-aDay)));
  console.log(timeSince(new Date(Date.now()-aDay*2)));

export default class Video extends React.Component {
    constructor() {
        super();
        this.state = {
            Mainvideo: [
                {
                id: '12339',
                title: 'BMX Rampage: 2018 Highlights',
                description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
                channel: 'By Red Cow',
                image: 'type of <string>',
                views: '1,001,023',
                likes: '110,985',
                duration: '0:00/0:42',
                video: require('../../assets/images/video-list-0.jpg'),
                timestamp: Date.parse('12/18/2018'),
                comments: '' 
                }
            ]
        };
    }

    
    render() {
        return (
            <section className="main-video__section-wrapper">
                {this.state.Mainvideo.map(MainVideoObj => {
                return (
                <>
                    <div className="main-video__video-wrapper">
                        <img src={"" + MainVideoObj.video + ""} className="main-video__image"/>
                        <div className="main-video__video-buttons">
                            <img src={play} className="main-video__play" />
                            <div className="main-video__play-bar-wrapper">
                                <div className="main-video__play-bar"/>
                                <div className="main-video__play-duration">{MainVideoObj.duration}</div>
                            </div>
                            <div className="main-video__sound-screen-wrapper">
                                <img src={fullscreen} className="main-video__full-screen"/>
                                <img src={volume} className="main-video__volume"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-video__data-wrapper">
                        <h1 className="main-video__header">{MainVideoObj.title}</h1>
                        <div className="main-video__author-date">
                            <p className="main-video__author">{MainVideoObj.channel}</p>
                            <p className="main-video__date">{timeSince(MainVideoObj.timestamp)}</p>
                        </div>
                        <div className="main-video__info-wrapper">
                            <div className="main-video__views">
                                <img src={views}className="main-video__view-icon"/>
                                <p className="">{MainVideoObj.views}</p>
                            </div>
                            <div className="main-video__likes">
                                <img src={likes} className="main-video__like-icon"/>
                                <p className="main-video__like-count">{MainVideoObj.likes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-video__description">{MainVideoObj.description}
                    </div>
                </>
                )
            })}
            </section>
        )
    }
}