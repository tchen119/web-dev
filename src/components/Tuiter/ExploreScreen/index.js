import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../who-to-follow-list";

const ExploreScreen = () => {
  return(
    <>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="explore"/>
        </div>
        <ExploreComponent/>
        <div className="d-none d-lg-block col-lg-4 col-xl-3">
            <WhoToFollowList/>
        </div>
      </div>
    </>
  );
};

export default ExploreScreen;
