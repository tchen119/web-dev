import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
  ) => {
    return(
      <>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="../home.html" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-home"></span> Home</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-home"></i>
            </div>
          </a>
          <a href="explore.html" className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-hashtag"></span> Explore</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-hashtag"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-bell"></span> Notifications</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-bell"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-envelope"></span> Messages</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-envelope"></i>
            </div>
          </a>
          <a href="./bookmarks.html" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-bookmark"></span> Bookmarks</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-bookmark"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-list"></span> Lists</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-list"></i>
            </div>
          </a>
          <a href="./profile.html" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-user"></span> Profile</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-user"></i>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-none d-xl-block">
              <p className="mb-0"><span className="wd-inline-display fa fa-ellipsis-h"></span> More</p>
            </div>
            <div className="d-block d-xl-none">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </a>
        </div>
        <div className="d-grid mt-2">
          <a href="tuit.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
      </>
    );
}

export default NavigationSidebar;
