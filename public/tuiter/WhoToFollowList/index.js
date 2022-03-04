import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return (`
      <ul class="list-group">
        <li class="list-group-item">
          <p class="wd-bold-text mb-0">Who to follow</p>
        </li>
        ${
          who.map(item => {
            return(WhoToFollowListItem(item));
          }).join('')
        }
      </ul>
  `);
}

export default WhoToFollowList;
