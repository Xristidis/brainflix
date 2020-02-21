import React from "react";
import "./Comments.scss";
import VideoPlaceholder from "../../assets/images/video-list-0.jpg";
import views from "../../assets/icons/SVG/Icon-views.svg"; // sometimes assets dont show
import likes from "../../assets/icons/SVG/Icon-likes.svg";

// TIMESTAMP FUNCTION TO CREATE "TIME AGO". FEEL LIKE THIS
// COULD HAVE BEEN NICELY DECLARED IN A PARENT AND CALLED HERE?
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
var aDay = 24 * 60 * 60 * 1000;
console.log(timeSince(new Date(Date.now() - aDay)));
console.log(timeSince(new Date(Date.now() - aDay * 2)));

export default class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Michael Lyons",
          date: Date.parse("12/18/2018"),
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out   they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
          name: "Gary Wong",
          date: Date.parse("12/18/2018"),
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
          name: "Theodore Duncan",
          date: Date.parse("11/15/2018"),
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
        }
      ]
    };
  }
  render() {
    return (
      <section class="comments">
        <h2 class="comments__header">3 Comments</h2>
        <div class="comments__wrapper">
          <img class="comments__photo"></img>
          <form class="comments__new">
            <div class="comments__comment-area">
              <label for="" class="comments__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                type="text"
                name="comment"
                placeholder="That was easily the most spectacualr BMX moment ever."
                maxlength="120"
                size="30"
                rows="4"
                width="48"
                height="48"
                className="comments__comment-input"
              ></textarea>
            </div>
            <input
              type="submit"
              value="COMMENT"
              class="comments__button"
              disabled
            ></input>
          </form>
        </div>
        <div class="comments__past-wrapper" id="comments__past-wrapper">
          {this.state.users.map(commentObj => {
            return (
              <div className="comments__past">
                <img className="comments__past-photo" />
                <div className="comments__info">
                  <div className="comments__name">{commentObj.name}</div>
                  <div className="comments__date">
                    {timeSince(commentObj.date)}
                  </div>
                  <div className="comments__content">{commentObj.comment}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
