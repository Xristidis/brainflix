import React from "react";
import "../upload/Upload.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";

class Upload extends React.Component {
  render() {
    return (
      <main>
        <div className="upload__header-wrapper">
          <h1 className="upload__header">Upload Video</h1>
        </div>
        <div className="upload__video-info">
          <div className="upload__photo-wrapper">
            <h2 className="upload__video-thumbnail-heading">VIDEO THUMBNAIL</h2>
            <img className="upload__video-photo" src={uploadPreview}></img>
          </div>
          <form class="upload__new">
            <div class="upload__upload-area">
              <label for="" class="upload__label">
                TITLE YOUR VIDEO
              </label>
              <textarea
                type="text"
                name="comment"
                placeholder="Add a title to your video"
                maxlength="120"
                size="30"
                rows="4"
                width="48"
                height="48"
                className="upload__title"
              ></textarea>
              <label for="" className="upload__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Add a description of your video"
                maxlength="150"
                className="upload__description"
              ></textarea>
              <div className="upload__button-wrapper">
                <input
                  type="submit"
                  value="PUBLISH"
                  className="upload__button"
                  disabled
                ></input>
                <input
                  type="submit"
                  value="CANCEL"
                  className="upload__cancel-button"
                  disabled
                ></input>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Upload;
