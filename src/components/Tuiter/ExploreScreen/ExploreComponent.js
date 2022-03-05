import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(
    <>
      <div className="col-10 col-lg-7">
        <div className="container">
          <div className="mb-2">
            <div className="wd-container">
              <input className="form-control mr-sm-2 wd-border-round wd-width-90"
                type="search" placeholder="&#xF002; Search Tuiter" aria-label="Search"></input>
              <i className="fa fa-gear text-primary wd-width-10 wd-float-right fa-2x"></i>
            </div>
          </div>
          <div className="mb-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="./for-you.html">For you</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./trending.html">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./news.html">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./sports.html">Sports</a>
              </li>
              <div className="d-none d-md-block">
                <li className="nav-item">
                  <a className="nav-link" href="./entertainment.html">Entertainment</a>
                </li>
              </div>
            </ul>
          </div>
          <img src="./images/shuttle.jpg" className="wd-width-100" alt=""></img>
          <h2 className="wd-pos-relative-up wd-pos-relative-right wd-white wd-bold-text">SpaceX's Starship</h2>
          <PostSummaryList/>
        </div>
      </div>
    </>
  );
}

export default ExploreComponent;
