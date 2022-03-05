import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <p className="wd-bold-text mb-0">Who to follow</p>
        </li>
        {
          who.map(who => {
             return(
                 <WhoToFollowListItem who={who}/>
             );
          })
        }
      </ul>
    </>
  );
}

export default WhoToFollowList;