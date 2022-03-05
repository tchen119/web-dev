import React from "react";

const WhoToFollowListItem = (
  {
      who = {
          avatarIcon: './images/nasa.png',
          userName: 'NASA',
          handle: 'NASA',
      }
  }) => {
    return(
      <>
        <li className="list-group-item">
          <div className="wd-container">
            <img src={who.avatarIcon} className="wd-image-logo wd-width-10" alt=""></img>
            <div className="wd-width-10"></div>
            <div className="wd-width-90">
              <p className="wd-bold-text wd-inline-display mb-0">{who.userName} <span className="fas fa-check-circle wd-inline-display"></span></p>
              <p>@{who.handle}</p>
            </div>
            <button className="btn btn-primary wd-border-round wd-float-right">Follow</button>
          </div>
        </li>
      </>
    );
}

export default WhoToFollowListItem;