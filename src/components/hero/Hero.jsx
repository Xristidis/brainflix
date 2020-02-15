import React from 'react';
import './Hero.scss';
import VideoPlaceholder from '../../assets/images/video-list-0.jpg'
import views from '../../assets/icons/SVG/Icon-views.svg' // sometimes assets dont show
import likes from '../../assets/icons/SVG/Icon-likes.svg'



export default class Main extends React.Component {
    
    render() {
        return (
            <main>
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
                        <h1>BMX Rampage: 2018 Highlights</h1>
                        <div className="main-video__author-date">
                            <p className="main-video__author">Red Cow</p>
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
                <section class="comments">
                    <h2 class="comments__header">3 Comments</h2>
                    <div class="comments__wrapper">
                        <img class="comments__photo"></img>
                        <form class="comments__new">
                            <div class="comments__comment-area">
                                <label for="" class="comments__label">JOIN THE CONVERSATION</label>
                                <textarea type="text" name="comment" placeholder="That was easily the most spectacualr BMX moment ever." maxlength="120" size="30" rows="4" width="48" height="48" class="comments__comment-input"></textarea>
                            </div>
                            <input type="submit" value="COMMENT" class="comments__button"></input>
                        </form>
                    </div>
                    <div class="comments__past-wrapper" id="comments__past-wrapper">
                        <div className="comments__past">
                            <img className="comments__past-photo"/>
                            <div className="comments__info">
                                <div className="comments__name">Michael Lyons</div>
                                <div className="comments__date">12/18/2018</div>
                                <div className="comments__content">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.</div>
                            </div>
                        </div>
                        <div className="comments__past">
                            <img className="comments__past-photo"/>
                            <div className="comments__info">
                                <div className="comments__name">Gary Wong</div>
                                <div className="comments__date">12/18/2018</div>
                                <div className="comments__content">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!</div>
                            </div>
                        </div>
                        <div className="comments__past">
                            <img className="comments__past-photo"/>
                            <div className="comments__info">
                                <div className="comments__name">Theodore Duncan</div>
                                <div className="comments__date">11/15/2018</div>
                                <div className="comments__content">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</div>
                            </div>
                        </div>                  
                    </div>

                </section>
            </main>
        )
    }
}

{/* //  <h1>{this.props.mainVideo.title}</h1> */}