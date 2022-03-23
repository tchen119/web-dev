import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector(state => state.who);
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