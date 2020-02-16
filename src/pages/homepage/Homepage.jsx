// put all components from page into here and render this componenet into app.js
import React from 'react';
import Header from '../../components/header/Header'
import Comments from '../../components/comments/Comments';
import Video from '../../components/video/Video'
import NextVideo from '../../components/next-video/NextVideo';

class Homepage extends React.Component {
    constructor() {
    super()
    this.state = {
        mainVideo: {
            id: '001',
            title: 'BMX Rampage: 2018 Highlights',
            description: 'On a gusty day in Southern Utah,',
            channel: 'By Red Cow',
            image: 'type of <string>',
            views: '1,001,023',
            likes: '110,985',
            duration: 'type of <string>',
            video: 'type of <string>',
            timestamp: '12/18/2018',
            comments: [
                {
                    author: 'Michael Lyons',
                    timestamp: '12/18/2018',
                    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
                }
            ] 
        },
        
        sideVideos: [
                        {
            // include data for side videos 
                        }
                    ]
                }
            }
    render() {
        return (
            <main>
                <Video />
                <Comments />
                <NextVideo />
                
            </main>
        )
    }
}



export default Homepage;