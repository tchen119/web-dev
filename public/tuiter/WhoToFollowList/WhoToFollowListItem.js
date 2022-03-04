const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
          <div class="wd-container">
            <img src=${who.avatarIcon} class="wd-image-logo wd-width-10">
            <div class="wd-width-10"></div>
            <div class="wd-width-90">
              <p class="wd-bold-text wd-inline-display mb-0">${who.userName} <span class="fas fa-check-circle wd-inline-display"></span></p>
              <p>@${who.handle}</p>
            </div>
            <button class="btn btn-primary wd-border-round wd-float-right">Follow</button>
          </div>
        </li>
    `);
}

export default WhoToFollowListItem;