import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="col-10 col-lg-7">
      <div class="container">
        <!--Search Bar-->
        <div class="mb-2">
          <div class="wd-container">
            <input class="form-control mr-sm-2 wd-border-round wd-width-90" style="font-family:Arial, FontAwesome" type="search" placeholder="&#xF002; Search Tuiter" aria-label="Search">
            <i class="fa fa-gear text-primary wd-width-10 wd-float-right fa-2x"></i>
          </div>
        </div>
        <!--Navigation Bar-->
        <div class="mb-2">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <div class="d-none d-md-block">
              <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
              </li>
            </div>
          </ul>
        </div>
        <!--Image-->
        <img src="../images/shuttle.jpg" class="wd-width-100">
        <h2 class="wd-pos-relative-up wd-pos-relative-right wd-white wd-bold-text">SpaceX's Starship</h2>
        <!--Posts-->
        ${PostSummaryList()}
      </div>
    </div>
  `);
}

export default ExploreComponent;
