import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

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
             <i onClick={() => updateTuit(dispatch, {
               ...tuit,
               stats : {
                comments: tuit.stats.comments,
                retuits: tuit.stats.retuits,
                likes: tuit.stats.likes + 1,
                dislikes: tuit.stats.dislikes}
             })} className="far fa-thumbs-up ms-2"></i>
             {tuit.stats.likes}
        </div>
        <div className="wd-grid-col-fourth-page">
             <i onClick={() => updateTuit(dispatch, {
               ...tuit,
               stats : {
                comments: tuit.stats.comments,
                retuits: tuit.stats.retuits,
                likes: tuit.stats.likes,
                dislikes: tuit.stats.dislikes + 1}
             })} className="far fa-thumbs-down ms-2"></i>
             {tuit.stats.dislikes}
        </div>
        <div className="wd-grid-col-fourth-page">
          <a className="fa fa-share wd-gray wd-no-text-decoration" href="#"></a>
        </div>
      </div>
    </>
  );
}

export default TuitStats;