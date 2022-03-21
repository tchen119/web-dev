import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import NavigationSidebar from "./NavigationSidebar";
import './index.css';

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