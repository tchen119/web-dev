const NavigationSidebar = () => {
    return(`
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="../home.html" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-home"></span> Home</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-home"></i>
            </div>
          </a>
          <a href="explore.html" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-hashtag"></span> Explore</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-hashtag"></i>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-bell"></span> Notifications</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-bell"></i>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-envelope"></span> Messages</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-envelope"></i>
            </div>
          </a>
          <a href="../bookmarks.html" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-bookmark"></span> Bookmarks</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-bookmark"></i>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-list"></span> Lists</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-list"></i>
            </div>
          </a>
          <a href="../profile.html" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-user"></span> Profile</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-user"></i>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-none d-xl-block">
              <p class="mb-0"><span class="wd-inline-display fa fa-ellipsis-h"></span> More</p>
            </div>
            <div class="d-block d-xl-none">
              <i class="fa fa-ellipsis-h"></i>
            </div>
          </a>
        </div>
        <div class="d-grid mt-2">
          <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}

export default NavigationSidebar;
