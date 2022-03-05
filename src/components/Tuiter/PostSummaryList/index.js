import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
  return (
    <>
      <ul className="list-group wd-pos-relative-up">
        {
          posts.map(post => {
            return(
              <PostSummaryItem post={post}/>
            );
          })
        }
      </ul>
    </>
  )
}

export default PostSummaryList;