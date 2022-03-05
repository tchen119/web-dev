import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryList from "./PostSummaryList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";

const Tuiter = () => {
    return(
      <ExploreScreen/>
    );
};

export default Tuiter;