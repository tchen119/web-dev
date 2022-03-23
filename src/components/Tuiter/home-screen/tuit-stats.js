import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
    <>
      <div className="wd-grid-row wd-margin-top-bottom">
        <div className="wd-grid-col-fourth-page">
          <a className="fa fa-comment-o wd-gray wd-right-padding wd-no-text-decoration" href="#"
             id="comment"></a>
          <label className="wd-small-gray-text" for="comment">{tuit.stats.comments}</label>
        </div>
        <div className="wd-grid-col-fourth-page">
          <a className="fa fa-retweet wd-gray wd-right-padding wd-no-text-decoration" href="#"
             id="retweet"></a>
          <label className="wd-small-gray-text" for="retweet">{tuit.stats.retuits}</label>
        </div>
        <div className="wd-grid-col-fourth-page">
          <span onClick={likeTuit}>
            {
              tuit.liked &&
              <i className="fas fa-heart me-1"
                 style={{color: 'red'}}></i>
            }
            {
              !tuit.liked &&
              <i className="far fa-heart me-1"></i>
            }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="wd-grid-col-fourth-page">
          <a className="fa fa-share wd-gray wd-no-text-decoration" href="#"></a>
        </div>
      </div>
    </>
  );
}

export default TuitStats;