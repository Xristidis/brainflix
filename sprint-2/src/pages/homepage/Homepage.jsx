// put all components from page into here and render this componenet into app.js
import React from "react";
import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";
import NextVideo from "../../components/next-video/NextVideo";
import Pages from "../../pages/Page";
import axios from "axios";
const apiKey = "?api_key=<c7956832-c973-4faf-a93c-e8e1672bf6ae>";

class Homepage extends React.Component {
  state = {
    mainVideo: {},
    nextVideoList: []
  };
  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=<c7956832-c973-4faf-a93c-e8e1672bf6ae>`
      )
      .then(res => {
        const nextVideoList = res.data;
        const mainVideoId = nextVideoList[0].id; equals specific url .. check params to see if url has video is if it doesnt pull first video. 
        this.setState({ nextVideoList });
        return axios.get(
          `https://project-2-api.herokuapp.com/videos/${mainVideoId}?api_key=<c7956832-c973-4faf-a93c-e8e1672bf6ae>`
        );
      })
      .then(res => {
        console.log(res.data);
        const mainVideo = res.data;
        this.setState({ mainVideo });
      });
  }
  // if param is set then grab from video id. if not grab first video

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      const videoId = this.props.match.params.videoId;

      console.log("MATCH");

      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=<c7956832-c973-4faf-a93c-e8e1672bf6ae>`
        )
        .then(res => {
          console.log(res.data);
          const mainVideo = res.data;
          this.setState({ mainVideo });
        });
    }
  }

  render() {
    // console.log(this.props.match);
    return (
      <>
        <Pages>
          <Video {...this.state.mainVideo} />
          <Comments />
          <NextVideo nextVideoList={this.state.nextVideoList} />
        </Pages>
      </>
    );
  }
}

export default Homepage;
