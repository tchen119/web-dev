import React from "react";
import {Link} from "react-router-dom";
import './index.css';
import ExploreScreen from "./ExploreScreen";

const Tuiter = () => {
    return(
      <>
        <ExploreScreen/>
        <Link to="/hello">
            Hello
        </Link> |
        <Link to="/labs">
            Labs
        </Link>
      </>
    );
};

export default Tuiter;