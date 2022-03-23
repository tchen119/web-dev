import React from "react";

const PostSummaryItem = (
  {
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "./images/reactjs.jpg"
    }
  }) => {
    return (
      <>
        <li className="list-group-item">
          <div className="wd-container">
            <div className="wd-width-75">
              <p className="wd-white mt-0 mb-0">{post.topic}</p>
              <p className="wd-inline-display wd-bold-text mt-0 mb-0">{post.userName} </p>
              <i className="fas fa-check-circle wd-inline-display mt-0 mb-0"></i>
              <p className="wd-inline-display wd-white mt-0 mb-0"> - {post.time}</p>
              <p className="wd-bold-text mt-0 mb-0">{post.title}</p>
              <p className="wd-white">{post.tweets ? post.tweets + ' Tweets' : ''}</p>
            </div>
            <img src={post.image} className="wd-image wd-width-25 wd-float-right" alt=""></img>
          </div>
        </li>
      </>
    );
  }

export default PostSummaryItem;