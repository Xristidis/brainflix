// put all components from page into here and render this componenet into app.js
import React from "react";
import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Video from "../../components/video/Video";
import NextVideo from "../../components/next-video/NextVideo";
import Pages from "../../pages/Page";

class Homepage extends React.Component {
  state = {
    mainVideo: {
      id: "12339",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: "type of <string>",
      views: "1,001,023",
      likes: "110,985",
      duration: "0:00/0:42",
      video: require("../../assets/images/video-list-0.jpg"),
      timestamp: Date.parse("12/18/2018"),
      comments: ""
    },

    nextVideo: [
      {
        id: "12345",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: require("../../assets/images/video-list-1.jpg")
      },
      {
        id: "12346",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: require("../../assets/images/video-list-2.jpg")
      },
      {
        id: "12347",
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: require("../../assets/images/video-list-3.jpg")
      },
      {
        id: "12348",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: require("../../assets/images/video-list-4.jpg")
      },
      {
        id: "12349",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: require("../../assets/images/video-list-5.jpg")
      },
      {
        id: "12350",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: require("../../assets/images/video-list-6.jpg")
      },
      {
        id: "12351",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: require("../../assets/images/video-list-7.jpg")
      },
      {
        id: "12352",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: require("../../assets/images/video-list-8.jpg")
      }
    ]
  };

  //  get request in lifectyvel methods in didMount()
  //   and inm the didUpdate()

  render() {
    return (
      <>
        <Pages>
          <Video {...this.state.mainVideo} />
          <Comments />
          <NextVideo {...this.state.nextVideo} />
        </Pages>
      </>
    );
  }
}

export default Homepage;
