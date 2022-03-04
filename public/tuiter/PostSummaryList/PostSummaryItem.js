const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="wd-container">
        <div class="wd-width-75">
          <p class="wd-gray mt-0 mb-0">${post.topic}</p>
          <p class="wd-inline-display wd-bold-text mt-0 mb-0">${post.userName}</p>
          <i class="fas fa-check-circle wd-inline-display mt-0 mb-0"></i>
          <p class="wd-inline-display wd-gray mt-0 mb-0"> - ${post.time}</p>
          <p class="wd-bold-text mt-0 mb-0">${post.title}</p>
          <p class="wd-gray">${post.tweets ? post.tweets + ' Tweets' : ''}</p>
        </div>
        <img src=${post.image} class="wd-image wd-width-25 wd-float-right">
      </div>
    </li>
  `);
}

export default PostSummaryItem;