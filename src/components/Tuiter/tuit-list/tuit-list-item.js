import React from "react";
import './tuit-list.css';
import {useDispatch} from "react-redux";
import TuitStats from "../home-screen/tuit-stats";

const TuitListItem = (tuit) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  const containsAttachment = tuit.tuit.hasOwnProperty("attachments");
  var containsVideo = false;
  var containsImage = false;

  if (containsAttachment) {
    const attachments = tuit.tuit.attachments;
    if (attachments.hasOwnProperty("video")) {
      containsVideo = true;
    }
    else if (attachments.hasOwnProperty("image")) {
      containsImage = true;
    }
  }

  return (
    <>
      <li className="list-group-item">
        <div className="wd-margin-top-bottom wd-margin-left-right">
          <div className="wd-float-left">
            <img className="wd-circular-image" src={tuit.tuit.avatarImage}></img>
          </div>
          <div className="wd-float-left wd-margin-left-right wd-width-90">
            <p className="wd-15-white-bold-text wd-display-inline">{tuit.tuit.topic}</p>
            <p className="wd-15-gray-text wd-display-inline">@{tuit.tuit.postedBy.username}</p>
            <i onClick={() => deleteTuit(tuit.tuit)}
                     className="fas fa-remove fa-2x fa-pull-right wd-float-right"></i>
            <p className="wd-15-white-text wd-max-width">{tuit.tuit.tuit}</p>


            {(containsVideo) ?
            <iframe className="wd-large-image wd-rounded-corners-top wd-rounded-corners-bottom" src={"https://www.youtube.com/embed/" + tuit.tuit.attachments.video}></iframe> :
            <div></div>}

            {(containsImage) ?
            <img className="wd-large-image wd-rounded-corners-top wd-rounded-corners-bottom" src={tuit.tuit.attachments.image}></img> :
            <div></div>}

            <TuitStats tuit={tuit.tuit}/>
          </div>
          <div className="wd-float-done"></div>
         </div>
       </li>
    </>
  );
}

export default TuitListItem;